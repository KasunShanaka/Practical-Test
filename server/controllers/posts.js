import mongoose from "mongoose";
import post from "../models/post.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const postBody = req.body;
    const newPost = new post(postBody);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    // const customerBody = req.body;

    try {
        await post.findByIdAndDelete({ _id: mongoose.Types.ObjectId(_id) });
        res.status(201).json({ message: "successfully deleted" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}