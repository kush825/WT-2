const mongoose = require('mongoose');

const schema = mongoose.Schema({
    user_id : Number,
    username : String,
    email: String,
    password_hash: String,
    first_name: String,
    last_name: String,
    phone_number : Number,
    address: String
  
});

module.exports = mongoose.model("user",schema);