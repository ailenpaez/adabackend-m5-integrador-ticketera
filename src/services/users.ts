//MODEL

import UsersModel from "../model/users";

class UsersService {
  static getAllUsers() {
    const users = UsersModel.getAllUsers();
    return users;
  }

  static getUserById(id: string) {
    const users = UsersModel.getAllUsers();

    const user = users.rows.find((user) => user.id === id);
    return user;
  }

  static createNewUser(data){
    // LLAMA A ZOD PARA VALIDAR
    const users = UsersModel.getAllUsers();

    users.rows.push(data);

    UsersModel.writeUser(users);

    return true

  }
}

export default UsersService;
