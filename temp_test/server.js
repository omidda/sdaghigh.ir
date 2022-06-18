var express = require('express')
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
var server = app.listen(2000, () => {
    console.log("Server is listening to PORT",
        server.address().port);
 })
