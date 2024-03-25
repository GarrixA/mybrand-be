import express from "express";
import httpUsers from '../controllers/user.controllers';
import isUser from "../middlewares/userMidleWares";
import auth from "../middlewares/authentication";

const userRouter = express.Router();

//crude of user
userRouter.get('/', auth.authenticateAdmin, httpUsers.httpGetAllUsers);
userRouter.get('/:id', auth.authenticateAdmin, httpUsers.httpGetOneeUser);
userRouter.patch('/:id', auth.authenticateAdmin,  httpUsers.httpUpdateUser);
userRouter.delete('/:id', auth.authenticateAdmin, httpUsers.httpDeleteUser);

// user signup and login
// userRouter.post('/login',  isUser.isLoginValid, httpUsers.httpLogin);
userRouter.post('/login', isUser.isLoginValid, httpUsers.httpLogin);
userRouter.post('/register', isUser.isUserValid, httpUsers.httpRegister);

export default userRouter;