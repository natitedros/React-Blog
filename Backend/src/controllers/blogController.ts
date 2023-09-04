import {Blog} from '../models/blog';

import express from "express"

type blogTemplate = {
    title: String,
    snippet: String,
    body: String,
    createdAt: Date,
    updatedAt: Date
};

export const blog_index = async (req: express.Request, res: express.Response) => {
    Blog.find().sort( {updatedAt: -1})
        .then((result: Array<blogTemplate>) => {
            res.status(200).json({blogs: result})
            return res;
        })
        .catch((err:Error) => {
            console.log(err)
            return res.sendStatus(400);
        })
}

export const blog_create = async (req: express.Request, res: express.Response) =>{ 
    const { title, body, author:snippet } = req.body;
    const blog = new Blog({title, body, snippet})
    blog.save()
        .then((result:blogTemplate)=>{
            return res.sendStatus(200)
        })
        .catch((err: Error)=>{
            console.log(err)
            return res.sendStatus(400)
        })
}

export const blog_delete = async (req: express.Request, res: express.Response) =>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            return res.sendStatus(200);
        })
        .catch((err:Error)=>{
            console.log(err)
            return res.sendStatus(400);
        })
}
