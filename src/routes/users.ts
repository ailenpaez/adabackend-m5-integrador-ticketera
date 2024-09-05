import { Router } from "express";
import UsersController from "../controller/users";

const usersRouter = Router();

usersRouter.get("/", UsersController.getAllUsers);

export default usersRouter;
