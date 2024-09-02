import {Router} from "express";

import UsersController from "../controller/users";

const usersRouter = Router()

usersRouter.get("/", UsersController.getAllUsers);
usersRouter.get("/:id", UsersController.getUserById); // /users/27112009
usersRouter.post("/", UsersController.createNewUser); 

// updateUser, deleteUser 
export default usersRouter