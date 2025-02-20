const mongoose = require('mongoose');
const express = require('express');
const payments = require('./paymentschema');
const bodyParser = require('body-parser')

const atlasUrl = "mongodb+srv://parmarkush8605:Kush%40825@cluster0.wh7cg.mongodb.net/test";

mongoose.connect(atlasUrl).then(() => {
    console.log("Connected to MongoDB Atlas");

    const app = express();

    app.use(bodyParser.json())

    app.get("/payment", async (req,res) => {
        const data = await payments.find()
        res.send(data)
    })

    app.get("/payment/:id", async (req,res) => {
        const data = await payments.findOne({_id:req.params.id})
        res.send(data)
    })

    app.post("/payment/insert", async (req, res) => {
            const { payment_id, order_id, payment_method, payment_status, payment_date } = req.body;
            const obj = new payments({
                payment_id,
                order_id,
                payment_method,
                payment_status,
                payment_date: payment_date || Date.now() // Default to current date if not provided
            });
            const data = await obj.save();
            res.status(201).json({ message: "Payment inserted successfully", payment: data });
    });

    app.delete('/payment/delete/:id', async(req,res) => {
        const data = await payments.deleteOne({_id:req.params.id})
        res.status(201).json({ message: "Payment deleted successfully", payment: data });
    })
    
    app.patch("/payment/update/:id", async (req, res) => {
            const updatedPayment = await payments.findByIdAndUpdate(
                req.params.id,
                { $set: req.body }, // Updates only the provided fields
                { new: true } // Returns the updated document
            );
            res.status(200).json({ message: "Payment updated successfully", payment: updatedPayment });
    });
    
    app.listen(3000, () => {
        console.log(" Web Server Started @ 3000");
    })

})
