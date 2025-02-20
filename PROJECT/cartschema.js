const cartItemSchema = require('./cartItemSchema');
const cartitems = require('./cartItemSchema');
const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    cart_id: { type: String, required: true, unique: true },
    user_id: { type: mongoose.Types.ObjectId, ref: 'Users' },
    items: [{type:mongoose.models.cartItemSchema,ref:'cartitems'}],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('carts',cartSchema)   