import type { User, UserLogin } from '~/types/auth';
import client from './client';

const api = {
  login: (data: UserLogin) => client.post<User>('/auth/login', data),
};

export default api;
