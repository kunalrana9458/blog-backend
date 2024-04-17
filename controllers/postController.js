const Post=require("../models/postModels")

exports.createPost = async(req,res) => {
    try{
        // fetch data from request body
        const{title,body} = req.body;
        // create object of post body
        const post = new Post({
            title,body
        });
        // save post created
        const savedPost = await post.save();

        res.json({
            post:savedPost,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"Error while creating post",
        })
    }
};

exports.getAllPosts = async(req,res) => {
    try{
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"Error while creating post",
        })
    }
}