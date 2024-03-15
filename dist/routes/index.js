"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_routes_1 = __importDefault(require("./blog.routes"));
const comment_routes_1 = __importDefault(require("./comment.routes"));
const query_routes_1 = __importDefault(require("../routes/query.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const apiRouter = express_1.default.Router();
apiRouter.use('/blogs', blog_routes_1.default);
apiRouter.use('/blogs', comment_routes_1.default);
apiRouter.use('/queries', query_routes_1.default);
apiRouter.use('/user', user_routes_1.default);
exports.default = apiRouter;
