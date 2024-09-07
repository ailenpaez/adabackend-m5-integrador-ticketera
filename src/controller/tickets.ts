import { Request, Response, NextFunction } from "express";
import ticketsServices from "../services/tickets";
import customError from "../utils/custom-error";

class TicketsController {
  static async getAllTickets(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ticketsServices.getAllTickets();

      res.status(200).json({ message: data });
    } catch (error) {}
  }

  static async getTicketbyId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
  
      if (!id) {
        throw customError({ message: "ID_NOT_PROVIDED", status: 400 });
      }
  
      const ticket = await ticketsServices.getTicketById(id);
  
      res.status(200).json({ ticket });
    } catch (error) {
      next(error); // pasa el error al middleware errorHandler
    }
  }
  

  static async createTicket(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ticketsServices.createTicket(req.body);
      res.status(201).json({ data: data });
    } catch (error) {}
  }
  static async updateTicketById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ticketsServices.updateTicketById(
        req.params.id,
        req.body
      );

      res.status(200).json({ message: "TICKET_UPDATE:SUCCESSFULLY" });
    } catch (error) {}
  }
  static async deleteTicketbyId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ticketsServices.deleteTicketById(req.params.id);

      res.status(200).json({ message: "TICKEt_DELETED:SUCCESSFULLY" });
    } catch (error) {}
  }
}

export default TicketsController;
