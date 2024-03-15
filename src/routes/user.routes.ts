import express from "express";
import httpUsers from '../controllers/user.controllers';
import isUserValid from "../middlewares/userMidleWares";

const userRouter = express.Router();

//crude of user
userRouter.get('/', httpUsers.httpGetAllUsers);
userRouter.get('/:id', httpUsers.httpGetOneeUser);
userRouter.post('/',isUserValid, httpUsers.httpCreateUser);
userRouter.patch('/:id',isUserValid, httpUsers.httpUpdateUser);
userRouter.delete('/:id', httpUsers.httpDeleteUser);

// user signup and login
userRouter.post('/login', isUserValid, httpUsers.httpLogin);
userRouter.post('/register', isUserValid, httpUsers.httpRegister);

export default userRouter;