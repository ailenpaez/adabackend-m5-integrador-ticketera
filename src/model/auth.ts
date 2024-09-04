import { writeFile, readFile } from "jsonfile";

class AuthModel {
  static async readAuth() {
    try {
      const dataAuth = await readFile("./src/database/auth.json");
      return dataAuth;
    } catch (error) {
      throw error;
    }
  }

  static async writeAuth(data) {
    try {
      writeFile("./src/database/auth.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthModel;
