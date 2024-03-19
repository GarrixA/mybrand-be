"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_controllers_js_1 = __importDefault(require("../controllers/blog.controllers.js"));
const blogMiddleware_js_1 = __importDefault(require("../middlewares/blogMiddleware.js"));
const authentication_js_1 = __importDefault(require("../middlewares/authentication.js"));
const blogRoutes = express_1.default.Router();
blogRoutes.post('/', authentication_js_1.default.authenticateAdmin, blogMiddleware_js_1.default, blog_controllers_js_1.default.httpCreateBlog);
blogRoutes.get('/', blog_controllers_js_1.default.httpGetBlogs);
blogRoutes.get('/:id', blog_controllers_js_1.default.httpGetOneBlog);
blogRoutes.patch('/:id', authentication_js_1.default.authenticateAdmin, blogMiddleware_js_1.default, blog_controllers_js_1.default.httpUpdateBlog);
blogRoutes.delete('/:id', authentication_js_1.default.authenticateAdmin, blog_controllers_js_1.default.httpDeleteBlog);
blogRoutes.post('/:id/likes', authentication_js_1.default.authenticateAdmin, blogMiddleware_js_1.default, blog_controllers_js_1.default.httpLikeBlog);
exports.default = blogRoutes;
