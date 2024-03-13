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
const httpGetOneBlog = async (req, res) => {
  const oneBlog = await Blog.findOne({ _id: req.params.id });
  res.status(200).json({ message: "Success", data: oneBlog })
}

// update blog
const httpUpdateBlog = async (req, res) => {
  const updatedBlog = await Blog.findOne({ _id: req.params.id });
  if (req.body.title) {
    updatedBlog.title = req.body.title
  }

  if (req.body.description) {
    updatedBlog.description = req.body.description
  }
  await updatedBlog.save()
  res.send(updatedBlog)
  res.status(200).json({ message: "Blog updated successfully" })
}

// delete blog

const httpDeleteBlog = async (req, res) => {
  try {
    await Blog.deleteOne({ _id: req.params.id })
    res.status(204).send() 
  } catch (error) {
    console.log(error)
  }
}
module.exports = { httpCreateBlog, httpGetBlogs, httpGetOneBlog, httpUpdateBlog, httpDeleteBlog };