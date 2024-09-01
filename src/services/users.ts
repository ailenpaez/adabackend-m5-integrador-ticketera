//MODEL

import UsersModel from "../model/users";

class UsersService {
  static getAllUsers() {
    const users = UsersModel.getAllUsers();
    return users;
  }

  static getUserById(id: string) {
    const users = UsersModel.getAllUsers();

    const user = users.find((user) => user.id === id);
    return user;

  }
}

export default UsersService;
