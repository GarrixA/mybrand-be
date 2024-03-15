import { NextFunction, Request, Response } from "express";
import validateUser from "../validations/userValidate";

const isUserValid = (req: Request, res: Response, next: NextFunction)=>{
    const {error} = validateUser(req.body);

    if(error){
        return res.status(400).json({message: error.details[0].message});
    };

    try {
        next();
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'});
    };
};

export default isUserValid;