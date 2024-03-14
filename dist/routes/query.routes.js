"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const query_controllers_1 = __importDefault(require("../controllers/query.controllers"));
const queryRoutes = express_1.default.Router();
queryRoutes.post('/', query_controllers_1.default.httpCreateQuery);
queryRoutes.get('/', query_controllers_1.default.httpGetQueries);
queryRoutes.get('/:id', query_controllers_1.default.httpGetOneQuery);
queryRoutes.delete('/:id', query_controllers_1.default.httpDeleteQuery);
exports.default = queryRoutes;
