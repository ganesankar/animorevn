import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export default client;
