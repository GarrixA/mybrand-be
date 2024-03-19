"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const query_controllers_1 = __importDefault(require("../controllers/query.controllers"));
const authentication_1 = __importDefault(require("../middlewares/authentication"));
const queryRoutes = express_1.default.Router();
queryRoutes.post('/', authentication_1.default.authenticateUser, query_controllers_1.default.httpCreateQuery);
queryRoutes.get('/', authentication_1.default.authenticateAdmin, query_controllers_1.default.httpGetQueries);
queryRoutes.get('/:id', authentication_1.default.authenticateAdmin, query_controllers_1.default.httpGetOneQuery);
queryRoutes.delete('/:id', authentication_1.default.authenticateAdmin, query_controllers_1.default.httpDeleteQuery);
exports.default = queryRoutes;
