const mongoose = require("mongoose");
const moment = require("moment");

//connection createion 
mongoose.connect("mongodb://localhost:27017/ttchannel",{ useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true})
// console.log("you are sueeess");
.then( () => console.log("connection successfull..."))
.catch((err) => console.log(err));


const playlistSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique : true,
        lowercase : true,
        trim : true,
        minlength: [2, "minmum 2letters"],
        maxlength:30

    },
    ctype : {
         type : String,
         required : true,
         lowercase : true,
         enum : ["frontend" , "backend" , "database"]

    },
    videos : {
        type : Number,
        validate(value){
            if(value < 0){
                throw new Error("video count should not negative")
            }
        }
    },  
    auther : String,
    active : Boolean,
    date : {
        type: Date,
        default: Date.now()
    }
})



//collection create
const playlist = new mongoose.model("Playlist", playlistSchema);


//create docement 

const createDocument = async () => {
    try {
        const reactPlistlist = new playlist({
            name : "Go",
            ctype : "database",
            videos : 5,
            auther : "David",
            active : true,
            date : Date.now()
        })
        
         const result = await playlist.insertMany([reactPlistlist]);
         console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument();

 