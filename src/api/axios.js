import axios from 'axios';

<<<<<<< HEAD
const BASE_URL = 'http://localhost:8000/api';
=======
const BASE_URL = import.meta.env.VITE_DATABASE_URL;
>>>>>>> origin/main

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
