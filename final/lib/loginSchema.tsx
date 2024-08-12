import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, "User name must be at least 3 char"),
  password: z.string().min(6, "Pass at least 6 char"),
  emial: z.string().email("email must be valid"),
});

export type LogimModel = z.infer<typeof loginSchema>;
