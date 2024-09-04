import { Request, Response, NextFunction } from "express";

//SERVICES

import UsersService from "../services/users";
import customError from "../utils/custom-error";

class UsersController {
  static async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UsersService.getAllUsers();

      res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!id) customError({ message: "NOT SEND ID", status: 400 });

      const user = await UsersService.getUserById(id);

      res.status(200).json({ data: user });
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
