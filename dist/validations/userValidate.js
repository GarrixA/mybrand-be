"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    username: joi_1.default.string().regex(/^[a-z]+(?:\d+)?$/).required(),
    email: joi_1.default.string().email(),
    password: joi_1.default.string().regex(/^(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:'",.<>/?])[a-zA-Z0-9!@#$%^&*()\-_=+\\\|\[\]{};:'",.<>/?\s]{4,15}$/).required(),
    role: joi_1.default.string()
});
const validateUser = (user) => {
    return userSchema.validate(user);
};
exports.default = validateUser;
