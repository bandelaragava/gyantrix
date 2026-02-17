import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './LeadFormPage.css';
import { getAssetUrl } from '../utils/assets';

const LeadFormPage = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    // Dynamic content based on route
    const getConfig = () => {
        const path = location.pathname;
        if (path.includes('internship')) {
            return {
                title: "Kickstart Your Career with Industry Internships",
                image: "/images/contact.png",
                source: "internshipForm"
            };
        } else if (path.includes('certification')) {
            return {
                title: "View or Request Your Course Certificate",
                image: "/images/certificationimage.png",
                source: "certificationForm"
            };
        } else if (path.includes('mentorship')) {
            return {
                title: "Accelerate Your Growth with Industry Mentorship",
                image: "/images/career-support.jpg",
                source: "mentorshipForm"
            };
        } else if (path.includes('project')) {
            return {
                title: "Work on Real-World Industry Projects",
                image: "/images/features.jpg",
                source: "projectForm"
            };
        } else if (path.includes('liveevents')) {
            return {
                title: "Register for Upcoming Live Events & Workshops",
                image: "/images/contact.png",
                source: "liveEventsForm"
            };
        } else if (path.includes('enroll')) {
            return {
                title: "Enroll Today and Start Your Learning Journey",
                image: "/images/enroll-bg.jpg", // Placeholder or generic bg
                source: "enrollForm"
            };
        } else if (path.includes('guidance')) {
            return {
                title: "Need Guidance? We're Here to Help!",
                image: "/images/contact.png",
                source: "answerForm"
            };
        }
        return {
            title: "Connect with Us",
            image: "/images/contact.png",
            source: "generalForm"
        };
    };

    const config = getConfig();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch("https://gyantrix-academy-backend-1.onrender.com/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, source: config.source }),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: '✅ Your details were submitted successfully!' });
                setFormData({ name: '', email: '', mobileNumber: '' });
            } else {
                setStatus({ type: 'error', message: '❌ Failed to submit details. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: '🚨 Server error. Please check your connection.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="lead-form-page">
            <div className="container">
                <h1>{config.title}</h1>
                <div className="form-layout">
                    <div className="form-container">
                        <form onSubmit={handleSubmit} className="lead-form">
                            <div className="form-group">
                                <label htmlFor="name">Your Name<span className="star">*</span>:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address<span className="star">*</span>:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="number">Mobile Number<span className="star">*</span>:</label>
                                <input
                                    type="tel"
                                    id="number"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>

                        {status.message && (
                            <div className={`status-message ${status.type}`}>
                                {status.message}
                            </div>
                        )}
                    </div>

                    <div className="image-container">
                        <img src={getAssetUrl(config.image)} alt={config.title} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadFormPage;
