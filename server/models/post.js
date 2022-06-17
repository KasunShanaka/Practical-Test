import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
    likes: Number,
    dislikes: Number,
    liked: Boolean,
    disliked: Boolean,
});

var post = mongoose.model('posts', postSchema);

export default post;