import mongoose from 'mongoose';
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet:{
        type: String,
    },
    body: {
        type: String,
        required: true
    },
    author:{
        type: String,
    },
}, {timestamps: true})

export const Blog = mongoose.model('Blog', blogSchema)