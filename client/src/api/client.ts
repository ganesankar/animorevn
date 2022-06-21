import axios from 'axios';

const createClient = (url: string) => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL + url,
    headers: {
      'content-type': 'application/json',
    },
  });
};

export default createClient;
