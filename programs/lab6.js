const express = require("express");

const app = express();

app.get("/index/",(req,res)=>{
    res.send("hello world");
})

app.get("/student/",(req,res)=>{
    res.send("Welcome to student's page");
})

app.get("/about/",(req,res)=>{
    res.send("Welcome to about page");
})

app.get("/contact/",(req,res)=>{
    res.send("Welcome to contact page");
})

app.get("/features/",(req,res)=>{
    res.send("Welcome to features page");
})

app.get("/feedback/",(req,res)=>{
    res.send("Welcome to feedback page");
})


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})