import { z } from "zod";

export const userZod = z.object({
  //   name
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" })
    .regex(/^[a-zA-Z]+$/),
});
