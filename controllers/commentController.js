// import model  // my code 
const Post = require("../models/postModels")
const Comment = require("../models/commentModels");

// bussiness logic - we use async because we intercat woth DB and dont want that our main thread works

exports.createComment = async(req,res) => {
    try{
        // fetch data from request body
        const {post,user,body} = req.body;
        // create a object
        const comment = new Comment({
            post,user,body
        });
        // save the comment into the database
        const savedComment = await comment.save();

        // find the post using ID, add the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments:savedComment._id}},{new:true})
        .populate("comments")  // populate the comments array with comment documents
        .exec();
        
        res.json({
            post:updatedPost,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"Error While creating comment",
            message:err,
        })
    }
}
