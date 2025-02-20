const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    product_id: { type: Number, required: true,unique:true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock_quantity: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
    

module.exports = mongoose.model("products",productSchema);


