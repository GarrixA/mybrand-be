import express from "express";
import httpComment from '../controllers/comments.controller';
import isCommentValid from "../middlewares/commentMiddleWare";
import auth from "../middlewares/authentication";

const commentRoutes = express.Router();

commentRoutes.post('/:id/comments',auth.authenticateUser, isCommentValid, httpComment.httpCreateComment)
commentRoutes.get('/:id/comments', httpComment.httpGetCommentsOfBlog)
commentRoutes.delete('/:id/comments/:id', auth.authenticateAdmin, httpComment.httpDeleteComment);

export default commentRoutes;

