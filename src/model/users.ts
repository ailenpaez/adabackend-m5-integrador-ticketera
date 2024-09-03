import users from "../database/users.json";
import { writeFile } from "jsonfile";

class UsersModel {
  static getAllUsers() {
    return users;
  }

  static writeUser(data) {
    writeFile("./src/database/users.json", data);
    return true;
  }
}

export default UsersModel;
