import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://zerodha-clone-geps.onrender.com',
  withCredentials: true,
});

// Default to the dashboard application's dev server to perform a full-page redirect
export const getDashboardUrl = () => process.env.REACT_APP_DASHBOARD_URL || 'https://zerodha-dashboard.onrender.com';

export const navigateToDashboard = () => {
  window.location.assign(getDashboardUrl());
};