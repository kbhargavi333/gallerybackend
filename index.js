const express = require("express")
const app = express()
const cors = require("cors")
const Image = require('./schema')
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const Image1=require('./favschema')
const Image2=require('./delschema')
// const { image } = require("./schema")
app.use(cors())
const port = process.env.PORT || 4000;
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}))
mongoose.connect("mongodb+srv://bhargavi:bhargavi@cluster0.1wmv1gi.mongodb.net/gallery?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected to db")
  })
  .catch((err) => {
    console.log(err)
  })
//   app.get("/user",async(req,res)=>{
//     await content.find()
//     .then(found=>res.json(found))
// })
app.get('/users', async (req, res) => {
  try {
    const users = await Image.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/store', (req, res) => {
  const { image ,text} = req.body
  console.log("req.body");
  console.log(req.body);
  console.log("image");
  console.log(image);
  console.log("Entered Store")
  // console.log(image)
  const newdata = new Image({
    image: image,
    text:text,
   
  })
  newdata.save()
    .then(() => {
      console.log("Image stored successfully");
      //   console.log(image)
      res.status(200).json({ message: "Image stored successfully" });
    })
    .catch((error) => {
      console.error("Error storing image:", error);
      res.status(500).json({ error: "Error storing image" });
    });
});
app.post('/favstore',(req,res)=>{
  const { favimage ,favtext} = req.body
  console.log(" fav req.body");
  console.log(req.body);
  console.log("image");
  console.log(favimage);
  console.log("Entered fav Store")
  // console.log(image)
  const newdata = new Image1({
    
    favimage:favimage,
    favtext:favtext
  })
  newdata.save()
    .then(() => {
      console.log("favImage stored successfully");
      //   console.log(image)
      res.status(200).json({ message: "favImage stored successfully" });
    })
    .catch((error) => {
      console.error("Error storing favimage:", error);
      res.status(500).json({ error: "Error storing favimage" });
    });

});


app.get('/favusers', async (req, res) => {
  try {
    const users1 = await Image1.find();
    res.json(users1);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/delstore',(req,res)=>{
  const { delimage ,deltext} = req.body
  console.log(" del req.body");
  console.log(req.body);
  console.log("image");
  console.log(delimage);
  console.log("Entered del Store")
  // console.log(image)
  const newdata = new Image2({
    
    delimage:delimage,
    deltext:deltext
  })
  newdata.save()
    .then(() => {
      console.log("delImage stored successfully");
     console.log(image)
      res.status(200).json({ message: "delImage stored successfully" });
    })
    .catch((error) => {
      console.error("Error storing delimage:", error);
      res.status(500).json({ error: "Error storing delimage" });
    });

});

app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await Image.findByIdAndDelete(userId);
    if (!deletedUser) {
      res.status(404).json({ error: 'User not found' });
    } else {
      console.log("User deleted successfully");
      res.json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    console.error("Error deleting the user:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/delusers', async (req, res) => {
  try {
    const users2 = await Image2.find();
    res.json(users2);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => console.log("server started"))

