import { Request, Response } from 'express';
import Blog from '../models/blogSchema';

// create a blog
const httpCreateBlog = async (req: Request, res: Response) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
    });

    await blog.save();
    res.status(201).json({ message: 'Blog created', data: blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// get all blogs
const httpGetBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({ message: 'Success', data: blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// get one blog
const httpGetOneBlog = async (req: Request, res: Response) => {
  try {
    const oneBlog = await Blog.findOne({ _id: req.params.id });

    if (!oneBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Success", data: oneBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// update blog
const httpUpdateBlog = async (req: Request, res: Response) => {
  try {
    const updatedBlog = await Blog.findOne({ _id: req.params.id });

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (req.body.title) {
      updatedBlog.title = req.body.title;
    }

    if (req.body.description) {
      updatedBlog.description = req.body.description;
    }
    await updatedBlog.save();
    res.status(200).json({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// delete blog

const httpDeleteBlog = async (req: Request, res: Response) => {
  try {
    const result = await Blog.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


//like to a comment
const httpLikeBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    
    if(typeof blog.likes === 'number'){
      blog.likes += 1
    }else {
      blog.likes = 1;
    }
    await blog.save();
    
    res.status(200).json({ message: "Blog liked successfully", blog });
  } catch (error: any) {
    console.error("Error liking blog:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { httpCreateBlog, httpGetBlogs, httpGetOneBlog, httpUpdateBlog, httpDeleteBlog, httpLikeBlog };