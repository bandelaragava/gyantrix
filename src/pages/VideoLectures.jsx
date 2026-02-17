import React, { useState } from 'react';
import './VideoLectures.css';
import comingSoonImg from '../assets/comingsoon.jpeg';

const VideoLectures = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        course: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        console.log('Form submitted:', formData);

        // Show thank you popup
        setShowPopup(true);

        // Reset form
        setFormData({
            name: '',
            email: '',
            mobileNumber: '',
            course: ''
        });

        // Hide popup after 4 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 4000);
    };

    return (
        <section className="video-section">
            <div className="video-container">
                {/* Left Section */}
                <div className="video-info">
                    <h2>🎥 Video Lectures</h2>
                    <p>
                        Our interactive video lectures are coming soon!
                        Join our list to be among the first to access our exclusive lectures.
                    </p>
                    <img src={comingSoonImg} alt="Video Lectures Coming Soon" />
                </div>

                {/* Right Section (Lead Form) */}
                <div className="lead-form">
                    <h3>Stay Updated!</h3>
                    <p>Enter your details and we’ll notify you as soon as new lectures are launched.</p>

                    <form className="lead-table" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="number">Mobile Number</label>
                        <input
                            type="tel"
                            id="number"
                            name="mobileNumber"
                            placeholder="Enter your number"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="course">Interested Course</label>
                        <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Course</option>
                            <option>Data Science</option>
                            <option>Web Development</option>
                            <option>Cloud Computing</option>
                            <option>Cybersecurity</option>
                        </select>

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>

                {/* Popup */}
                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-box">
                            🎉 Thank you for your interest! <br /> We’ll notify you soon.
                            <br /><br />
                            <button onClick={() => setShowPopup(false)}>OK</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default VideoLectures;
