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
      const generateToken = createHash(v4());

      authDb.auth.push({
        id: v4(),
        token: generateToken,
        username: user.username,
        password: createHash(user.password),
      });

      AuthModel.writeAuth(authDb);
      return generateToken;
    } catch (error) {
      throw error;
    }
  }

  static async loginUser(dataUser: { username; password }) {
    try {
      const user = await UsersService.getUserByUsername(dataUser.username);
      const userAuth = await AuthService.getUserByUsername(user.username);

      if (userAuth.password != createHash(dataUser.password)) {
        const error = new Error("INCORRECT_PASSWORD⛔");
        error["statusCode"] = 400;

        throw error;
      }
      return userAuth.token;
    } catch (error) {
      throw error;
    }
  }

  static async getUserByUsername(username) {
    try {
      const users = await AuthModel.readAuth();
      const foundUser = users.auth.find((user) => user.username === username);
      if (!foundUser) {
        const error = new Error("USER_NOT_FOUND");

        error["statusCode"] = 404;

        throw error;
      }
      return foundUser;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
