import express from 'express';
import httpBlog from '../controllers/blog.controllers.js';
import isValid from'../middlewares/blogMiddleware.js';

const blogRoutes = express.Router();

blogRoutes.post('/', isValid, httpBlog.httpCreateBlog);
blogRoutes.get('/', httpBlog.httpGetBlogs);
blogRoutes.get('/:id', httpBlog.httpGetOneBlog );
blogRoutes.patch('/:id', isValid, httpBlog.httpUpdateBlog);
blogRoutes.delete('/:id', httpBlog.httpDeleteBlog);
blogRoutes.post('/:id/like',isValid, httpBlog.httpLikeBlog)



export default blogRoutes;