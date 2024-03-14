"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1', routes_1.default);
app.use('/api/v1', (req, res) => {
    res.status(200).json({ message: 'Welcome to the my blogs API' });
});
exports.default = app;
