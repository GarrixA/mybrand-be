import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: any;
}

const verifyToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }


  try {
    const decoded = jwt.verify(token, "my_secret_keyIs£1000Kand$1000K");
    req.user = decoded;
    next();
  } catch (error) {
    return next(error);
  }
};

export default verifyToken;
