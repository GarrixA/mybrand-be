import { Request, Response } from "express";
import Comment from "../models/commentSchema";
import Blog from "../models/blogSchema";
import jwt, { JwtPayload } from "jsonwebtoken";


// create comment
const httpCreateComment = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;
    const token = req.headers.authorization?.split(" ")[1]; 

    if (!blogId || !req.body.content || !token) {
      return res.status(400).json({ error: "Missing required parameters" });
    }
    
    const decodedToken = jwt.verify(token, 'my_secret_keyIs£1000Kand$1000K') as JwtPayload;
    const username = decodedToken.userId.username;

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const newComment = new Comment({
      username,
      content: req.body.content,
    });

    const savedComment = await newComment.save();

    blog.comments.push({
      _id: savedComment._id,
      username: savedComment.username,
      content: savedComment.content,
    });
    await blog.save();

    res.status(201).json({
      message: "Comment created successfully",
      data: savedComment,
      blogId: blogId
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ error: "Internal Ser" });
  }
};



// get all comments of a blog
const httpGetCommentsOfBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;

    if (!blogId) {
      return res.status(404).json({ error: "Blog id is missing" });
    }

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    const comments = await Comment.find({ _id: { $in: blog.comments } });

    res.status(200).json({ message: "Success", comments, blogId });
  } catch (error: any) {
    console.error("Error fetching comments:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


// delete a comment on blog
const httpDeleteComment = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;
    
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    
    res.status(204).json({ message: "Comment deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting comment:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { httpCreateComment, httpGetCommentsOfBlog, httpDeleteComment };
