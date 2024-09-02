//MODEL
import { v4 } from "uuid";
import UsersModel from "../model/users";
import customError from "../utils/custom-error";
import { uuid } from "uuidv4";

class UsersService {
  static getAllUsers() {
    const users = UsersModel.getAllUsers();
    return users;
  }

  static getUserById(id: string) {
    try {
      const users = UsersModel.getAllUsers();

      const user = users.rows.find((user) => user.id === id);

      if (!user) customError({ message: "User NOT found", status: 404 });

      return user;
    } catch (error) {
      throw error;
    }
  }

  static createNewUser(data) {
    // LLAMA A ZOD PARA VALIDAR
    const users = UsersModel.getAllUsers();


    data.id = uuid()
    users.rows.push(data);

    const createUser = UsersModel.writeUser(users);

    if (!createUser) customError({ message: "User NOT CREATED", status: 400 });

    return true;
  }
}

export default UsersService;
