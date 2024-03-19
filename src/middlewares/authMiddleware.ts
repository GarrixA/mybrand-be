import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = async (req: Request, res: Response) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "Unauthorisezed" });
  }

  const decoded = jwt.verify(token, "my_secret_keyIs£1000Kand$1000K");
  return decoded
};


export default verifyToken;
