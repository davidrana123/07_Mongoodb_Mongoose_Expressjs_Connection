const mongoose = require("mongoose");

//connection createion 
mongoose.connect("mongodb://localhost:27017/ttchanell",{ useNewUrlParser: true, useUnifiedTopology: true})
// console.log("you are sueeess");
.then( () => console.log("connection successfull..."))
.catch((err) => console.log(err));