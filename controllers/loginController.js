
const moment = require("moment");

const responseHandler = require("../utils/responseHandler"),
    userService = require("../services/usersService"),
    helpers = require("../utils/helpers");

let usersController = {
    loginUser: async function (req, res, next) {
        try {

            /* 
                custom validations which cannot be done by validator library that has been used,
                should come here..
            */

            let user = await userService.createUser(req);
            res.status(200).send(responseHandler(1, 200, "User created successfully!", user))

        } catch(error) {
            next(error)
        }
    }
}

module.exports = usersController