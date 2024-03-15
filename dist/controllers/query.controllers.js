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
const querySchema_1 = __importDefault(require("../models/querySchema"));
//create queries
const httpCreateQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = new querySchema_1.default({
            name: req.body.name,
            message: req.body.message,
        });
        yield query.save();
        res.status(200).json({ message: "Message created", data: query });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// get query
const httpGetQueries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queries = yield querySchema_1.default.find({});
        res.status(200).json({ message: "List of queries", dada: queries });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//get one query
const httpGetOneQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield querySchema_1.default.findOne({ _id: req.params.id });
        if (!query) {
            res.status(404).json({ message: "We can't find any query" });
        }
        res.status(200).json({ message: "query found", data: query });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// delete query
const httpDeleteQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield querySchema_1.default.deleteOne({ _id: req.params.id });
        if (deleted.deletedCount === 0) {
            res.status(400).json({ message: "No Query to be deleted" });
        }
        res.status(204).send();
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.default = { httpCreateQuery, httpGetQueries, httpGetOneQuery, httpDeleteQuery };
