const { MongoClient } = require("mongodb");

class MongoBackend {

    db_server = "localhost";
    db_port = 37017;
    db_name = "sdaghigh"

    constructor() {
        this.mongoUrl = "mongodb://" + this.db_server +
            ":" + this.db_port + "/" + this.db_name;
        console.log('MONGO DB CONNECTED', this.mongoUrl);
        this.client = null;
        this.collection = null;
    }

    async connect() {
        const mongoClient = new MongoClient(this.mongoUrl, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        this.client = await mongoClient.connect();
        this.collection = this.client.db("sdaghigh");
        return this.client;
    }

    async disconnect() {
        if (this.client) { 
            return this.client.close();
        }
        return false;
    }
    
    async insert() {
        
    }

    async getMax() {
        
    }

    async max() { 
        try {
            console.info("Connection to MongoDB");
            console.time("mongodb-connect");

            const client = await this.connect();
            await client.db("admin").command({ ping: 1 });
            console.info("Success Connection");

            console.timeEnd("mongodb-connect");
            console.info("Disconnecting from MongoDB");
            console.time("mongodb-disconnect");
          
            console.timeEnd("mongodb-disconnect");
        }
        finally {
              await this.disconnect();
         }
        
            
    }

}
 
module.exports = MongoBackend;