import React, { useEffect } from 'react';

import { getDashboardUrl, navigateToDashboard } from './authApi';

const DashboardRedirect = () => {
  useEffect(() => {
    navigateToDashboard();
  }, []);

  return (
    <div className="auth-loader">
      Redirecting to your dashboard at {getDashboardUrl()}...
    </div>
  );
};

export default DashboardRedirect;