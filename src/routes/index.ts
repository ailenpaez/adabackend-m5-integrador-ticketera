import { Router } from "express";
import usersRouter from "./users";
import ticketsRouter from "./tickets";
import authRouter from "./auth";

const indexRouter = Router();

//ROUTES

indexRouter.use("/auth", authRouter);
indexRouter.use("/users", usersRouter);
indexRouter.use("/tickets", ticketsRouter);

export default indexRouter;
