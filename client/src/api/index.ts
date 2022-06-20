import type { User, UserLogin } from '~/types/auth';
import client from './client';

const api = {
  login(data: UserLogin) {
    return client.post<User>('/auth/login', data, { withCredentials: true });
  },
};

export default api;
