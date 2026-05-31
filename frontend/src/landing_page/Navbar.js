import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

function Navbar() {
    const navigate = useNavigate();
    const { user, loading, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <nav 
            className="navbar navbar-expand-lg navline"
            style={{
                backgroundColor: "#fff",
                borderTop: "1px solid #370a0a",
                padding: "0.5rem 10%",
            }}
        >
            <div className="container">
                
                <Link className="navbar-brand" to="/">
                    <img 
                        src="media/image/logo.svg" 
                        style={{ width: "30%" }} 
                        alt="logo"
                    />
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto mb-lg-0">
                        {!loading && !user && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                            </>
                        )}
                        {!loading && user && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link nav-link-button" type="button" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;