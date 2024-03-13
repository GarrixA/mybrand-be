const express = require('express');
const httpMovie = require('../controllers/blog.controllers.js');
const isValid = require('../middlewares/blogMiddleware.js');

const movieRoutes = express.Router();

movieRoutes.post('/', isValid, httpMovie.httpCreateBlog);
movieRoutes.get('/', httpMovie.httpGetBlogs);
movieRoutes.get('/:id', httpMovie.httpGetOneBlog )

module.exports = movieRoutes;