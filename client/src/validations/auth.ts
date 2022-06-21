import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  username: z
    .string()
    .min(3, 'Username length must be at least 3 characters long')
    .max(10, 'Username length must be less than or equal to 10 characters long'),
  password: z.string().min(3, 'Password length must be at least 3 characters long'),
});

export type UserLogin = z.infer<typeof loginSchema>;
export const loginSchemaResolver = zodResolver(loginSchema);
