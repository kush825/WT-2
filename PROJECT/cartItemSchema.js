const mongoose = require('mongoose')

const cartItemSchema = mongoose.Schema({
    cart_item_id: { type: Number, required: true },
    product_id: { type: mongoose.Types.ObjectId, ref: 'Products' },
    quantity: { type: Number, required: true }
  });

module.exports = mongoose.model('cartitems',cartItemSchema)

