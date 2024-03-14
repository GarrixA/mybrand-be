"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_controllers_js_1 = __importDefault(require("../controllers/blog.controllers.js"));
const blogMiddleware_js_1 = __importDefault(require("../middlewares/blogMiddleware.js"));
const blogRoutes = express_1.default.Router();
blogRoutes.post('/', blogMiddleware_js_1.default, blog_controllers_js_1.default.httpCreateBlog);
blogRoutes.get('/', blog_controllers_js_1.default.httpGetBlogs);
blogRoutes.get('/:id', blog_controllers_js_1.default.httpGetOneBlog);
blogRoutes.patch('/:id', blogMiddleware_js_1.default, blog_controllers_js_1.default.httpUpdateBlog);
blogRoutes.delete('/:id', blog_controllers_js_1.default.httpDeleteBlog);
blogRoutes.post('/:id/like', blogMiddleware_js_1.default, blog_controllers_js_1.default.httpLikeBlog);
exports.default = blogRoutes;
