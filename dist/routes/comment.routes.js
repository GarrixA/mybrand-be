"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comments_controller_1 = __importDefault(require("../controllers/comments.controller"));
const commentMiddleWare_1 = __importDefault(require("../middlewares/commentMiddleWare"));
const commentRoutes = express_1.default.Router();
commentRoutes.post('/:id/comment', commentMiddleWare_1.default, comments_controller_1.default.httpCreateComment);
commentRoutes.get('/:id/comment', comments_controller_1.default.httpGetCommentsOfBlog);
commentRoutes.patch('/:id/comment/:id', comments_controller_1.default.httpUpdateComment);
commentRoutes.delete('/:id/comment/:id', comments_controller_1.default.httpDeleteComment);
exports.default = commentRoutes;
