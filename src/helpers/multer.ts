import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: any) => {
    cb(null, "blog_images");
  },

  filename: (req: Request, file: Express.Multer.File, cb: any) => {
    cb(null, file.originalname);
  },
});


const upload = multer({
  storage: storage,
  fileFilter: (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    if (file.mimetype === "image/jpg" || file.mimetype === "image/png") {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});

const imagesUpload = upload.single("image");

export default upload;
