const jwt = require('jsonwebtoken'),
    responseHandler = require("../utils/responseHandler");

module.exports = async (req, res, next) => {
    const authorization = req.headers.authorization ? req.headers.authorization.split(" ")[1] : ""
    try {
        const decode = jwt.verify(authorization, process.env.JWT_SECRET);

        // verify if users_pid is exist
        if (!decode.users_id) {
            throw {
                status: 0,
                httpCode: 401,
                message: "Invalid token"
            }
        }

        // verify if issuer is correct or not
        if (decode.iss !== "node-api-skelleton") {
            throw {
                status: 0,
                httpCode: 401,
                message: "Invalid token"
            }
        }

        next()
    } catch(error) {
        console.log(error)

        if (error.name === "TokenExpiredError") {
            res.status(401).send(responseHandler(0,401,`Authorization failed, ${error.message}`, error))
            return
        }

        res.status(401).send(responseHandler(0,401,`${error.message}`))
        return
    }
}