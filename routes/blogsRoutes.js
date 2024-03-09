const express = require('express');
const {Blogs} = require('../models/Blogs');
const router = express.Router();

// get all posts
router.get('/blogs', async (req, res) =>{
    const blogs = await Blogs.find()
    res.send(blogs)
});

router.post('/addlogs', async( req, res) =>{
    const blog = new Blogs({
        title: req.body.title,
        description: req.body.description,
    })
    await blog.save();
    res.send(blog)
})

module.exports = {router};