const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url=="/about"){
        const data = fs.readFileSync("about.txt","utf8")
        res.end(data)
    }
    else if(req.url=="/contact"){
        const data = fs.readFileSync("contact.txt","utf8")
        res.end(data)
    }
})

server.listen(9000,()=>{
    console.log("server is running on port 9000")
})