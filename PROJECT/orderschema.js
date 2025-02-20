const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    order_id: { type: Number, required: true, unique: true },
    user_id: { type: mongoose.Types.ObjectId, ref: 'Users' },
    order_date: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], required: true },
    total_amount: { type: Number, required: true },
  },{ timestamps: true });
  
  module.exports = mongoose.model('orders',orderSchema);