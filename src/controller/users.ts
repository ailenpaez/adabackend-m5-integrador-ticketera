import { Request, Response, NextFunction } from "express";

//SERVICES

import UsersService from "../services/users";
import customError from "../utils/custom-error";
import { userInfo } from "os";

class UsersController {
  
  static async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UsersService.getAllUsers();

      res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  }

  static async getUserByUsername(req: Request, res: Response, next: NextFunction) {
    try {
      const { username } = req.params;
      
      if (!username) {
        throw customError({ message: "USERNAME_NOT_PROVIDED", status: 400 });
      }

      const user = await UsersService.getUserByUsername(username);

      res.status(200).json({ user });
    } catch (error) {
      next(error); 
    }
  }

  static async createNewUser(req: Request, res: Response, next: NextFunction) {
    try {
      await UsersService.createNewUser(req.body);

      res.status(201);
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
