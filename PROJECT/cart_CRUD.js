const mongoose = require('mongoose');
const express = require('express');
const carts = require('./cartschema');
const bodyParser = require('body-parser')

const atlasUrl = "mongodb+srv://parmarkush8605:Kush%40825@cluster0.wh7cg.mongodb.net/test";

mongoose.connect(atlasUrl).then(() => {
    console.log("Connected to MongoDB Atlas");

    const app = express();

    app.use(bodyParser.json())

    app.get("/cart", async (req,res) => {
        const data = await carts.find()
        res.send(data)
    })

    app.get("/cart/:id", async (req,res) => {
        const data = await carts.findOne({_id:req.params.id})
        res.send(data)
    })

    app.post("/cart/insert", async (req, res) => {
        try {
            const { cart_id, user_id, items } = req.body;
    
            if (!cart_id || !user_id || !items || items.length === 0) {
                return res.status(400).json({ message: "Missing required fields" });
            }
    
            const cart = new carts({
                cart_id,
                user_id,
                items
            });
    
            const data = await cart.save();
            res.status(201).json({ message: "Cart created successfully", cart: data });
    
        } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
    });
    
    
    app.delete('/cart/delete/:id', async(req,res) => {
        const data = await carts.deleteOne({_id:req.params.id})
        res.status(201).json({ message: "carts deleted successfully", carts: data });
    })

    app.patch("/cartitem/update/:id", async (req, res) => {
            const updatedcart = await carts.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
            );
            res.status(200).json({ message: "cartitem updated successfully", updatedcart });
        });
    app.listen(3000, () => {
        console.log(" Web Server Started @ 3000");
    })
})