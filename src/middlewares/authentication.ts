import { NextFunction, Request, Response } from "express";
import verifyToken from "./authMiddleware";
import { JwtPayload } from "jsonwebtoken";
import userSchema from "../models/userSchema";
interface ExpandedRequest <T = Record<string, any>> extends Request <T> {
    userId?: JwtPayload,
    }

const authenticateAdmin = async(req: ExpandedRequest, res: Response, next: NextFunction) =>{
    const decoded = await verifyToken(req, res) as JwtPayload; 
    if(decoded){
        req.userId = decoded.userId
        const id = req.userId;
        const user = await userSchema.findById(id);
        if(user?.role !== "admin"){
            return res.status(406).json({message: "Only admin can perform this action"})
        }
    }
    next();
}

const authenticateUser = async(req: ExpandedRequest, res: Response, next: NextFunction) =>{
    const decoded = await verifyToken(req, res) as JwtPayload;

    if(decoded){
        req.userId = decoded.userId;
        const id = req.userId;
        const user = await userSchema.findById(id);
        if(user?.role !== "user"){
            return res.status(406).json({message: "Only user can perform this action"});
        }
    }

    next();
}

export default {
    authenticateAdmin,
    authenticateUser
};