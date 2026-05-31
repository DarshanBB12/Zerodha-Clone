import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://zerodha-clone-geps.onrender.com',
  withCredentials: true,
});

export const getLoginUrl = () => process.env.REACT_APP_LOGIN_URL || 'https://zerodha-frontend.onrender.com/login';