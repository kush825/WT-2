const mongoose = require('mongoose');
const schema = mongoose.Schema({
    FecultyName : String,
    FecultyMobile : Number,
    FecultyEmail : string,
    FecultyPassword : Number
})

module.exports = mongoose.model("faculty",schema)