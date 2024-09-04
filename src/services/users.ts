//MODEL
import { uuid } from "uuidv4";
import UsersModel from "../model/users";
import customError from "../utils/custom-error";
import { UserSchema } from "../interfaces/userInterfaces";

class UsersService {
  static async getAllUsers() {
    try {
      const usersDB = await UsersModel.getAllUsers();
      return usersDB;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id: string) {
    try {
      const users = await UsersModel.getAllUsers();

      const user = users.rows.find((user) => user.id === id);

      if (!user) customError({ message: "User NOT found", status: 404 });

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async createNewUser(user: UserSchema) {
    try {
      const usersData = await UsersService.getAllUsers();
      const userId = uuid();

      //OBJETO DE LA DB ESTRUCTURADO POR PARTES
      usersData.rows.push({
        username: user.username,
        email: user.email,
        password: user.password,
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
