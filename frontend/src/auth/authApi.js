import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  withCredentials: true,
});

// Default to the dashboard application's dev server to perform a full-page redirect
export const getDashboardUrl = () => process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3002';

export const navigateToDashboard = () => {
  window.location.assign(getDashboardUrl());
};