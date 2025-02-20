const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    payment_id: { type: Number, required: true, unique: true },
    order_id: { type: mongoose.Types.ObjectId, ref: 'Orders' },
    payment_method: { type: String, enum: ['Credit Card', 'PayPal', 'Other'], required: true },
    payment_status: { type: String, enum: ['Pending', 'Completed', 'Failed'], required: true },
    payment_date: { type: Date, default: Date.now }
  });
 
module.exports = mongoose.model('payments',paymentSchema)   