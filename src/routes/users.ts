import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import UsersController from "../controller/users";

const usersRouter = Router();

// usersRouter.get("/", UsersController.getAllUsers);
// usersRouter.get("/:id", UsersController.getUserById); // /users/27112009
// usersRouter.post("/", (req: Request, res: Response, next: NextFunction) =>
//   UsersController.createNewUser(req, res, next)
// );

// updateUser, deleteUser
export default usersRouter;
