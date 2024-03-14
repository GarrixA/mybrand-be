import { Response, Request, NextFunction } from "express";
import validateComment from "../validations/commentValidate";

const isCommentValid = (req: Request, res: Response, next: NextFunction) => {
    const {error} = validateComment(req.body);

    if(error) {
        return res.status(400).json({message: error.details[0].message});
    }

    try {
        next();
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'})
    }
}

export default isCommentValid;