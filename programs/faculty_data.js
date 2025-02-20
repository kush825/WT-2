const mongoose = require('mongoose');
const Feculty = require('./feculty');
const express = require('express');
const bodyParser = require('body-parser');
const feculty = require('./feculty');
const atlasurl = "mongodb+srv://parmarkush8605:Kush%40825@cluster0.wh7cg.mongodb.net/";
mongoose.connect(atlasurl).then(()=>{
    console.log("Connected to DB Server")});
    const app = express();

    app.use(bodyParser.json())

    app.use('/fecultyname',(req,res,next)=>{
        console.log("Middleware");
        next(); 
    })
    app.get("/fecultyname/get",async (req,res)=>{
        const data = await feculty.find();
        res.send(data);
    });
    app.delete("/fecultyname/:id", async (req,res)=>{
        const data = await feculty.deleteOne({_id:req.params.id});
        res.send(data)
    });
    app.post("/fecultyname", async (req,res)=>{
        const obj = new Feculty({
            FecultyName:req.body.FecultyName,
            FecultyMobile:req.body.FecultyMobile,
            FecultyEmail: req.body.FecultyEmail,
            FecultyPassword: req.body.FecultyPassword,
        });
        const data = await obj.save();
        res.send(data);

    });
    app.patch("/Feculty/:id", async (req,res)=>{
        let stu = await Feculty.findOne({_id:req.params.id});
        stu.FecultyName = req.body.FecultyName;
        stu.FecultyEmail = req.body.FecultyEmail;
        stu.FecultyMobile = req.body.FecultyMobile;
        stu.FecultyPassword = req.body.FecultyPassword;
        const data = await stu.save();
        res.send(data);
    });
    app.listen(3456,()=>{
        console.log("Web server started @ 3456");
    });




