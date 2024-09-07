import { Request, Response, NextFunction, Router } from "express";
import AuthController from "../controller/auth";

const authRouter = Router();

authRouter.post("/register", AuthController.registerUser);
authRouter.post("/login", AuthController.loginUser);
authRouter.post("/logout", AuthController.logoutUser); //!FALTA
authRouter.patch("/:id", AuthController.updateUser);
authRouter.delete("/:id", AuthController.deleteUser);

export default authRouter;
