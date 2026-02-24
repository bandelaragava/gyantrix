import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Reusing some login styles for consistency

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reset request for:', email);
        setSubmitted(true);
    };

    return (
        <div className="login-container">
            <div className="login-card" style={{ maxWidth: '600px', minHeight: 'auto' }}>
                <div className="login-form-section" style={{ flex: 1, padding: '4rem 3rem' }}>
                    {!submitted ? (
                        <div className="form-wrapper">
                            <div className="login-logo">
                                <img src="/images/gy1.png" alt="Gyantrix Logo" />
                            </div>
                            <div className="login-header">
                                <h1 style={{ fontSize: '1.8rem' }}>Reset Password</h1>
                                <p style={{ color: '#666', marginTop: '0.5rem', textAlign: 'center' }}>
                                    Enter your email and we'll send you a link to reset your password.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="auth-form-guvi" style={{ marginTop: '2rem' }}>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="yourname@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="guvi-login-btn">
                                    <span>Send Reset Link</span>
                                    <div className="liquid"></div>
                                </button>
                            </form>

                            <p className="signup-link">
                                Remembered your password? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    ) : (
                        <div className="form-wrapper" style={{ textAlign: 'center' }}>
                            <div className="success-icon" style={{ fontSize: '4rem', color: '#4caf50', marginBottom: '1.5rem' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h1>Check your email</h1>
                            <p style={{ color: '#666', margin: '1rem 0 2rem' }}>
                                We've sent a password reset link to <strong>{email}</strong>
                            </p>
                            <Link to="/login" className="guvi-login-btn" style={{ textDecoration: 'none', display: 'block' }}>
                                <span>Return to Login</span>
                                <div className="liquid"></div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
