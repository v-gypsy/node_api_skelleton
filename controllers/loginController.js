
const moment = require("moment");

const responseHandler = require("../utils/responseHandler"),
    loginService = require("../services/loginService"),
    helpers = require("../utils/helpers");

let loginController = {
    loginUser: async function (req, res, next) {
        try {

            /* 
                custom validations which cannot be done by validator library that has been used,
                should come here..
            */

            let resp = await loginService.loginUser(req);
            res.status(200).send(responseHandler(1, 200, "User authenticated successfully!", resp))

        } catch(error) {
            next(error)
        }
    }
}

module.exports = loginController