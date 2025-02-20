const mongoose = require('mongoose');
const Student = require('./UserSchema');
const express = require('express');
const bodyParser = require('body-parser');


const atlasUrl = "mongodb+srv://parmarkush8605:Kush%40825@cluster0.wh7cg.mongodb.net/";


mongoose.connect(atlasUrl).then(()=>{
    console.log("Connected to DB Server");

    const app = express();

    app.use(bodyParser.json())

    app.get("/stu",async(req,res)=>
    {
        const data= await Student.find();
        res.send(data);
    })

        
    app.delete("/student/:id", async (req,res)=>{
        const data = await Student.deleteOne({_id:req.params.id});
        res.send(data)
    });

    app.post("/stu",async (req,res)=>{
        const obj= new Student({
            StudentName : req.body.StudentName,
            StudentMobile: req.body.StudentMobile,
            StudentEmail: req.body.StudentEmail,
            StudentPassword: req.body.StudentPassword
            

        })
        const data= await obj.save();
        res.send(data);
        
    })

    app.patch("/student/:id", async (req,res)=>{
        let stu = await Student.findOne({_id:req.params.id});
        stu.StudentName = req.body.StudentName;
        stu.StudentEmail = req.body.StudentEmail;
        stu.StudentMobile = req.body.StudentMobile;
        stu.StudentPassword = req.body.StudentPassword;
        const data = await stu.save();
        res.send(data);
    });

    
    app.listen(3000,()=>{
        console.log("Web server started @ 3000");
    });
});