import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

import logo from '../assets/gy1.jpg';

const Login = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const slides = [
        {
            title: "Elevate Your Career with AI Software Development",
            description: "Master the future of tech with our comprehensive AI-driven curriculum.",
            image: "/images/aibgimg.png",
            link: "/it"
        },
        {
            title: "Expert UI/UX Design Training",
            description: "Learn to create stunning user interfaces and seamless experiences.",
            image: "/images/UI-UX-illu.png",
            link: "/it"
        },
        {
            title: "Industry Leading Curriculum",
            description: "Access our vast library of resources and expert-led course modules.",
            image: "/images/bannerimage_ga.png",
            link: "/student-programs"
        },
        {
            title: "MS Office Masterclass",
            description: "Master essential productivity tools for modern business management.",
            image: "/images/MS.png",
            link: "/management"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGoogleLogin = () => {
        window.location.href = 'https://accounts.google.com/AccountChooser?service=mail&continue=https://accounts.google.com/signin';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                {/* Left Side: Carousel (Reference to Guvi style) */}
                <div className="login-carousel-section">
                    <div className="carousel-container">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                            >
                                <div className="slide-image-wrapper">
                                    <img src={slide.image} alt={slide.title} />
                                </div>
                                <div className="slide-text">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                    <Link to={slide.link} className="explore-btn liquid-btn">
                                        <span>Explore Now</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <div className="carousel-dots">
                            {slides.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="login-form-section">
                    <div className="form-wrapper">
                        <div className="login-logo">
                            <img src={logo} alt="Gyantrix Logo" />
                            <span className='gyantrix_content'>yantrix</span>
                        </div>

                        <div className="login-header">
                            <h1>Login & Get codified</h1>

                        </div>

                        <div className="social-login-grid">
                            <button type="button" className="social-btn google" onClick={handleGoogleLogin}>
                                <img src="/images/goggle.png" alt="Google" />
                                Google
                            </button>
                        </div>

                        <div className="auth-divider">
                            <span>Or Login with Email</span>
                        </div>

                        <form onSubmit={handleSubmit} className="auth-form-guvi">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="yourname@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <div className="label-row">
                                    <label>Password</label>
                                    <Link to="/forgot-password" id="forgot-link">Forgot password?</Link>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="guvi-login-btn">
                                <span>Login</span>
                                <div className="liquid"></div>
                            </button>
                        </form>

                        <p className="signup-link">
                            Don't have an account? <Link to="/signup">Signup</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
