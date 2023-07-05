const mongoose = require("mongoose");

const contentschema1 = new mongoose.Schema({
    favimage: String,
    favtext:String
}, { timestamps: true })


const Image1 = mongoose.model("fav", contentschema1)
// console.log(contentschema)

module.exports = Image1