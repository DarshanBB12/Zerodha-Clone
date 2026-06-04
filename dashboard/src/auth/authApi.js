import axios from 'axios';

const getApiBaseUrl = () => {
  const explicitUrl = (process.env.REACT_APP_API_URL || '').trim();
  if (explicitUrl) {
    return explicitUrl;
  }

  if (typeof window !== 'undefined') {
    const { hostname } = window.location;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:3000';
    }
  }

  return 'https://zerodha-clone-geps.onrender.com';
};

export const api = axios.create({
  baseURL: getApiBaseUrl(),
  withCredentials: true,
});

const inferLoginUrl = () => {
  if (typeof window === 'undefined') {
    return '';
  }

  const { origin, hostname } = window.location;

  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:3001/login';
  }

  if (hostname.includes('dashboard')) {
    return `${origin.replace('dashboard', 'frontend')}/login`;
  }

  if (hostname.includes('frontend')) {
    return `${origin}/login`;
  }

  return '';
};

export const getLoginUrl = () => {
  const explicitUrl = (process.env.REACT_APP_LOGIN_URL || '').trim();
  if (explicitUrl) {
    return explicitUrl;
  }

  return inferLoginUrl() || 'https://zerodha-frontend-ozuo.onrender.com/login';
};
