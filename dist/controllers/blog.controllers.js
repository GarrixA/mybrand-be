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
const blogSchema_1 = __importDefault(require("../models/blogSchema"));
// create a blog
const httpCreateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = new blogSchema_1.default({
            title: req.body.title,
            description: req.body.description,
        });
        yield blog.save();
        res.status(201).json({ message: 'Blog created', data: blog });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// get all blogs
const httpGetBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blogSchema_1.default.find({});
        res.status(200).json({ message: 'Success', data: blogs });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// get one blog
const httpGetOneBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneBlog = yield blogSchema_1.default.findOne({ _id: req.params.id });
        if (!oneBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ message: "Success", data: oneBlog });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// update blog
const httpUpdateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBlog = yield blogSchema_1.default.findOne({ _id: req.params.id });
        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        if (req.body.title) {
            updatedBlog.title = req.body.title;
        }
        if (req.body.description) {
            updatedBlog.description = req.body.description;
        }
        yield updatedBlog.save();
        res.status(200).json({ message: "Blog updated successfully", updatedBlog });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// delete blog
const httpDeleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blogSchema_1.default.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//like to a comment
const httpLikeBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const blog = yield blogSchema_1.default.findById(blogId);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        if (typeof blog.likes === 'number') {
            blog.likes += 1;
        }
        else {
            blog.likes = 1;
        }
        yield blog.save();
        res.status(200).json({ message: "Blog liked successfully", blog });
    }
    catch (error) {
        console.error("Error liking blog:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.default = { httpCreateBlog, httpGetBlogs, httpGetOneBlog, httpUpdateBlog, httpDeleteBlog, httpLikeBlog };
