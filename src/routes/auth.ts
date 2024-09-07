import { Request, Response, NextFunction, Router } from "express";
import AuthController from "../controller/auth";
import checkToken from "../middlewares/checkToken";

const authRouter = Router();

authRouter.post("/register", AuthController.registerUser);
authRouter.post("/login", AuthController.loginUser);
authRouter.post("/logout", AuthController.logoutUser); //!FALTA
authRouter.patch("/:id", checkToken, AuthController.updateUser);
authRouter.delete("/:id", checkToken, AuthController.deleteUser);

export default authRouter;
