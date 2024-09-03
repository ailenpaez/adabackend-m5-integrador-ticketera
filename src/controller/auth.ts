import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth";

class AuthController {
  static registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      AuthService.registerUser(req.body);
    } catch (error) {
      next(error);
    }
  }

  static loginUser(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
