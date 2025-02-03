import axios from 'axios';

const BASE_URL = 'https://blogapi.cjplabs.com/api';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origins': '*',
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origins': '*',
  },
  withCredentials: true,
});
