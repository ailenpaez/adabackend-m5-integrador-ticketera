import { readFile, writeFile } from "jsonfile";

class TicketsModel {
  static async getAllTickets() {
    try {
      const dataTickets = await readFile("../database/tickets.json");
      return dataTickets;
    } catch (error) {
      throw error;
    }
  }

  static async writeTicket(data) {
    try {
      await writeFile("../database/tickets.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default TicketsModel;
