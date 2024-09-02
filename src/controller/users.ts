import { Request, Response, NextFunction } from "express";

//SERVICES

import UsersService from "../services/users";
import customError from "../utils/custom-error";

class UsersController {
  static getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = UsersService.getAllUsers();

      res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  }

  static getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!id) customError({message: "NOT SEND ID", status: 400})

      const user = UsersService.getUserById(id);

      res.status(200).json({ data: user });
    } catch (error) {
      next(error);
    }
  }

  static createNewUser(req: Request, res: Response, next: NextFunction) {
    try {
      UsersService.createNewUser(req.body);

      res.status(201)
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
