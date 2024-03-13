const Blog = require('../models/blogSchema.js');

// create a blog
const httpCreateBlog = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
  });

  await blog.save();

  res.status(201).json({ message: 'Blog created', data: blog });
};

// get all blogs
const httpGetBlogs = async (req, res) => {
  const blog = await Blog.find({});

  res.status(200).json({ message: 'success', data: blog });
};

// get one blog
const  httpGetOneBlog = async (req, res) => {
  const oneBlog = await Blog.findOne({_id: req.params.id});
  res.status(200).json({message: "Success", data: oneBlog})
}

module.exports = { httpCreateBlog, httpGetBlogs, httpGetOneBlog };