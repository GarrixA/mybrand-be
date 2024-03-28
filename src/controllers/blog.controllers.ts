import { Request, Response } from "express";
import Blog from "../models/blogSchema";
import cloudinary from "../helpers/cloudnary";
import Like from "../models/likeSchema";
import mongoose from "mongoose";
import userSchema from "../models/userSchema";

interface ExtendedRequest<T = Record<string, any>> extends Request<T> {
  userId?: any;
}

// create a blog
const httpCreateBlog = async (req: Request, res: Response) => {
  try {
    const image = req.file;
    if (!image) {
      return res.status(404).json({ message: "image is required" });
    }

    const uploadedImage = await cloudinary.uploader.upload(image.path);
    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
      image: uploadedImage.secure_url,
    });

    await blog.save();
    return res.status(201).json({ message: "blog created", data: blog });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// get all blogs
const httpGetBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({ message: "Success", data: blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
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
const httpLikeBlog = async (req: ExtendedRequest, res: Response) => {
  const myUserEmail = req.userId.userId.email;
  const myUser = await userSchema.findOne({email: myUserEmail});
  const user = myUser?._id
  if (!user) {
    return res.status(404).json({
      message: "No User found!",
    });
  }

  const userId = user;
  const blogId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return res.status(400).json({
      status: "Bad Request",
      message: "Invalid Id!",
    });
  }

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({
        status: "Not Found",
        message: "Blog not found",
      });
    }
    console.log(blogId);
    console.log(userId);
    const blogLike = await Like.findOne({
      blogId: blogId,
      userID: userId
    });

    if (!blogLike) {
      // Adding a blog like
      const newLike = new Like({
        blogId: blogId,
        userID: userId,
      });
      const savedLike = await newLike.save();
      blog?.likes.push(savedLike?._id);
      await blog.save();

      return res.status(201).json({
        status: "Success",
        message: "Like successfully added",
      });
    } else {
      // Removing a blog like
      await Like.deleteOne({ _id: blogLike._id });

      blog.likes = blog.likes.filter(
        (id) => !id.equals(blogLike?._id)
      );
      await blog.save();
        console.log(blog);
      return res.status(200).json({
        status: "Success",
        message: "Like successfully removed",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Internal Server Error",
      message: "Something went wrong!",
    });
  }
};

export default {
  httpCreateBlog,
  httpGetBlogs,
  httpGetOneBlog,
  httpUpdateBlog,
  httpDeleteBlog,
  httpLikeBlog,
};
