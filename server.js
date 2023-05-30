const http = require("http");

const app = require("./app");

const onError = (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }

    let bind = typeof port === 'string' ? `Pipe ${process.env.PORT}` : `Port ${process.env.PORT}`;

    switch (error.code) {
        case 'EACCES': 
            console.error(`${bind} requires elevated previleges`)
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1)
            break;
        default:
            throw error
    }

}

const onListening = () => {
    console.log(`server is listening on port ${process.env.PORT}`);
}


app.set('port', process.env.PORT);
const server = http.createServer(app);
server.listen(process.env.PORT);
server.on("error", onError)
server.on("listening", onListening)