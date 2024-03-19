"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userValidate_1 = __importDefault(require("../validations/userValidate"));
const isUserValid = (req, res, next) => {
    const { error } = userValidate_1.default.validateRegisterUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    ;
    try {
        next();
    }
    catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
    ;
};
const isLoginValid = (req, res, next) => {
    const { error } = userValidate_1.default.validateLoginUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    ;
    try {
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
    ;
};
exports.default = {
    isUserValid,
    isLoginValid
};
