import express from "express";
import httpComment from '../controllers/comments.controller';
import isCommentValid from "../middlewares/commentMiddleWare";

const commentRoutes = express.Router();

commentRoutes.post('/:id/comments', isCommentValid, httpComment.httpCreateComment)
commentRoutes.get('/:id/comments', httpComment.httpGetCommentsOfBlog)
commentRoutes.delete('/:id/comments/:id', httpComment.httpDeleteComment);


export default commentRoutes;
