import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { api, getLoginUrl } from './authApi';

const DashboardAuthContext = createContext(null);

const AuthGate = ({ children }) => {
  const [status, setStatus] = useState('loading');
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const verifySession = async () => {
      try {
        const response = await api.get('/auth/me');
        if (isMounted) {
          setUser(response.data.user);
          setStatus('ready');
        }
      } catch (error) {
        if (isMounted) {
          setUser(null);
          setStatus('unauthorized');
        }
      }
    };

    verifySession();

    return () => {
      isMounted = false;
    };
  }, []);

  const logout = useCallback(async () => {
    try {
      await api.post('/auth/logout');
    } finally {
      setUser(null);
      window.location.replace(getLoginUrl());
    }
  }, []);

  const authValue = useMemo(() => ({ user, logout }), [logout, user]);

  if (status === 'loading') {
    return <div style={{ padding: '24px', fontFamily: 'inherit' }}>Checking your session...</div>;
  }

  if (status === 'unauthorized') {
    window.location.replace(getLoginUrl());
    return <div style={{ padding: '24px', fontFamily: 'inherit' }}>Redirecting to login...</div>;
  }

  return (
    <DashboardAuthContext.Provider value={authValue}>
      {children}
    </DashboardAuthContext.Provider>
  );
};

export const useDashboardAuth = () => {
  const context = useContext(DashboardAuthContext);

  if (!context) {
    throw new Error('useDashboardAuth must be used within AuthGate');
  }

  return context;
};

export default AuthGate;
