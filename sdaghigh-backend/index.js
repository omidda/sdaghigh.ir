const MongoBackend = require("./services/data/MongoBackend");
const mongoose = require("mongoose");
const http = require("http");
const globalConfig = require("./config/index");

console.log("SDAGHIGH . IR Back-end runned!");

const server = http.createServer((req, res) => { 
    res.writeHead(200);
    res.end("First http endpoint in node js");
})

async function run() { 
    const mongoBackend = new MongoBackend();
    return mongoBackend.max();
}



run().then((res) => {
    server.listen(globalConfig.httpServer.port,
        globalConfig.httpServer.hostname);
    console.log(res);
}).catch((err) => console.error(err));
