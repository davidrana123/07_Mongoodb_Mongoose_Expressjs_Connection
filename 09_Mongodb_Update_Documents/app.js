const mongoose = require("mongoose");
const moment = require("moment");

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
        default: Date.now()
    }
})

//collection create
const playlist = new mongoose.model("Playlist", playlistSchema);

 //update data

const getDocument = async () => {
    try{
    const result = await playlist
    .find( {auther : "David"})
    .select({name : 1})
    .sort({name : 1});
    //.countDocuments();
   // .limit(1)
    console.log(result)
    }catch(err){
        console.log(err);
    }
 }

//getDocument()

//update the document

const updateDocument = async (_id) => {
    try{
        const result = await playlist.findByIdAndUpdate({_id}, {
            $set : {
                name : "Express Js"
            }  
          },{
             new : true, 
            useFindAndModify : false
          });

          console.log(result);
    }catch(err){
        console.log(err);
    }
}

updateDocument("60264ce9d8dd7205487a004a")




