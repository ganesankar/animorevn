import type { User } from '@prisma/client';

export type RegisterUser = Omit<User, 'id' | 'role'>;
export type LoginUser = Omit<User, 'id' | 'role' | 'avatarURL'>;
export type TokenPayload = { id: string; role: string };
