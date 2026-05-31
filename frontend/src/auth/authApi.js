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

const inferDashboardUrl = () => {
  if (typeof window === 'undefined') {
    return '';
  }

  const { origin, hostname } = window.location;

  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:3002';
  }

  if (hostname.includes('frontend')) {
    return origin.replace('frontend', 'dashboard');
  }

  if (hostname.includes('dashboard')) {
    return origin;
  }

  return '';
};

export const getDashboardUrl = () => {
  const explicitUrl = (process.env.REACT_APP_DASHBOARD_URL || '').trim();
  if (explicitUrl) {
    return explicitUrl;
  }

  return inferDashboardUrl() || 'https://zerodha-dashboard.onrender.com';
};

export const navigateToDashboard = () => {
  const dashboardUrl = getDashboardUrl();

  const nextHref = new URL(dashboardUrl, window.location.origin).toString();

  if (nextHref === window.location.href || nextHref === `${window.location.origin}/dashboard`) {
    return;
  }

  window.location.assign(nextHref);
};
