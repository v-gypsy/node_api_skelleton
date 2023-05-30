const express = require('express'),
    router = express.Router();


const usersController = require("../controllers/usersController"),
    userRequestValidator = require("../validators/userValidator");


router.post('/create', userRequestValidator.createUser, usersController.createUser)

module.exports = router