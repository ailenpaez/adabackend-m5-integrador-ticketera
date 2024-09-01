import {Router} from "express";

import UsersController from "../controller/users";

const usersRouter = Router()

usersRouter.get("/", (req, res) => {UsersController.getAllUsers(req,res);});

export default usersRouter