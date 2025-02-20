const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url=="/about"){
        const data = fs.readFileSync("products.html","utf8")
        res.end(data)
    }
})

server.listen(2000,()=>{
    console.log("server is running on port 6000")
})
