"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const blogSchema = joi_1.default.object({
    title: joi_1.default.string().min(10).required(),
    description: joi_1.default.string().min(10).required(),
    // image: Joi.string().required(),
});
const validateBlog = (blogData) => {
    return blogSchema.validate(blogData);
};
exports.default = validateBlog;
