import express, { json } from "express";
import cors from "cors";
import indexRouter from "./routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(json());
// app.use(cors({origin:["http://bugreport.com.ar"]}));

app.use("/status", (req, res) => {
  res.json({status: "OK",environment: process.env.ENVIRONMENT});});
app.use("/", indexRouter); // Va al enlace de todas las entidades (routes/index.ts)
app.use(errorHandler); // ESTE VA AL FINAL

export default app;
