import users from "../database/users.json";
import { readFile, writeFile } from "jsonfile";

class UsersModel {
  static async getAllUsers() {
    try {
      const dataUsers = await readFile("./dist/database/users.json");
      return dataUsers;
    } catch (error) {
      throw error;
    }
  }

  static async writeUser(data) {
    try {
      await writeFile("./dist/database/users.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersModel;
