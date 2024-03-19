"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comments_controller_1 = __importDefault(require("../controllers/comments.controller"));
const commentMiddleWare_1 = __importDefault(require("../middlewares/commentMiddleWare"));
const commentRoutes = express_1.default.Router();
commentRoutes.post('/:id/comments', commentMiddleWare_1.default, comments_controller_1.default.httpCreateComment);
commentRoutes.get('/:id/comments', comments_controller_1.default.httpGetCommentsOfBlog);
commentRoutes.delete('/:id/comments/:id', comments_controller_1.default.httpDeleteComment);
exports.default = commentRoutes;
