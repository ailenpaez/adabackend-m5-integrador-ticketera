import users from "../database/users.json";
import { writeFile } from "jsonfile";
class UsersModel {
  static getAllUsers() {
    return users
  }

  static writeUser(data) {
    writeFile("../database/users.json", data) //ver que onda con esto, autofill me lo tira así
    return true
    }


}

export default UsersModel;
