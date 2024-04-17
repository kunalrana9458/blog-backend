const mongoose =  require("mongoose")

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" // this is reference to the Post Model
    },
    user:{ // which user liked
        type:String,
        required:true,
    },
})

// export
module.exports = mongoose.model("Like",likeSchema);