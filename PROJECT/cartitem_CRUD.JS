const mongoose = require('mongoose')
const express = require('express')
const cartitems = require('./cartItemSchema')
const bodyParser = require('body-parser')

const atlasUrl = "mongodb+srv://parmarkush8605:Kush%40825@cluster0.wh7cg.mongodb.net/test";

mongoose.connect(atlasUrl).then(() => {
    console.log("Connected to DB Server");

    const app = express()

    app.use(bodyParser.json())

    app.get("/cartitem", async (req,res) => {
        const data = await cartitems.find()
        res.send(data)
    })

    app.get("/cartitem/:id", async (req,res) => {
        const data = await cartitems.findOne({_id:req.params.id})
        res.send(data)
    })

    app.post("/cartitem/insert", async (req,res) => {
        const obj = new cartitems({
            cart_item_id: req.body.cart_item_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity
        })
        const data = await obj.save()
        res.send(data)
    })

    app.delete("/cartitem/delete/:id", async (req, res) => {
        const product = await cartitems.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "cartitem deleted successfully" });
    });

    app.patch("/cartitem/update/:id", async (req, res) => {
        const updatedcartitem = await cartitems.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true, runValidators: true }
        );
        res.status(200).json({ message: "cartitem updated successfully", updatedcartitem });
    });
  
    app.listen(3000, () => {
        console.log(" Web Server Started @ 3000");
      })
})