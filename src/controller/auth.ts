import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth";

class AuthController {
  static async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await AuthService.registerUser(req.body);
      res.status(200).json({message: `USER REGISTERED SUCCESFULLY!✨USER_TOKEN:${token}`})
    } catch (error) {
      next(error);
    }
  }

  static async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
