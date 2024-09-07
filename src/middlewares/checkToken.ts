import { Request, Response, NextFunction } from "express";
import AuthModel from "../model/auth";

async function checkToken(req: Request, res: Response, next: NextFunction) {
  const token = req.query.token;

  if (!token) return res.status(400).json({ message: "GIVE ME THE TOKEN 👀" });

  const authDb = await AuthModel.readAuth();

  const user = authDb.auth.find((auth) => auth.token === token);

  if (!user) return res.status(498).json({ message: "INVALID TOKEN 🤦🏼‍♀️" });

  next();
}

export default checkToken;
