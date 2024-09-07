import { Request, Response, NextFunction, Router } from "express";
import AuthController from "../controller/auth";

const authRouter = Router();

authRouter.post("/register", AuthController.registerUser); //CREATE
authRouter.post("/login", AuthController.loginUser); //CREATE en AUTH


export default authRouter;
