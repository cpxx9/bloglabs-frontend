import axios from 'axios';

// const BASE_URL = 'http://localhost:8000/api';
const BASE_URL = 'https://blogapi.cjplabs.com/api';

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
