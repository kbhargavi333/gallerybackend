const mongoose = require("mongoose");

const delImageSchema = new mongoose.Schema({
 delimage:String,
 deltext:String
});

const Image2 = mongoose.model("del", delImageSchema);

module.exports = Image2;
