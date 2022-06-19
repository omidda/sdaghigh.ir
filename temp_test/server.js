var express = require('express')
var mongoose = require('mongoose')

var app = express()
var bodyParser = require('body-parser')
// create application/json parser
app.use(express.static(__dirname));
app.use(bodyParser.json())

app.get("/chk", (req, res) => {
    res.send('HELLO BABY')
})
 
app.post('/chkpost', (req, res) => { 
    console.log(JSON.stringify(req.body) + ' B O D Y ')
    res.sendStatus(200)
})

let mongoconstr = "mongodb://"+process.env.TV_MONGO_USER+
":"+process.env.TV_MONGO_PASSWORD+
"@"+process.env.TV_MONGO_HOST+":"+
process.env.TV_MONGO_PORT+"/admin?w=majority"

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
