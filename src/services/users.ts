//MODEL
import { uuid } from "uuidv4";
import UsersModel from "../model/users";
import customError from "../utils/custom-error";
import { UserSchema } from "../interfaces/userInterfaces";

class UsersService {
  static getAllUsers() {
    try {
      const usersDB = UsersModel.getAllUsers();
      return usersDB;
    } catch (error) {
      throw error;
    }
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

  static createNewUser(user: UserSchema) {
    try {
      const usersData = UsersService.getAllUsers();
      const userId = uuid();

      //OBJETO DE LA DB ESTRUCTURADO POR PARTES
      usersData.rows.push({
        username: user.username,
        email: user.email,
        password: user.password,
        level: user.level,
        status: user.status,
        position: user.position,
        country: user.country,
        id: userId,
      });

      UsersModel.writeUser(usersData);

      return userId;
    } catch (error) {}

      // LLAMA A ZOD PARA VALIDAR //! ASÍ LO TENIA ANTES Y FUNCIONANDO
    //   const users = UsersModel.getAllUsers();

    //   data.id = uuid();

    //   users.rows.push(data);

    //   const createUser = UsersModel.writeUser(users);

    //   if (!createUser) customError({ message: "User NOT CREATED", status: 404 });

    //   return true;
  }
}

export default UsersService;
