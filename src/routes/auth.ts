import { Request, Response, NextFunction, Router } from "express";
import AuthController from "../controller/auth";

const authRouter = Router();

// ACÁ VA LO QUE NECESITA AUTH (REGISTRO,LOGIN,LOGOUT,DELETEUSER,UPDATEUSER)
authRouter.post(
  "/register",
  (req: Request, res: Response, next: NextFunction) => {
    AuthController.registerUser(req, res, next);
  }
);
authRouter.post("/login", (req: Request, res: Response, next: NextFunction) => {
  AuthController.loginUser(req, res, next);
});
export default authRouter;
