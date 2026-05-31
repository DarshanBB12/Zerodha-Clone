import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from './AuthContext';
import { navigateToDashboard } from './authApi';

const initialForm = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupPage = () => {
  const navigate = useNavigate();
  const { user, loading, signup } = useAuth();
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

  const validate = () => {
    const nextErrors = {};

    if (!formData.username.trim()) {
      nextErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address';
    }

    if (!formData.password.trim()) {
      nextErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.confirmPassword !== formData.password) {
      nextErrors.confirmPassword = 'Passwords do not match';
    }

    setFieldErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await signup({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      setIsError(false);
      setMessage(response.message || 'Signup successful');
      navigateToDashboard();
    } catch (error) {
      setIsError(true);
      setMessage(error.response?.data?.message || 'Unable to create account');
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
            <span className="auth-kicker">Create account</span>
            <h1>Start trading with a secure account</h1>
            <p>Open your account in minutes and keep your session protected with a JWT-based authentication flow.</p>
          </div>
          <div>
            <p className="auth-meta">Already registered?</p>
            <Link className="auth-dashboard-link" to="/login">Sign in instead</Link>
          </div>
        </aside>

        <div className="auth-panel">
          <span className="auth-kicker">Signup</span>
          <h2 className="auth-title">Create your account</h2>
          <p className="auth-subtitle">Fill in your details to get access to the platform.</p>

          {message && <div className={`auth-alert ${isError ? 'error' : 'success'}`}>{message}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-grid">
              <div className="auth-field">
                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="text" value={formData.username} onChange={handleChange} placeholder="Your username" />
                {fieldErrors.username && <span className="auth-error-text">{fieldErrors.username}</span>}
              </div>

              <div className="auth-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                {fieldErrors.email && <span className="auth-error-text">{fieldErrors.email}</span>}
              </div>
            </div>

            <div className="auth-grid">
              <div className="auth-field">
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Create a password" />
                {fieldErrors.password && <span className="auth-error-text">{fieldErrors.password}</span>}
              </div>

              <div className="auth-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Repeat your password" />
                {fieldErrors.confirmPassword && <span className="auth-error-text">{fieldErrors.confirmPassword}</span>}
              </div>
            </div>

            <button className="auth-action" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;