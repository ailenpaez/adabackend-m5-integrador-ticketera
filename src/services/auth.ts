import { Request, Response, NextFunction } from "express";
import { UserSchema } from "../interfaces/userInterfaces";
import { v4 } from "uuid";
import UsersService from "./users";
import AuthModel from "../model/auth";
import createHash from "../utils/createHash";

class AuthService {
  static async registerUser(user: UserSchema) {
    try {
      const userId = await UsersService.createNewUser({
        username: user.username,
        email: user.email,
        password: user.password,
        // level: user.level,
        // status: user.status,
        // position: user.position,
        // country: user.country,
        id: v4(),
      });
      const authDb = await AuthModel.readAuth();
      const generateToken = createHash(v4())

      authDb.auth.push({
        id: v4(),
        token: generateToken ,
        username: user.username,
        password: createHash(user.password)
      });

      AuthModel.writeAuth(authDb);
      return generateToken;

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
