const express = require('express'),
    router = express.Router();


const usersController = require("../controllers/usersController"),
    userRequestValidator = require("../validators/userValidator");


const authorization = require("../middlewares/authorization");


router.post('/create', authorization, userRequestValidator.createUser, usersController.createUser)

module.exports = router