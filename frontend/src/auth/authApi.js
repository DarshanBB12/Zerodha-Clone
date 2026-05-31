import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://zerodha-clone-geps.onrender.com',
  withCredentials: true,
});

const inferDashboardUrl = () => {
  if (typeof window === 'undefined') {
    return '';
  }

  const { origin, hostname } = window.location;

  if (hostname.includes('frontend')) {
    return origin.replace('frontend', 'dashboard');
  }

  return '';
};

export const getDashboardUrl = () => {
  const explicitUrl = (process.env.REACT_APP_DASHBOARD_URL || '').trim();
  if (explicitUrl) {
    return explicitUrl;
  }

  return inferDashboardUrl();
};

export const navigateToDashboard = () => {
  const dashboardUrl = getDashboardUrl();

  if (!dashboardUrl) {
    window.location.assign('/dashboard');
    return;
  }

  const nextHref = new URL(dashboardUrl, window.location.origin).toString();

  if (nextHref === window.location.href) {
    return;
  }

  window.location.assign(nextHref);
};