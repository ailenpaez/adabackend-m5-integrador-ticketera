import { Router } from "express";
import usersRouter from "./users";
import ticketsRouter from "./tickets";
import authRouter from "./auth";
import checkToken from "../middlewares/checkToken";

const indexRouter = Router();

//ROUTES

indexRouter.use("/auth", authRouter);
indexRouter.use("/users",  usersRouter);//checkToken, ENTRE EL ENDPOINT Y EL ROUTER
indexRouter.use("/tickets", ticketsRouter);//checkToken,

export default indexRouter;
