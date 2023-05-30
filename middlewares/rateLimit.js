const rateLimit = require('express-rate-limit');

const responseHandler = require("../utils/responseHandler");

/*
    below config can be applied to all routes as common rate limiter,
    as it is based on ip address
*/

const commonRateLimit = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // number of requests per ip in given window
    handler: (req, res, next, options) => {
        res.status(429).send(JSON.stringify(responseHandler(0,429,"Too many request, please try again later!!")))
    }
})

/*
    customised rate limit.
    this is example for only login api, as it is based on username
*/

const customiseLoginRateLimit = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // number of requests per ip in given window
    keyGenerator: (req) => req.body.username, // custom key instead of ip address
    handler: (req, res, next, options) => {
        res.status(429).send(JSON.stringify(responseHandler(0,429,"Too many request, please try again later!!")))
    }
})

module.exports = {
    commonRateLimit: commonRateLimit,
    customiseLoginRateLimit: customiseLoginRateLimit
}