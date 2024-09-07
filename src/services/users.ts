import UsersModel from "../model/users";
import customError from "../utils/custom-error";
import { UserSchema } from "../interfaces/userInterfaces";
import { v4 } from "uuid";

import createHash from "../utils/createHash";

class UsersService {
  static async getAllUsers() {
    try {
      const usersDB = await UsersModel.getAllUsers();
      return usersDB;
    } catch (error) {
      throw error;
    }
  }
//READ
  static async getUserByUsername(username) {
    try {
      const users = await UsersService.getAllUsers();
      const foundUser = users.rows.find((user) => user.username === username);
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
//CREATE
  static async createNewUser(user: UserSchema) {
    try {
      const usersData = await UsersService.getAllUsers();
      const userId = v4();

      //OBJETO DE LA DB ESTRUCTURADO POR PARTES
      usersData.rows.push({
        username: user.username,
        email: user.email,
        password:createHash(user.password), //!cambio
        level: user.level,
        status: user.status,
        position: user.position,
        country: user.country,
        id: userId,
      });

      UsersModel.writeUser(usersData); //chequeo si await o no

      return userId;
    } catch (error) {
      throw error;
    }
  }

}

export default UsersService;
