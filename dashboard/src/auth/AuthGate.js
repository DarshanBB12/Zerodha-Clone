import React, { useEffect, useState } from 'react';

import { api, getLoginUrl } from './authApi';

const AuthGate = ({ children }) => {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let isMounted = true;

    const verifySession = async () => {
      try {
        await api.get('/auth/me');
        if (isMounted) {
          setStatus('ready');
        }
      } catch (error) {
        if (isMounted) {
          setStatus('unauthorized');
        }
      }
    };

    verifySession();

    return () => {
      isMounted = false;
    };
  }, []);

  if (status === 'loading') {
    return <div style={{ padding: '24px', fontFamily: 'inherit' }}>Checking your session...</div>;
  }

  if (status === 'unauthorized') {
    window.location.replace(getLoginUrl());
    return <div style={{ padding: '24px', fontFamily: 'inherit' }}>Redirecting to login...</div>;
  }

  return children;
};

export default AuthGate;