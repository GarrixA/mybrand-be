"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = __importDefault(require("../controllers/user.controllers"));
const userMidleWares_1 = __importDefault(require("../middlewares/userMidleWares"));
const authentication_1 = __importDefault(require("../middlewares/authentication"));
const userRouter = express_1.default.Router();
//crude of user
userRouter.get('/', authentication_1.default.authenticateAdmin, user_controllers_1.default.httpGetAllUsers);
userRouter.get('/:id', authentication_1.default.authenticateAdmin, user_controllers_1.default.httpGetOneeUser);
userRouter.patch('/:id', authentication_1.default.authenticateAdmin, userMidleWares_1.default.isUserValid, user_controllers_1.default.httpUpdateUser);
userRouter.delete('/:id', authentication_1.default.authenticateAdmin, user_controllers_1.default.httpDeleteUser);
// user signup and login
userRouter.post('/login', userMidleWares_1.default.isLoginValid, user_controllers_1.default.httpLogin);
userRouter.post('/register', userMidleWares_1.default.isUserValid, user_controllers_1.default.httpRegister);
exports.default = userRouter;
