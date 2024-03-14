import { NextFunction, Response, Request } from "express";
import validateBlog from "../validations/blogValidate";

const isValid = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateBlog(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    next();
  } catch (error) {
    console.log("error", error);
  }
};

export default isValid;
