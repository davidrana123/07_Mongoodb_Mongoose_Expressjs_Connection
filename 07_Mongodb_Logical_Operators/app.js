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

// //create document or insert

const createDocument = async () => {
    try {
        const jsPlistlist = new playlist({
            name : "java script",
            ctype : "Front End",
            videos : 0,
            auther : "David",
            active : true,
            date : Date.now()
        })
        const mongoPlistlist = new playlist({
            name : "mongodb",
            ctype : "database",
            videos : 10,
            auther : "David",
            active : true,
            date : Date.now()
        })
        const mongoosePlistlist = new playlist({
            name : "mongoose",
            ctype : "database",
            videos : 5,
            auther : "David",
            active : true,
            date : Date.now()
        })
        const expressPlistlist = new playlist({
            name : "express js",
            ctype : "back end",
            videos : 20,
            auther : "David",
            active : true,
            date : Date.now()
        })
        
        
         const result = await playlist.insertMany([jsPlistlist,mongoPlistlist,mongoosePlistlist,expressPlistlist]);
         console.log(result);
    }catch(err){
        console.log(err);
    }
}
//createDocument();

// use or logic

// const getDocument = async () => {
//     try{
//     const result = await playlist
//     .find({$or : [{ctype : "Back End"},
//     {auther : "David"}]})
//     .select({name : 1})
//    // .limit(1)
//     console.log(result)
//     }catch(err){
//         console.log(err);
//     }
//  }

//use and logic

// const getDocument = async () => {
//     try{
//     const result = await playlist
//     .find({$and : [{ctype : "Back End"},
//     {auther : "David"}]})
//     .select({name : 1})
//    // .limit(1)
//     console.log(result)
//     }catch(err){
//         console.log(err);
//     }
//  }


//use not gate
//use nor gate
const getDocument = async () => {
    try{
    const result = await playlist
    .find({$nor : [{ctype : "Back End"},
    {auther : "David"}]})
    .select({name : 1})
   // .limit(1)
    console.log(result)
    }catch(err){
        console.log(err);
    }
 }

 //and jo nhi chahiye $nin (not in )



getDocument()


