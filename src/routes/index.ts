import { Router } from "express";
import usersRouter from "./users";
import ticketsRouter from "./tickets";
import authRouter from "./auth";
import checkToken from "../middlewares/checkToken";

const indexRouter = Router();

//ROUTES

indexRouter.use("/auth", authRouter);
indexRouter.use("/users",checkToken, usersRouter);
indexRouter.use("/tickets",checkToken, ticketsRouter);

export default indexRouter;
