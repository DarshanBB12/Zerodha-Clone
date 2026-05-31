import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from './AuthContext';
import { navigateToDashboard } from './authApi';

const initialForm = {
  email: '',
  password: '',
  rememberMe: true,
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, loading, login } = useAuth();
  const [formData, setFormData] = useState(initialForm);
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      navigateToDashboard();
    }
  }, [loading, navigate, user]);

  useEffect(() => {
    const storedEmail = localStorage.getItem('zerodha_login_email');
    if (storedEmail) {
      setFormData((current) => ({ ...current, email: storedEmail }));
    }
  }, []);

  const validate = () => {
    const nextErrors = {};

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address';
    }

    if (!formData.password.trim()) {
      nextErrors.password = 'Password is required';
    }

    setFieldErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name === 'email') {
      localStorage.setItem('zerodha_login_email', value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });

      setIsError(false);
      setMessage(response.message || 'Login successful');
      navigateToDashboard();
    } catch (error) {
      setIsError(true);
      setMessage(error.response?.data?.message || 'Unable to login');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading || user) {
    return <div className="auth-loader">Loading your account...</div>;
  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <aside className="auth-aside">
          <div>
            <span className="auth-kicker">Secure access</span>
            <h1>Welcome back to Zerodha</h1>
            <p>Sign in to continue trading, review holdings, and access your dashboard with a secure JWT session.</p>
          </div>
          <div>
            <p className="auth-meta">Need an account first?</p>
            <Link className="auth-dashboard-link" to="/signup">Create your account</Link>
          </div>
        </aside>

        <div className="auth-panel">
          <span className="auth-kicker">Login</span>
          <h2 className="auth-title">Sign in to continue</h2>
          <p className="auth-subtitle">Use your email and password to access the trading dashboard.</p>

          {message && <div className={`auth-alert ${isError ? 'error' : 'success'}`}>{message}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
              {fieldErrors.email && <span className="auth-error-text">{fieldErrors.email}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
              {fieldErrors.password && <span className="auth-error-text">{fieldErrors.password}</span>}
            </div>

            <div className="auth-row">
              <label className="auth-check" htmlFor="rememberMe">
                <input id="rememberMe" name="rememberMe" type="checkbox" checked={formData.rememberMe} onChange={handleChange} />
                Remember me
              </label>
              <span className="auth-meta">Session secured with JWT cookies</span>
            </div>

            <button className="auth-action" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Login'}
            </button>
          </form>

          <p className="auth-switch">
            New here? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;