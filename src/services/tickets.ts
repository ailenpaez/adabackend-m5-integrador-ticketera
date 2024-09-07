import { v4 } from "uuid";
import TicketsModel from "../model/tickets";
import { BugTicket } from "../interfaces/ticketInterfaces";

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
      const dbTicket = await TicketsModel.getAllTickets();

      const ticketId = v4();

      const newTicket = {
        ticketId: ticketId,
        username: bug.username,
        date: bug.date,
        area: bug.area,
        bugType: bug.bugType,
        description: bug.description,
        link: bug.link,
        evidence: bug.evidence,
        status: bug.status,
      };

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
  static async updateTicketById(id: string, data: BugTicket) {
    try {
      const tdb = await TicketsModel.getAllTickets();

      const ticketUpdate = tdb.tickets.findIndex(
        (ticket) => ticket.ticketId === id
      );

      if (ticketUpdate === -1) {
        const error = new Error("TICKET_NOT_FOUND");
        error["statusCode"] = 404;
        throw error;
      }
      const currentTicket = tdb.tickets[ticketUpdate];

      tdb.tickets[ticketUpdate] = { ...currentTicket, ...data };

      await TicketsModel.writeTicket(tdb);

      return tdb.tickets[ticketUpdate];
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
