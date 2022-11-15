var express = require('express')
var app = express();

var detailsCounter = 0;
var serverRequests = 0;

app.use((req, res, next) => {
    console.log("Server Accessed = ", ++serverRequests)
    next()
})

app.listen(3004, () => {
    console.log("Server is listening on port 3004")

})

app.get('/', (req, res) => {
    console.log("Got Request on /")
    res.send("<h2>This is Question 1.1</h2>")
})

app.get('/about', (req, res) => {
    console.log("Got Request on /about")
    console.log("Dir = ", __dirname)
    res.sendFile(__dirname + "/views/about.html")
})

//"Server Access = " increments twice here as the server gets accessed twice going to details as there is also a re-direct to the / page
app.get('/details', (req, res) => {
    const d = new Date();
    console.log("Got Request on /details | /details requests = ", ++detailsCounter, "from: ", req.hostname, "Response at: ", d.getHours(), ":", d.getMinutes(), ":", d.getSeconds())
    res.redirect("/")
})

console.log("Server Here")

