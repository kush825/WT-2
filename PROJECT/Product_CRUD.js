const mongoose = require('mongoose');
const products = require('./productschema');
const express = require('express');
const bodyParser = require('body-parser');

const atlasUrl = "mongodb+srv://parmarkush8605:Kush%40825@cluster0.wh7cg.mongodb.net/test";

mongoose.connect(atlasUrl).then(() => {
  console.log("Connected to DB Server")

  const app = express();

  app.use(bodyParser.json());

  //----------------------------------- Product Routes ------------------------------------------

  //Get All Product Details
  app.get("/pro", async (req, res) => {
    const data = await products.find();
    res.send(data);
  });

  //Get category by ID
  app.get("/products/:id", async (req, res) => {
    const data = await products.findOne({_id:req.params.id});
    res.send(data);
  });


  //insert a new product
  app.post("/product/insert", async (req, res) => {

    const product = new Product({
      product_id: req.body.product_id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock_quantity: req.body.stock_quantity,
      created_at: req.body.created_at || Date.now(),
      updated_at: req.body.updated_at || Date.now(),
    });
    const data = await product.save();
    res.send(data);

  });

  // Delete a product by ID
  app.delete("/product/:id", async (req, res) => {
      const product = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Product deleted successfully" });
  });

  // Update (Partial) a product by ID using PATCH
  app.patch("/product/:id", async (req, res) => {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
      );
      res.status(200).json({ message: "product updated successfully", updatedProduct });
  });

  app.listen(3000, () => {
    console.log(" Web Server Started @ 3000");
  })
})

