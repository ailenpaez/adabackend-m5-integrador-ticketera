import { Request, Response, NextFunction } from "express";

function errorHandler(error, req: Request, res: Response, next: NextFunction) {
  res.status(400).json({ message: error.message });
}

export default errorHandler;


//1.31.33 1/9 3:07