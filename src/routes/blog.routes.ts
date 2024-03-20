import express from 'express';
import httpBlog from '../controllers/blog.controllers.js';
import isValid from'../middlewares/blogMiddleware.js';
import auth from '../middlewares/authentication.js';
// import upload from '../helpers/milter.js';

const blogRoutes = express.Router();

// blogRoutes.post('/', auth.authenticateAdmin, isValid, upload.single('image'), httpBlog.httpCreateBlog);
blogRoutes.post('/', auth.authenticateAdmin, isValid, httpBlog.httpCreateBlog);
blogRoutes.get('/', httpBlog.httpGetBlogs);
blogRoutes.get('/:id', httpBlog.httpGetOneBlog );
// blogRoutes.patch('/:id', auth.authenticateAdmin, isValid, upload.single('image'), httpBlog.httpUpdateBlog);
blogRoutes.patch('/:id', auth.authenticateAdmin, isValid, httpBlog.httpUpdateBlog);
blogRoutes.delete('/:id', auth.authenticateAdmin, httpBlog.httpDeleteBlog);
blogRoutes.post('/:id/likes', auth.authenticateAdmin, isValid, httpBlog.httpLikeBlog)



export default blogRoutes;