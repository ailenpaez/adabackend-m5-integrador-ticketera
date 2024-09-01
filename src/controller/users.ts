import { Request, Response } from "express";

//SERVICES

import UsersService from "../services/users";

class UsersController {
  static getAllUsers(req: Request, res: Response) {
    const users = UsersService.getAllUsers();

    res.status(200).json({ data: users });
  }
  
  static getUserById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ data: "no hay id" });

    const user = UsersService.getUserById(id);
    res.status(200).json({ data: user });
  }

  static createNewUser(req: Request, res: Response) {
    const newUser = UsersService.createNewUser(req.body);

    res.status(201).json({ message: "USER_CREATED_SUCCESSFULLY!" });
  }
}

export default UsersController;
