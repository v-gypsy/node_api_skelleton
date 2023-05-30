const express = require('express'),
    router = express.Router();


const loginController = require("../controllers/loginController"),
    userRequestValidator = require("../validators/userValidator");


router.post('/login', loginController.loginUser)

module.exports = router