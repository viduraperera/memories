//creating all the handlers
import PostMessage from "../models/postMessage.js";

export const getPost = async(req, res)=>{
    try {
        //finding something inside a model takes time so need to make this function async, and need to add a await
        const postMessages = await PostMessage.find();

        console.log(postMessages);
        res.status(200).json(postMessages);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) =>{
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
       await newPost.save();

       res.status(201).json(newPost);
    }
    catch (error){
        res.status(409).json({message: error.message});
    }
}