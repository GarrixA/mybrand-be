import express from "express";
import httpComment from '../controllers/comments.controller';
import isCommentValid from "../middlewares/commentMiddleWare";

const commentRoutes = express.Router();

commentRoutes.post('/:id/comment', isCommentValid, httpComment.httpCreateComment)
commentRoutes.get('/:id/comment', httpComment.httpGetCommentsOfBlog)

export default commentRoutes;
