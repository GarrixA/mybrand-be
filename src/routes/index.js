const express = require('express');
const movieRoutes = require('./blog.routes');

const apiRouter = express.Router();

apiRouter.use('/blog', movieRoutes);

module.exports = apiRouter;