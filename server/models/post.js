import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
});

var post = mongoose.model('posts', postSchema);

export default post;