import { writeFileSync, readFileSync } from "jsonfile";

class AuthService {
  static readAuth() {
    try {
      const dataAuth = readFileSync("/src/database/auth.json");
      return dataAuth;
    } catch (error) {
      throw error;
    }
  }

  static writeAuth(data) {
    try {
      writeFileSync("/src/database/auth.json", data);
    } catch (error) {}
  }
}

export default AuthService;
