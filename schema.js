// const { default: mongoose } = require("mongoose")
// const mangoose=require("mongoose")
// const ImageDetailsSchema=new mangoose.Schema(

// )

// module.exports=mongoose.model("store",ImageDetailsSchema)

const mongoose = require("mongoose");

const contentschema = new mongoose.Schema({
    image: String,
    text:String
}, { timestamps: true })


const Image = mongoose.model("store", contentschema)
// console.log(contentschema)

module.exports = Image