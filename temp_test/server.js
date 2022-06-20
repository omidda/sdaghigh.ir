var express = require('express')
var mongoose = require('mongoose')

var app = express()
var bodyParser = require('body-parser')
// create application/json parser
app.use(express.static(__dirname));
app.use(bodyParser.json())

var LogMessage = mongoose.model("LogMessage", {
    title : String,
    message: String,
    phoneNumber: Number
})

app.get("/chk", (req, res) => {

    LogMessage.find({"_id": "62b0000230d3c60226f2f7fe"},(err,data) => {
        res.send(data)
     })
    
})
 
app.post('/chkpost', (req, res) => { 
    console.log(JSON.stringify(req.body) + ' B O D Y ')

    var newMessage = new LogMessage(req.body)
    newMessage.save((err) => {
        if (err)
            console.log("Ann error occured while saving")
        else
            console.log("Data have saved")
     })
    res.sendStatus(200)
})

// let mongoconstr = "mongodb://"+process.env.TV_MONGO_USER+
// ":"+process.env.TV_MONGO_PASSWORD+
// "@"+process.env.TV_MONGO_HOST+":"+
// process.env.TV_MONGO_PORT+"/admin?w=majority"

let mongoconstr = "mongodb://localhost:27017"

console.log(mongoconstr)

mongoose.connect(mongoconstr, (err)=>{
    if(err)
    {
        console.log(`Mongo DB not connected ${err}`)
    }
    else{
        console.log(`Mongo DB is connected`)
    }
    
})

var server = app.listen(2000, () => {
    console.log("Server is listening to PORT",
        server.address().port);
 })
