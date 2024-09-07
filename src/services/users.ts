import UsersModel from "../model/users";
import customError from "../utils/custom-error";
import { User } from "../interfaces/userInterfaces";
import { v4 } from "uuid";

import createHash from "../utils/createHash";

class UsersService {

  static async getAllUsers() {
    try {
      const usersDB = await UsersModel.getAllUsers();
      return usersDB
      // //no muestra info sensible
      // const mappedUsers = usersDB.rows.map(({ password, status, ...showInfo }) => showInfo);
  
      // return mappedUsers;
    } catch (error) {
      throw error;
    }
  }

      //no muestra info sensible en el endpoint getallusers
  static async getInfoUsers() {
    try {
      const usersDB = await UsersModel.getAllUsers();
      const mappedUsers = usersDB.rows.map(({ password, status, ...showInfo }) => showInfo);
  
      return mappedUsers;
    } catch (error) {
      throw error;
    }
  }

  static async getUserByUsername(username) {
    try {
      const users = await UsersService.getAllUsers();
      const foundUser = users.rows.find((user) => user.username === username);

      if (!foundUser) {
        const error = new Error("USER_NOT_FOUND");
        error["statusCode"] = 404;
        throw error;
      }

      // return foundUser
      const { password, email, ...visibleUser } = foundUser; //evita info sensible

      return visibleUser;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id: string) {
    try {
      const users = await UsersModel.getAllUsers();

      const foundUser = users.rows.find((user) => user.id === id);

      if (!foundUser) {
        const error = new Error("USER_NOT_FOUND");
        error["statusCode"] = 404;
        throw error;
      }
      const { password, email, ...visibleUser } = foundUser;

      return visibleUser;
    } catch (error) {
      throw error;
    }
  }

  //CREATE -> termina en ruta auth
  static async createNewUser(user: User) {
    try {
      const usersData = await UsersService.getAllUsers();
      const userId = v4();

      //OBJETO DE LA DB ESTRUCTURADO POR PARTES
      usersData.rows.push({
        username: user.username,
        email: user.email,
        password: createHash(user.password), //!cambio
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
