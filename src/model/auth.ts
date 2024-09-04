import { writeFile, readFile } from "jsonfile";

class AuthService {
  static async readAuth() {
    try {
      const dataAuth = await readFile("../database/auth.json");
      return dataAuth;
    } catch (error) {
      throw error;
    }
  }

  static async writeAuth(data) {
    try {
      writeFile("../database/auth.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
