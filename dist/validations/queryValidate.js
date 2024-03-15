"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const querySchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    message: joi_1.default.string().min(5).max(150).required()
});
const validateQuery = (query) => {
    return querySchema.validate(query);
};
exports.default = validateQuery;
