const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    review_id: { type: String, required: true, unique: true },
    product_id: { type: mongoose.Types.ObjectId, ref: 'Products' },
    user_id: { type: mongoose.Types.ObjectId, ref: 'Users' },
    rating: { type: Number, min: 1, max: 5, required: true },
    review_text: { type: String },
    review_date: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('reviews',reviewSchema);
  