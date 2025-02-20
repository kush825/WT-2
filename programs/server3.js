const http = require('http');       

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url=="/about"){
        res.statusCode=200;
        // res.writeHead='hello world';
        res.setHeader("Content-Type","text/html")
        res.end("<h1>hello world</h1>");
    }
})

server.listen(5000,()=>{
    console.log("server is running on port 6000")
})
   