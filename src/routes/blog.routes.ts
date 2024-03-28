import express from 'express';
import httpBlog from '../controllers/blog.controllers';
import isValid from'../middlewares/blogMiddleware';
import auth from '../middlewares/authentication';
import imagesUpload from '../helpers/multer';

const blogRoutes = express.Router();

blogRoutes.post('/',  auth.authenticateAdmin, imagesUpload.single('image'), httpBlog.httpCreateBlog);
blogRoutes.get('/', httpBlog.httpGetBlogs);
blogRoutes.get('/:id', httpBlog.httpGetOneBlog );
blogRoutes.patch('/:id', auth.authenticateAdmin, imagesUpload.single('image'), httpBlog.httpUpdateBlog);
blogRoutes.delete('/:id', auth.authenticateAdmin, httpBlog.httpDeleteBlog);
blogRoutes.post('/:id/likes',auth.authenticateUser, httpBlog.httpLikeBlog)


export default blogRoutes;