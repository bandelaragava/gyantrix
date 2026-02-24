import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Signup = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: ''
    });

    const slides = [
        {
            title: "Smart Agriculture Certification",
            description: "Explore the intersection of technology and agriculture with modern tools.",
            image: "/images/agrillu.png",
            link: "/agriculture"
        },
        {
            title: "Join Our Dynamic Learning Community",
            description: "Experience the best of tech education with our comprehensive student programs.",
            image: "/images/bannerimage_ga.png",
            link: "/student-programs"
        },
        {
            title: "Professional Management Skills",
            description: "Step up your career with certified management and productivity training.",
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
        console.log('Signup attempt:', formData);
    };

    return (
        <div className="login-container">
            <div className="login-card signup-reversed">
                {/* Left Side: Signup Form */}
                <div className="login-form-section">
                    <div className="form-wrapper">
                        <div className="login-logo">
                            <img src="/images/gy1.png" alt="Gyantrix Logo" />
                            <span className='gyantrix_content'>yantrix</span>
                        </div>

                        <div className="login-header">
                            <h1>Create your account</h1>
                            <p className="subtitle">Start your journey with Gyantrix today</p>
                        </div>

                        <form onSubmit={handleSubmit} className="auth-form-guvi">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

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
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 00000 00000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Create a strong password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="guvi-login-btn">
                                <span>Signup</span>
                                <div className="liquid"></div>
                            </button>
                        </form>

                        <div className="auth-divider">
                            <span>Or Sign up with</span>
                        </div>

                        <div className="social-login-grid">
                            <button type="button" className="social-btn google" onClick={handleGoogleLogin}>
                                <img src="/images/goggle.png" alt="Google" />
                                Google
                            </button>
                        </div>

                        <p className="signup-link">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>

                {/* Right Side: Carousel (Reversed from Login) */}
                <div className="login-carousel-section signup-bg">
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
                                        <span>Get Started</span>
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
            </div>
        </div>
    );
};

export default Signup;
