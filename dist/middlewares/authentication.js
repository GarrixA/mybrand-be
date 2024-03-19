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
const authMiddleware_1 = __importDefault(require("./authMiddleware"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const authenticateAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = yield (0, authMiddleware_1.default)(req, res);
    if (decoded) {
        req.userId = decoded.userId;
        const id = req.userId;
        const user = yield userSchema_1.default.findById(id);
        if ((user === null || user === void 0 ? void 0 : user.role) !== "admin") {
            return res.status(406).json({ message: "Only admin can perform this action" });
        }
    }
    next();
});
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = yield (0, authMiddleware_1.default)(req, res);
    if (decoded) {
        req.userId = decoded.userId;
        const id = req.userId;
        const user = yield userSchema_1.default.findById(id);
        if ((user === null || user === void 0 ? void 0 : user.role) !== "user") {
            return res.status(406).json({ message: "Only user can perform this action" });
        }
    }
    next();
});
exports.default = {
    authenticateAdmin,
    authenticateUser
};
