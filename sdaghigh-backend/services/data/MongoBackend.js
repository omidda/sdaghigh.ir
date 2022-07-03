const { MongoClient } = require("mongodb");
const { globalConfig } = require("../../config/index");

class MongoBackend {


    constructor() {
        this.mongoUrl = globalConfig.mongodb.url + "/" + globalConfig.mongodb.;
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
        this.collection = this.client.db("sdaghigh").collection("contactus");
        return this.client;
    }

    async disconnect() {
        if (this.client) { 
            return this.client.close();
        }
        return false;
    }
    
    async insert(contactus) {
        if (!contactus)
            contactus = {
                fullname: "Sajad Daghigh",
                email: "sajad.daghigh@gmail.com",
                mobile: "+989388926636",
                message: "SALAM KHOBI?"
            }
        return this.collection.insertOne(contactus);
    }

    async getMax() {
        return this.collection.findOne({}, { sort : { value: -1 } });
    }

    async max() { 
        try {
            console.info("Connection to MongoDB");
            console.time("mongodb-connect");

            const client = await this.connect();
            await client.db("admin").command({ ping: 1 });
            console.info("Success Connection");
            console.timeEnd("mongodb-connect");
            
            console.info("Inserting a new document");
            console.time("mongodb-insert");
            const insertResult = await this.insert();
            // console.info(`${insertResult.result.n} Document inserted.`);
            console.timeEnd("mongodb-insert");

            console.info("Finding a new document");
            console.time("mongodb-query");
            const queryResult = await this.getMax();
            console.info(`${JSON.stringify(queryResult)} Document Query.`);
            console.timeEnd("mongodb-query");

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