export interface User {
  id: string;
  username: string;
  avatarURL: string;
  role: 'user' | 'admin';
  accessToken: string;
}

export interface UserLogin {
  username: string;
  password: string;
}
