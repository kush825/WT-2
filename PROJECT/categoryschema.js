const mongoose = require('mongoose');

const categories = mongoose.Schema({
    category_id: { type: String, required: true , unique: true},
    name: { type: String, unique: true, required: true },
    description: { type: String }
  });

module.exports  = mongoose.model('categories',categories);

