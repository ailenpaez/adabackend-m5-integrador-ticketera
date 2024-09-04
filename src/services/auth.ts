import { Request, Response, NextFunction } from "express";
import UsersService from "./users";
import { UserSchema } from "../interfaces/userInterfaces";

class AuthService {
  static async registerUser(user: UserSchema) {
    try {
     await UsersService.createNewUser(user);
    } catch (error) {
      throw error;
    }
  }

  static async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default AuthService;
