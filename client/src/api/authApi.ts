import axios from 'axios';

const userApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL + '/auth',
  headers: {
    'content-type': 'application/json',
  },
});

export default userApi;
