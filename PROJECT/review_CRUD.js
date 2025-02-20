const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const reviews = require('./reviewschema');

const atlasUrl = "mongodb+srv://parmarkush8605:Kush%40825@cluster0.wh7cg.mongodb.net/test";

mongoose.connect(atlasUrl).then(() => {

    console.log("Connected to MongoDB Atlas");

    const app = express();

    app.use(bodyParser.json())

    app.get('/review', async (req,res) => {
        const data = await reviews.find()
        res.send(data);
    })

    app.get('/review/:id', async (req,res) => {
        const data = await reviews.findOne({_id:req.params.id})
        res.send(data)
    })

    app.post('/review/insert', async (req, res) => {
            const { review_id, product_id, user_id, rating, review_text, review_date } = req.body;
            const newReview = new reviews({
                review_id,
                product_id,
                user_id,
                rating,
                review_text,
                review_date: review_date || Date.now()
            });
    
            const data = await newReview.save();
            res.status(201).json({ message: "Review added successfully", reviews: data });
    });

    app.delete('/review/delete/:id', async(req,res) => {
            const data = await reviews.deleteOne({_id:req.params.id})
            res.status(201).json({ message: "Payment deleted successfully", reviews: data });
        })

    app.patch("/review/update/:id", async (req, res) => {
                const updatedreview = await reviews.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true, runValidators: true }
                );
                res.status(200).json({ message: "cartitem updated successfully", updatedreview });
            });
    app.listen(3000, () => {
        console.log(" Web Server Started @ 3000");
    })
})