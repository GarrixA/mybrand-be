"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commentSchema_1 = __importDefault(require("../models/commentSchema"));
const blogSchema_1 = __importDefault(require("../models/blogSchema"));
// create comment
const httpCreateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const content = req.body.content;
        if (!blogId || !content) {
            return res.status(400).json({ error: "Missing required parameters" });
        }
        const blog = yield blogSchema_1.default.findById(blogId);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        const newComment = new commentSchema_1.default({
            content,
        });
        const savedComment = yield newComment.save();
        blog.comments.push({
            _id: savedComment._id,
            content: savedComment.content,
        });
        yield blog.save();
        res
            .status(201)
            .json({
            message: "Comment created successfully",
            comment: savedComment,
            blogId: blogId
        });
    }
    catch (error) {
        console.error("Error creating comment:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
// get all comments of a blog
const httpGetCommentsOfBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        if (!blogId) {
            return res.status(400).json({ error: "Blog id is missing" });
        }
        const blog = yield blogSchema_1.default.findById(blogId);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        const comments = yield commentSchema_1.default.find({ _id: { $in: blog.comments } });
        res.status(200).json({ message: "Success", comments, blogId });
    }
    catch (error) {
        console.error("Error fetching comments:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
// Update Comment
const httpUpdateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.commentId;
        const content = req.body.content;
        const comment = yield commentSchema_1.default.findById(commentId);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        comment.content = content;
        yield comment.save();
        res.status(200).json({ message: "Comment updated successfully", comment });
    }
    catch (error) {
        console.error("Error updating comment:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
// delete a comment on blog
const httpDeleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.commentId;
        const deletedComment = yield commentSchema_1.default.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(204).json({ message: "Comment deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting comment:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.default = { httpCreateComment, httpGetCommentsOfBlog, httpUpdateComment, httpDeleteComment };
