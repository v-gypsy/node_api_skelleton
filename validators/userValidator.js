const { check, validationResult } = require("express-validator");

const responseHandler = require("../utils/responseHandler");

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).send(responseHandler(0, 422, errors.errors[0].msg))
    next()
}


let validators = {
    createUser: [
        check('name')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage("name cannot be empty")
        .bail()
        .isLength({ min: 3 })
        .withMessage("minimum 3 characters are required for name feild.")
        .bail(),
        check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage("invalid email address")
        .bail(),
        check('password')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage("password cannot be empty.")
        .bail()
        .isLength({ min: 8 })
        .withMessage('minimum 8 characters are required for password')
        .bail(),
        (req, res, next) => {
            return validate(req, res, next)
        }
    ]
}

module.exports = validators