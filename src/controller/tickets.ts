import { Request, Response, NextFunction } from "express";
import ticketsServices from "../services/tickets";

class TicketsController {
  static async getAllTickets(req: Request, res: Response, next: NextFunction) {
    try {
      await ticketsServices.getAllTickets();
    } catch (error) {}
  }

  static async createTicket(req: Request, res: Response, next: NextFunction) {
    try {
      await ticketsServices.createTicket(req.body);
    } catch (error) {}
  }
  static async updateTicket(req: Request, res: Response, next: NextFunction) {
    try {
      await ticketsServices.updateTicket(req.params.id, req.body);
    } catch (error) {}
  }
  static async deleteTicket(req: Request, res: Response, next: NextFunction) {
    try {
      await ticketsServices.deleteTicket(req.params.id);
    } catch (error) {}
  }
}

export default TicketsController;
