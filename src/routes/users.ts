import { Router } from "express";
import UsersController from "../controller/users";

const usersRouter = Router();

usersRouter.get("/", UsersController.getInfoUsers);
usersRouter.get("/:username", UsersController.getUserByUsername);

export default usersRouter;
