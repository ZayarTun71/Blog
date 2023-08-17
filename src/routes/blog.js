const express = require("express");
const blog_router = express.Router();

const BlogController = require("../controllers/blog");

blog_router.get("/blog", BlogController.getAllBlog);

blog_router.post("/blog", BlogController.createBlog);

blog_router.get("/blog/:id", BlogController.getBlogById);

blog_router.put("/blog/:id", BlogController.updateBlog);

blog_router.delete("/blog/:id", BlogController.deleteBlog);

module.exports = blog_router;
