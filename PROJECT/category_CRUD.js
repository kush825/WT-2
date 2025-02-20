const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const categories = require('./categoryschema')

const atlasUrl = "mongodb+srv://parmarkush8605:Kush%40825@cluster0.wh7cg.mongodb.net/test";

mongoose.connect(atlasUrl).then(()=>{

    console.log("Connected to DB Server")

    const app = express()

    app.use(bodyParser.json())


    app.get("/ctg",async (req,res)=>{
        const data = await categories.find();
        res.send(data);
    });
    
    app.get("/ctg/:id", async (req,res)=>{
        const data = await categories.findOne({_id:req.params.id});
        res.send(data);
    })

    app.delete("/ctg/delete/:id", async (req,res)=>{
        const data = await categories.deleteOne({_id:req.params.id});
        res.send(data)
    });


    app.post('/ctg/insert', async (req, res) => {
       
        const obj = new categories({
            category_id: req.body.category_id,
            name: req.body.name,
            description: req.body.description
        });
        const data = await obj.save();
        res.send(data);

    });

    app.patch('/ctg/update/:id', async (req, res) => {
        const updatedCategory = await categories.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'Category updated successfully', categories: updatedCategory });
    });

    app.listen(3000,()=>{
        console.log("Web server started @ 3000");
    });
})