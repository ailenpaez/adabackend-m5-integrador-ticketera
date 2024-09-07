import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(10),
  level: z.number().int(),
  status: z.enum(["done", "pending"]),
  position: z.array(z.enum(["support", "QA", "frontend", "backend", "video"])),
  country: z.string().length(3),
  id: z.string(),
});

const validateUser = (obj: any) => userSchema.safeParse(obj);

const validatePartialUser = (obj: any) => userSchema.partial().safeParse(obj);

export { validateUser, validatePartialUser };
