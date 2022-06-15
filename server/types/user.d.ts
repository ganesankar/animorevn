export default interface User {
  username: string;
  password: string;
  avatarURL?: string | null;
  role: 'user' | 'admin';
}

export type RegisterUser = Omit<User, 'role'>;
