// import mongoose this is my code
const mongoose = require("mongoose")

// defining the model
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" // this is reference to the Post Model
    },
    user:{ // which user commented
        type:String,
        required:true,
    },
    body:{ // body of commented
        type:String,
        required:true,
    }
})

//export 
module.exports = mongoose.model("Comment",commentSchema);