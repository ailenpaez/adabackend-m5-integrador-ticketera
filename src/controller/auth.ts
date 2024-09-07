import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth";
import UsersService from "../services/users";
import UsersModel from "../model/users";

class AuthController {
  static async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await AuthService.registerUser(req.body);
      res
        .status(201)
        .json({ message: `USER REGISTERED SUCCESFULLY!✨USER_TOKEN:${token}` });
    } catch (error) {
      next(error);
    }
  }

  static async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await AuthService.loginUser(req.body);
      res.status(200).json({ message: `WELCOME!✨USER_TOKEN:${token}` });
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(id: string) {
    try {
      const data = await UsersModel.getAllUsers();
      const users = data.rows; // array de tickets

      const userFound = users.find((user) => user.id === id);

      if (!userFound) {
        const error = new Error("USER_NOT_FOUND");
        error["statusCode"] = 404;

        throw error;
      }

      return userFound;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AuthService.updateUserById(req.params.id, req.body);

      res.status(200).json({ message: "USER_UPDATE_SUCCESSFULLY" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AuthService.deleteTicketById(req.params.id);
      res.status(200).json({ message: "USER_DELETED_SUCCESSFULLY" });
    } catch (error) {
      next(error);
    }
  }

  static async logoutUser() {}
}

export default AuthController;
