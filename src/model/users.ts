import users from "../database/users.json";

class UsersModel {
  static getAllUsers() {
    return users.rows;
  }
}

export default UsersModel;
