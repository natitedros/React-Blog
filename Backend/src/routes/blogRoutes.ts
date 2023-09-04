import { Router } from "express";
import {blog_create, blog_delete, blog_index} from "../controllers/blogController"


export default (router: Router) => {
    router.get("/", blog_index)
    router.post("/blogs", blog_create)
    router.delete("/blogs/:id", blog_delete)
}