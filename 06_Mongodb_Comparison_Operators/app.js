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

//            type

//  1 ---all data read

// const getDocument = async () => {
//    const result = await playlist.find();
//    console.log(result);
// }

//  2 --same type data read

// const getDocument = async () => {
//     const result = await playlist.find({ctype : "Front End"});
//     console.log(result);
//  }

//  3 ---only same course read

// const getDocument = async () => {
//     const result = await playlist.find({ctype : "Front End"})
//     .select({name : 1})
//     //use limit
//     .limit(1);
//     console.log(result);
//  }

// 4 --use asyn

// 5 -- use MongoDB Comparison Query Operators $gt greater then


// const getDocument = async () => {
//     try{
//     const result = await playlist
//     .find({videos : {$gt : 20}})
//     .select({name : 1})
//    // .limit(1)
//     console.log(result)
//     }catch(err){
//         console.log(err);
//     }
//  }

 // 6 --greater then and = find krna hai to $gte

//  const getDocument = async () => {
//     try{
//     const result = await playlist
//     .find({videos : {$gte : 20}})
//     .select({name : 1})
//    // .limit(1)
//     console.log(result)
//     }catch(err){
//         console.log(err);
//     }
//  }

 // 7 --less then ke le liye  $lte

//  const getDocument = async () => {
//     try{
//     const result = await playlist
//     .find({ctype : {$lte : 20}})
//     .select({name : 1})
//    // .limit(1)
//     console.log(result)
//     }catch(err){
//         console.log(err);
//     }
//  }

// 8 --  $in  agr muje only back and aale cahiye jese database ,back end 

const getDocument = async () => {
    try{
    const result = await playlist
    .find({ctype : {$in :["Back End","database"]}})
    .select({name : 1})
   // .limit(1)
    console.log(result)
    }catch(err){
        console.log(err);
    }
 }

 //and jo nhi chahiye $nin (not in )



getDocument()



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/shudav";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];
//   dbo.collection("customers").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });
