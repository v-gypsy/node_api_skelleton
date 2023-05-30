
// import all the inbuilt module/packages here


// import all the newly installed packages/modules here
const express=require('express'),
    app=express(),
    dotenv=require('dotenv').config(),
    bodyParser=require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan'),
    morganJson = require('morgan-json');


// import custom modules/pacakges here
const responsehandler = require("./utils/responseHandler")
    dbconnection = require('./models/index'),
    userRoutes = require("./routes/usersRoutes"),
    logger = require("./utils/logger"),
    rateLimit = require('./middlewares/rateLimit');


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}));
app.use(cors())

// log part
const appStream = {
    write: (logData) => {
        const { timeStamp, method, url, status, length, responseTime, headers, reqBody } = JSON.parse(logData);
        logger.http({ timeStamp, method, url, status: Number(status), length, responseTime, headers, reqBody });
    }
}

morgan.token('headers', function(req, res) {
    return JSON.stringify(req.headers)
})

morgan.token('reqBody', function(req, res) {
    if (req.body.username) {
        delete req.body.username
    }

    if (req.body.password) {
        delete req.body.password
    }

    return JSON.stringify(req.body)
})

const format = morganJson({
    timeStamp: ":date[web]",
    method: ":method",
    url: ":url",
    status: ":status",
    length: ":res[content-length]",
    responseTime: ":response-time ms",
    headers: ":headers",
    reqBody: ":reqBody"
})

app.use(morgan(format, {
    stream: appStream,
    skip: function(req, res) {
        // any condition that needs not be logged can be mentioned here...
    }
}))

// routes part starts here...
app.use('/user', userRoutes);

// no route found
app.use(function(req, res, next) {
    res.setHeader('Content-Type','application/json');
    res.status(404).send(JSON.stringify(responsehandler(0,404,"HTTP 404 No Resource Found")))
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(404).send(JSON.stringify(responsehandler(0, 500, "something went wrong!", err)))
})

process.on('unhandledRejection', (reason, p) => { console.error(`unhandled rejection with reson ${reason} at ${p}`); });
process.on('uncaughtException', e => console.error(e) );

module.exports = app;