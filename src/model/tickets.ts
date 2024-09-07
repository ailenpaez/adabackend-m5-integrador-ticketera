import { readFile, writeFile } from "jsonfile";

class TicketsModel {
  static async getAllTickets() {
    try {
      const dataTickets = await readFile("./src/database/tickets.json");
      return dataTickets;
    } catch (error) {
      throw error;
    }
  }

  static async writeTicket(data) {
    try {
      await writeFile("./src/database/tickets.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default TicketsModel;
