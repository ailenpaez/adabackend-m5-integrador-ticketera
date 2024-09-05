import { Request, Response, NextFunction } from "express";

function errorHandler(error, req: Request, res: Response, next: NextFunction) {
  
  const {statusCode, message} = error;
  res.status(statusCode).json({ message: message });

  //res.status(error.status || 500).json({ message: error.message });
}

export default errorHandler;


