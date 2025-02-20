const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const orders = require('./orderschema');

const atlasUrl = "mongodb+srv://parmarkush8605:Kush%40825@cluster0.wh7cg.mongodb.net/test";

mongoose.connect(atlasUrl).then(() => {
    console.log("Connected to MongoDB Atlas");

    const app = express();

    app.use(bodyParser.json())

    app.get('/order', async (req,res) => {
        const data = await orders.find()
        res.send(data);
    })

    app.get('/order/:id', async (req,res) => {
        const data = await orders.findOne({_id:req.params.id})
        res.send(data)
    })

    app.post('/order/insert', async (req, res) => {
        
            const obj = new orders({
                order_id: req.body.order_id,
                user_id: req.body.user_id,
                order_date: req.body.order_date || Date.now(),
                status: req.body.status,
                total_amount: req.body.total_amount
            });
            const data = await obj.save();
            res.send(data);
      
    });
    
    app.delete('/order/delete/:id', async(req,res) => {
        const data = await orders.deleteOne({_id:req.params.id})
        res.send(data);
    })

    app.patch('/order/update/:id', async (req, res) => {
        const updatedOrder = await orders.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, // Only update the fields provided in the request
            { new: true } // Return the updated document
        );
        res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
    });
    

    app.listen(3000, () => {
        console.log(" Web Server Started @ 3000");
    })
})
   