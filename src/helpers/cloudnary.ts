import { v2 as cloudinary } from "cloudinary";
import { Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});

const uploadImage = async(file: Express.Multer.File, res: Response)=>{
    try {
        const upload = await cloudinary.uploader.upload(file.path);

        return upload.secure_url;
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
}

export default uploadImage;