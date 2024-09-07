import { Router } from "express";
import UsersController from "../controller/users";

const usersRouter = Router();

usersRouter.get("/", UsersController.getAllUsers);
// usersRouter.get("/:username", UsersController.getUserByUsername) // se puede usar id o username, no las dos juntas.
usersRouter.get("/:id", UsersController.getUserById); //  GET/READ


export default usersRouter;
