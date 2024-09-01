import {Router} from "express";

import UsersController from "../controller/users";

const usersRouter = Router()

usersRouter.get("/", UsersController.getAllUsers);
usersRouter.get("/:id", UsersController.getUserById); // /users/27112009


export default usersRouter