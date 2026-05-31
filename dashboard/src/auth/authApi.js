import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://zerodha-clone-geps.onrender.com',
  withCredentials: true,
});

const inferLoginUrl = () => {
  if (typeof window === 'undefined') {
    return '';
  }

  const { origin, hostname } = window.location;

  if (hostname.includes('dashboard')) {
    return `${origin.replace('dashboard', 'frontend')}/login`;
  }

  return '';
};

export const getLoginUrl = () => {
  const explicitUrl = (process.env.REACT_APP_LOGIN_URL || '').trim();
  if (explicitUrl) {
    return explicitUrl;
  }

  return inferLoginUrl() || '/login';
};