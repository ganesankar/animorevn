import type { User, UserLogin } from '~/types/auth';
import client from './client';

const apiService = {
  login(data: UserLogin) {
    return client.post<User>('/auth/login', data, { withCredentials: true });
  },
};

export default apiService;
