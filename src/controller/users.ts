import { Request, Response, NextFunction } from "express";

//SERVICES

import UsersService from "../services/users";

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
      if (!id) return res.status(400).json({ data: "no hay id" });

      const user = UsersService.getUserById(id);

      res.status(200).json({ data: user });
    } catch (error) {
      next(error);
    }
  }

  static createNewUser(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = UsersService.createNewUser(req.body);

      res.status(201).json({ message: "USER_CREATED_SUCCESSFULLY!" });
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
