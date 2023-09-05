import { Router } from "express";
import {blog_create, blog_delete, blog_index, single_blog} from "../controllers/blogController"


export default (router: Router) => {
    router.get("/", blog_index)
    router.get("/blogs/:id", single_blog)
    router.post("/blogs", blog_create)
    router.delete("/blogs/:id", blog_delete)
}