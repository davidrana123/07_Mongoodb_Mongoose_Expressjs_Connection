const mongoose = require("mongoose");

//connection createion 
mongoose.connect("mongodb://localhost:27017/ttchannel",{ useNewUrlParser: true, useUnifiedTopology: true})
// console.log("you are sueeess");
.then( () => console.log("connection successfull..."))
.catch((err) => console.log(err));

//schema define
 //schema -- document ke structer ko define krna

const playlistSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    ctype : String,
    videos : Number,
    auther : String,
    active : Boolean,
    date : {
        type: Date,
        default: Date.now
    }
})

//collection create
const playlist = new mongoose.model("Playlist", playlistSchema);