import { Request, Response, NextFunction, Router } from "express";
import AuthController from "../controller/auth";

const authRouter = Router();

// ACÁ VA LO QUE NECESITA AUTH (REGISTRO,LOGIN,LOGOUT,DELETEUSER,UPDATEUSER)
authRouter.post("/register", AuthController.registerUser); //CREATE

authRouter.post("/login", AuthController.loginUser); //CREATE en AUTH


export default authRouter;
