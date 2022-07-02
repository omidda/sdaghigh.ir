const MongoBackend = require("./services/data/MongoBackend");

console.log("SDAGHIGH . IR Back-end runned!");

async function run() { 
    const mongoBackend = new MongoBackend();
    return mongoBackend.max();
}

run().then((res) => {
    console.log(res);
}).catch((err) => console.error(err));
