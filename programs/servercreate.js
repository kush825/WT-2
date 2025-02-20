const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url=="/about"){
        res.end("this is about page")
    }
    else if(req.url=="/contact"){
        res.end("this is contact page")
    }
    else if(res.url=="/home"){
        res.end("this is home page")
    }
    else if(res.url=="/gallery"){
        res.end("this is gallery page")
    }
    else if(req.url=="/features"){
        res.end("this is features page")
    }
    // res.end("hello world")
})

server.listen(8000,()=>{
    console.log("server is running on port 8000");
})