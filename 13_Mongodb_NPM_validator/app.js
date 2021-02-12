// install  npm i validator

const mongoose = require("mongoose");
const moment = require("moment");
const validator = require("validator");

//connection createion 
mongoose.connect("mongodb://localhost:27017/ttchannel",{ useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true})
// console.log("you are sueeess");
.then( () => console.log("connection successfull..."))
.catch((err) => console.log(err));

//schema define
 //schema -- document ke structer ko define krna



//lowercase : true ----lower case ke liye
//uppercase : true  ----- uppercase ke liye
// trim : true -----space ko khane  bala ex --    name : "     MonGoOse   JS  
//  minlength:2,maxlength:30 --- set length


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
    email :{
        type :  String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Emial is inValid");
            }
        }

    },
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
            email : "david@gmail.com",
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

 



