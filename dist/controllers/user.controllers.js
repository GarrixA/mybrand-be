"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_1 = __importDefault(require("../models/userSchema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Create a user
const httpCreateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new userSchema_1.default({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        yield user.save();
        res.status(201).json({ message: "User Created" });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//get all users
const httpGetAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userSchema_1.default.find();
        res.status(200).json({ message: "List of users", users });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//get one User
const httpGetOneeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userSchema_1.default.findOne();
        if (!user) {
            res.status(404).json({ message: "We can't find any user" });
        }
        res.status(200).json({ message: "User found", data: user });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Update user
const httpUpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield userSchema_1.default.findOne({ _id: req.params.id });
        if (!updatedUser) {
            return res.status(404).json({ message: "No user found to update" });
        }
        if (req.body.email) {
            updatedUser.email = req.body.email;
        }
        if (req.body.email) {
            updatedUser.email = req.body.email;
        }
        if (req.body.username) {
            updatedUser.username = req.body.username;
        }
        yield updatedUser.save();
        return res
            .status(200)
            .json({ message: "User Updated Succcessfully", user: updatedUser });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
// Delete User
const httpDeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteUser = yield userSchema_1.default.deleteOne({ _id: req.params.id });
        if (deleteUser.deletedCount === 0) {
            return res.status(404).json({ message: "No user found to delete" });
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Register User
const httpRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, role, status } = req.body;
        const userRole = role || 'user';
        const userStatus = status || 'inactive';
        const harshedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = new userSchema_1.default({ username, email, password: harshedPassword, role: userRole, status: userStatus });
        yield user.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// User Login
const httpLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        let user = yield userSchema_1.default.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: `${username} username is incorrect use correct one` });
        }
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Password is incorrect" });
        }
        user.status = 'active';
        yield user.save();
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, "my_secret_keyIs£1000Kand$1000K");
        res.status(200).json({ message: "You've logged in", token });
    }
    catch (error) {
        res.status(500).json({ error: "Login failed", message: 'Internal Server Error' });
    }
});
exports.default = {
    httpLogin,
    httpRegister,
    httpCreateUser,
    httpDeleteUser,
    httpGetAllUsers,
    httpGetOneeUser,
    httpUpdateUser,
};
