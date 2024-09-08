import UsersModel from "../model/users";
import customError from "../utils/custom-error";
import { User } from "../interfaces/userInterfaces";
import { v4 } from "uuid";
import { validateUser } from "../validators/usersValidators";

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

  static async getInfoUsers() {
    try {
      const usersDB = await UsersModel.getAllUsers();
      const mappedUsers = usersDB.rows.map(
        ({ password, status, ...showInfo }) => showInfo
      );

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
        const error = new Error("USER_NOT_FOUND🔍");
        error["statusCode"] = 404;
        throw error;
      }

      const { password, email, ...visibleUser } = foundUser;

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
        const error = new Error("USER_NOT_FOUND🔍");
        error["statusCode"] = 404;
        throw error;
      }
      const { password, email, ...visibleUser } = foundUser;

      return visibleUser;
    } catch (error) {
      throw error;
    }
  }

  static async createNewUser(user: User) {
    try {
      const validation = validateUser(user);
      if (!validation.success) {
        const errorMessages = validation.error.issues
          .map((issue) => issue.message)
          .join(", ");
        throw new Error(`VALIDATION_ERROR👎🏼: ${errorMessages}`);
      }

      const usersData = await UsersService.getAllUsers();
      const userId = v4();

      const newUser = {
        username: user.username,
        email: user.email,
        password: createHash(user.password),
        level: user.level,
        status: user.status,
        position: user.position,
        country: user.country,
        id: userId,
      };

      usersData.rows.push(newUser);
      await UsersModel.writeUser(usersData);

      return userId;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersService;
