import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { getAssetUrl } from '../utils/assets';
import './CourseTrending.css';

const CourseTrending = () => {
    const scrollRef = useRef(null);

    // Auto-scroll Logic
    useEffect(() => {
        const interval = setInterval(() => {
            scroll('right');
        }, 3000); // 3 seconds
        return () => clearInterval(interval);
    }, []);

    // Scroll Logic
    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            // Get the width of one card (including gap)
            const firstCard = current.querySelector('.trending-card');
            const cardWidth = firstCard ? firstCard.offsetWidth + 32 : 400; // 32px is 2rem gap

            const maxScroll = current.scrollWidth - current.clientWidth;

            // Loop logic: if at the end, jump back to start
            if (direction === 'right' && current.scrollLeft >= maxScroll - 10) {
                current.scrollTo({ left: 0, behavior: 'smooth' });
            } else if (direction === 'left' && current.scrollLeft <= 10) {
                current.scrollTo({ left: maxScroll, behavior: 'smooth' });
            } else {
                current.scrollBy({
                    left: direction === 'left' ? -cardWidth : cardWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    // Dummy data helpers for display
    const getDuration = (title) => {
        const t = title.toLowerCase();
        if (t.includes("full stack")) return "12 Months";
        if (t.includes("data science")) return "9 Months";
        if (t.includes("digital marketing")) return "6 Months";
        if (t.includes("medical")) return "6 Months";
        if (t.includes("ai")) return "9 Months";
        if (t.includes("cyber")) return "6 Months";
        return "Self Paced";
    };

    return (
        <section className="trending-section">
            <div className="trending-header">
                <h2>Trending on Gyantrix</h2>
                <div className="header-actions">
                    <button className="scroll-btn" onClick={() => scroll('left')}>&#8249;</button>
                    <button className="scroll-btn" onClick={() => scroll('right')}>&#8250;</button>
                    <Link to="/trending-courses" className="view-all-btn">View All</Link>
                </div>
            </div>

            <div className="trending-grid" ref={scrollRef}>
                {coursesData.filter(c => c.isTrending2026).map((course, index) => (
                    <div key={index} className="trending-card">
                        <img src={getAssetUrl(course.img)} alt={course.title} />

                        <div className="card-meta">
                            <span className="duration-pill">{getDuration(course.title)}</span>
                            <span className="stars">★★★★★</span>
                        </div>

                        <h3>{course.title}</h3>

                        <div className="buttons">
                            <Link to={course.link} className="btn-schedule">Schedule an Appointment</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseTrending;
