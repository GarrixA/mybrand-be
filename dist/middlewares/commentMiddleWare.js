"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commentValidate_1 = __importDefault(require("../validations/commentValidate"));
const isCommentValid = (req, res, next) => {
    const { error } = (0, commentValidate_1.default)(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        next();
    }
    catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.default = isCommentValid;
