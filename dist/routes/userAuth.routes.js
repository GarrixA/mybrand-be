"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = __importDefault(require("../controllers/user.controllers"));
const userAuthRouter = express_1.default.Router();
userAuthRouter.post('/', user_controllers_1.default.httpRegister);
userAuthRouter.post('/', user_controllers_1.default.httpLogin);
