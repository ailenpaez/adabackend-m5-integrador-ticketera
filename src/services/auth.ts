import { Request, Response, NextFunction } from "express";
import UsersService from "./users";
import { UserSchema } from "../interfaces/userInterfaces";

class AuthService {
  static registerUser(user: UserSchema): void {
    try {
      UsersService.createNewUser(user)
      
    } catch (error) {
      throw error;
    }
  }

  static loginUser(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default AuthService;
