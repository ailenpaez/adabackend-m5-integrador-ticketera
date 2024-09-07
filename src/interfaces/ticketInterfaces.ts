export interface BugTicket {
  ticketId: string; 
  username?: string; 
  date: string; 
  area: string[]; 
  bugType: string; 
  description: string;
  link: string;
  evidence: string[]; 
  status: string;
}
