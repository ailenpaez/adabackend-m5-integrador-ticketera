import { z } from "zod";

const ticketSchema = z.object({
  ticketId: z.string(),
  username: z.string(),
  date: z.string(),
  area: z.array(z.string()),
  bugType: z.string(),
  description: z.string().min(500),
  link: z.string().url(),
  evidence: z.array(z.string()),
  status: z.enum(["pending","done"]),
});

const validateTicket = (obj: any) => ticketSchema.safeParse(obj);

const validatePartialTicket = (obj: any) =>
  ticketSchema.partial().safeParse(obj);

export { validateTicket, validatePartialTicket };
