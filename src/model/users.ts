import users from "../database/users.json";
import { readFile, writeFile } from "jsonfile";

class UsersModel {
  static async getAllUsers() {
    try {
      const dbUsers = await readFile("../database/users.json");
      return dbUsers;
    } catch (error) {
      throw error;
    }
  }

  static async writeUser(data) {
    try {
      await writeFile("./src/database/users.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersModel;
