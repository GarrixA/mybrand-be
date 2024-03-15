import express from "express";
import httpComment from '../controllers/comments.controller';
import isCommentValid from "../middlewares/commentMiddleWare";

const commentRoutes = express.Router();

commentRoutes.post('/:id/comment', isCommentValid, httpComment.httpCreateComment)
commentRoutes.get('/:id/comment', httpComment.httpGetCommentsOfBlog)
commentRoutes.patch('/:id/comment/:id', httpComment.httpUpdateComment);
commentRoutes.delete('/:id/comment/:id', httpComment.httpDeleteComment);


export default commentRoutes;
