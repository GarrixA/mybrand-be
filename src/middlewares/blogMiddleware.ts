import { NextFunction, Response, Request } from "express";
import validateBlog from "../validations/blogValidate";

const isValid = (req: Request, res: Response, next: NextFunction) => {
  const image = req.file;
  let createImagePath;
  if (image) {
    createImagePath = image.path;
  }

  const body = {
    title: req.body.title,
    description: req.body.description,
    image: createImagePath,
  };
  const { error } = validateBlog(body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    next();
  } catch (error) {
    console.log("error", error);
  }
};

export default isValid;
