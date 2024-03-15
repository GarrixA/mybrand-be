"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = __importDefault(require("../controllers/user.controllers"));
const userMidleWares_1 = __importDefault(require("../middlewares/userMidleWares"));
const userRouter = express_1.default.Router();
//crude of user
userRouter.get('/', user_controllers_1.default.httpGetAllUsers);
userRouter.get('/:id', user_controllers_1.default.httpGetOneeUser);
userRouter.post('/', userMidleWares_1.default, user_controllers_1.default.httpCreateUser);
userRouter.patch('/:id', userMidleWares_1.default, user_controllers_1.default.httpUpdateUser);
userRouter.delete('/:id', user_controllers_1.default.httpDeleteUser);
// user signup and login
userRouter.post('/login', userMidleWares_1.default, user_controllers_1.default.httpLogin);
userRouter.post('/register', userMidleWares_1.default, user_controllers_1.default.httpRegister);
exports.default = userRouter;
