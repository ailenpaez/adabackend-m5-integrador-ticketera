import { User } from "../interfaces/userInterfaces";
import { v4 } from "uuid";
import UsersService from "./users";
import AuthModel from "../model/auth";
import createHash from "../utils/createHash";
import UsersModel from "../model/users";
import { validatePartialUser } from "../validators/usersValidators";

class AuthService {
  static async registerUser(user: User) {
    try {
      const userId = await UsersService.createNewUser({
        username: user.username,
        email: user.email,
        password: createHash(user.password),
        level: user.level,
        status: user.status,
        position: user.position,
        country: user.country,
        id: v4(),
      });
      const authDb = await AuthModel.readAuth();
      const generateToken = createHash(v4());

      authDb.auth.push({
        id: v4(),
        token: generateToken,
        username: user.username,
        password: createHash(user.password),
      });

      AuthModel.writeAuth(authDb);
      return generateToken;
    } catch (error) {
      throw error;
    }
  }

  static async loginUser(dataUser: { username; password }) {
    try {
      const user = await UsersService.getUserByUsername(dataUser.username);
      const authDb = await AuthModel.readAuth();

      const userAuth = authDb.auth.find(
        (auth) => auth.username === user.username
      );

      if (!userAuth) {
        const error = new Error("USER_NOT_FOUND👀");
        error["statusCode"] = 404;
        throw error;
      }

      if (userAuth.password !== createHash(dataUser.password)) {
        const error = new Error("INCORRECT_PASSWORD⛔");
        error["statusCode"] = 400;
        throw error;
      }

      if (!userAuth.token) {
        const newToken = createHash(v4());
        userAuth.token = newToken;
        await AuthModel.writeAuth(authDb);
      }

      return userAuth.token;
    } catch (error) {
      throw error;
    }
  }

  static async getUserByUsername(username) {
    try {
      const users = await AuthModel.readAuth();
      const foundUser = users.auth.find((user) => user.username === username);
      if (!foundUser) {
        const error = new Error("USER_NOT_FOUND👀");

        error["statusCode"] = 404;

        throw error;
      }
      return foundUser;
    } catch (error) {
      throw error;
    }
  }

  static async logoutUser(token) {
    try {
      const authDb = await AuthModel.readAuth();

      const auth = authDb.auth.find((auth) => auth.token == token);

      if (!auth) {
        const error = new Error("TOKEN_NOT_FOUND👀");
        error["statusCode"] = 404;

        throw error;
      }

      auth.token = null;

      await AuthModel.writeAuth(authDb);
    } catch (error) {
      throw error;
    }
  }

  static async updateUserById(id: string, data: Partial<User>) {
    try {
      const validation = validatePartialUser(data);
      if (!validation.success) {
        const errorMessages = validation.error.issues
          .map((issue) => issue.message)
          .join(", ");
        throw new Error(`VALIDATION_ERROR👎🏼: ${errorMessages}`);
      }

      const udb = await UsersModel.getAllUsers();
      const userUpdate = udb.rows.findIndex((user) => user.id === id);

      if (userUpdate === -1) {
        const error = new Error("USER_NOT_FOUND👀");
        error["statusCode"] = 404;
        throw error;
      }

      const currentUser = udb.rows[userUpdate];
      udb.rows[userUpdate] = { ...currentUser, ...data };

      await UsersModel.writeUser(udb);

      return udb.rows[userUpdate];
    } catch (error) {
      throw error;
    }
  }

  static async deleteUserById(id: string) {
    try {
      const udb = await UsersModel.getAllUsers();

      const filteredUsers = udb.rows.filter((user) => user.id !== id);

      if (udb.rows.length === filteredUsers.length) {
        const error = new Error("USER_NOT_FOUND👀");
        error["statusCode"] = 404;
        throw error;
      }

      udb.rows = filteredUsers;

      await UsersModel.writeUser(udb);

      return { message: "USER_DELETED_SUCCESSFULLY🚀" };
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
