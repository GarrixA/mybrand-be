const express = require('express');
const blogRoutes = require('./blog.routes');

const apiRouter = express.Router();

apiRouter.use('/blog', blogRoutes);

module.exports = apiRouter;