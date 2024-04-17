const Post=require("../models/postModels");
const Like=require("../models/likeModels");

// like a post
exports.likePost = async(req,res) => {
    try{
        const{post,user} = req.body;
        const like = new Like({
            post,user,
        })
        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        .populate("likes").exec();

        res.json({
            post:updatedPost,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"Error while liking post",
        })
    }
}

exports.unlikePost = async(req,res) => {
    try{
        // post for delete liking from post model and like is for deleting like from like model
        const{post,like} = req.body;
        // find and delete the like collection me se
        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});
        // update the post collection
        const updatedPost = await Post.findByIdAndDelete(post,{$pull:{likes:deleteLike._id}},{new:true});
        res.json({
            post:updatedPost,
        })
    }
    catch{
        return res.status(500).json({
            error:"Error while unliking post",
        })
    }
}