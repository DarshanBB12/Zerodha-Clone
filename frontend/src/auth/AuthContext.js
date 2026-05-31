import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { api } from './authApi';

const AuthContext = createContext(null);

const AUTH_STORAGE_KEY = 'zerodha_auth_user';

const readStoredUser = () => {
  try {
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => readStoredUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const restoreSession = async () => {
      try {
        const response = await api.get('/auth/me');
        if (!isMounted) {
          return;
        }

        setUser(response.data.user);
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(response.data.user));
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setUser(null);
        localStorage.removeItem(AUTH_STORAGE_KEY);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    restoreSession();

    return () => {
      isMounted = false;
    };
  }, []);

  const authValue = useMemo(() => {
    const persistUser = (nextUser) => {
      setUser(nextUser);
      if (nextUser) {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextUser));
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    };

    const signup = async (payload) => {
      const response = await api.post('/auth/signup', payload);
      persistUser(response.data.user);
      return response.data;
    };

    const login = async (payload) => {
      const response = await api.post('/auth/login', payload);
      persistUser(response.data.user);
      return response.data;
    };

    const logout = async () => {
      try {
        await api.post('/auth/logout');
      } finally {
        persistUser(null);
      }
    };

    return {
      user,
      loading,
      signup,
      login,
      logout,
      setUser: persistUser,
    };
  }, [loading, user]);

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
};