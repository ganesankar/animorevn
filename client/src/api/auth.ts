import type { User, UserLogin } from '~/types/auth';
import createClient from './client';

const client = createClient('/auth');

const authApiService = {
  async login(data: UserLogin) {
    const { data: resData } = await client.post<User>('/login', data, {
      withCredentials: true,
    });
    return resData;
  },
};

export default authApiService;
