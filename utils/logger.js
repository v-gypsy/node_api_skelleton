const path = require("path"),
    rfs = require("rotating-file-stream"),
    fs = require('fs'),
    {createLogger, format, transports} = require("winston");

const logsDir = path.resolve("./logs");

// making sure logs directory exists or else create one.
fs.existsSync(logsDir) || fs.mkdirSync(logsDir);

// create a rotating write stream
const accessLogStream = rfs.createStream('applogger.log', {
    interval: '1d',
    path: logsDir
})

const logger = createLogger({
    level: 'silly',
    format: format.json(),
    exitOnError: false,
    objectMode: true,
    transports: [
        new transports.Stream({stream: accessLogStream})
    ]
})

module.exports = logger;