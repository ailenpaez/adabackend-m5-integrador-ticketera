import { v4 } from "uuid";
import TicketsModel from "../model/tickets";
import { BugTicket } from "../interfaces/ticketInterfaces";
import {
  validateTicket,
  validatePartialTicket,
} from "../validators/ticketValidatos";

class TicketsServices {
  //implemento qp
  static async getAllTickets(where) {
    try {
      const { tickets } = await TicketsModel.getAllTickets();

      if (!where.status) return tickets;

      const ticketsFiltered = tickets.filter((ticket) =>
        ticket.status.includes(where.status)
      );

      return ticketsFiltered;
    } catch (error) {
      throw error;
    }
  }

  // CREATE
  static async createTicket(bug: BugTicket) {
    try {
      const ticketId = v4();

      const newTicket = {
        ticketId,
        username: bug.username,
        date: bug.date,
        area: bug.area,
        bugType: bug.bugType,
        description: bug.description,
        link: bug.link,
        evidence: bug.evidence,
        status: bug.status,
      };

      const validation = validateTicket(newTicket);
      if (!validation.success) {
        const errorMessages = validation.error.issues
          .map((issue) => issue.message)
          .join(", ");
        throw new Error(`VALIDATION_ERROR: ${errorMessages}`);
      }

      const dbTicket = await TicketsModel.getAllTickets();
      dbTicket.tickets.push(newTicket);
      await TicketsModel.writeTicket(dbTicket);

      return newTicket;
    } catch (error) {
      throw error;
    }
  }

  //READ
  static async getTicketById(id: string) {
    try {
      const data = await TicketsModel.getAllTickets();
      const tickets = data.tickets; // array de tickets

      const ticketFound = tickets.find((ticket) => ticket.ticketId === id);

      if (!ticketFound) {
        const error = new Error("TICKET_NOT_FOUND");
        error["statusCode"] = 404;

        throw error;
      }

      return ticketFound;
    } catch (error) {
      throw error;
    }
  }

//UPDATE
  static async updateTicketById(id: string, data) {
    try {
      const validation = validatePartialTicket(data);

      if (!validation.success) {
        const errorMessages = validation.error.issues
          .map((issue) => issue.message)
          .join(", ");
        throw new Error(`VALIDATION_ERROR: ${errorMessages}`);
      }

      const tdb = await TicketsModel.getAllTickets();

      const ticketUpdateIndex = tdb.tickets.findIndex(
        (ticket) => ticket.ticketId === id
      );

      if (ticketUpdateIndex === -1) {
        const error = new Error("TICKET_NOT_FOUND");
        error["statusCode"] = 404;
        throw error;
      }

      const currentTicket = tdb.tickets[ticketUpdateIndex];
      const updatedTicket = { ...currentTicket, ...data };

      tdb.tickets[ticketUpdateIndex] = updatedTicket;

      await TicketsModel.writeTicket(tdb);

      return updatedTicket;
    } catch (error) {
      throw error;
    }
  }

  //DELETE
  static async deleteTicketById(id) {
    try {
      const tdb = await TicketsModel.getAllTickets();

      const filteredTickets = tdb.tickets.filter(
        (ticket) => ticket.ticketId !== id
      );

      if (tdb.tickets.length === filteredTickets.length) {
        const error = new Error("TICKET_NOT_FOUND");
        error["statusCode"] = 404;
        throw error;
      }

      tdb.tickets = filteredTickets;

      await TicketsModel.writeTicket(tdb);

      return { message: "TICKET_DELETED_SUCCESSFULLY" };
    } catch (error) {
      throw error;
    }
  }
}

export default TicketsServices;
