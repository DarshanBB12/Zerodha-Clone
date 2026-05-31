import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  withCredentials: true,
});

export const getLoginUrl = () => process.env.REACT_APP_LOGIN_URL || 'http://localhost:3003/login';