import { NextFunction, Request, Response } from "express";
import verifyToken from "./authMiddleware";
import { JwtPayload } from "jsonwebtoken";
import userSchema from "../models/userSchema";
interface ExpandedRequest <T = Record<string, any>> extends Request <T> {
    userId?: JwtPayload,
    }

    interface IRole {
        user: string,
        admin: string
    }

    const roles: IRole = {
        user: "user",
        admin: "admin"
    }
const authenticateAdmin = async(req: ExpandedRequest, res: Response, next: NextFunction) =>{
    const decoded = await verifyToken(req, res, next) as JwtPayload; 
    if(decoded){
        req.userId = decoded.userId
        const id = req.userId;
        const admin = await userSchema.findById(id);
        if (admin?.role !== "admin") {
            return res.status(403).json({ message: "Only admins can perform this action" });
        } else {
            next();
        }
    }        
}

const authenticateUser = async(req: ExpandedRequest, res: Response, next: NextFunction) =>{
    const decoded = await verifyToken(req, res, next) as JwtPayload;

    if(decoded){
        req.userId = decoded.userId;
        const id = req.userId;
        const user = await userSchema.findById(id);
        if (user?.role !== "user") {
            return res.status(403).json({ message: "Only loged in person can perform this action" });
        } else {
            next();
        }
    }
}


export default {
    authenticateAdmin,
    authenticateUser
};