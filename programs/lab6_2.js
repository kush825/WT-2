const express = require("express");

const fs = require("fs")

const app = express();

app.get("/student/",(req,res)=>{
    const data = fs.readFileSync("about.txt","utf8")
    res.send(data);
})

app.get("/student/about/",(req,res)=>{
    const data = fs.readFileSync("about2.txt","utf8")
    res.send(data);
})

app.get("/student/contact/",(req,res)=>{
    const data = fs.readFileSync("contact.txt","utf8")
    res.send(data);
})

app.get("/student/features/",(req,res)=>{
    const data = fs.readFileSync("features.txt","utf8")
    res.send(data);
})

app.get("/student/feedback/",(req,res)=>{
    const data = fs.readFileSync("feedback.txt","utf8")
    res.send(data);
})


app.listen(5500,()=>{
    console.log("Server is running on port 5500");
})