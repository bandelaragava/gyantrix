import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { getAssetUrl } from '../utils/assets';
import './CourseTrending.css';

const CourseTrending = ({ initialCategory = null, showTitle = true }) => {
    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = React.useState(0);

    // Update progress bar
    const handleScroll = () => {
        const { current } = scrollRef;
        if (current) {
            const scrollLeft = current.scrollLeft;
            const scrollWidth = current.scrollWidth - current.clientWidth;
            const progress = (scrollLeft / scrollWidth) * 100;
            setScrollProgress(progress);
        }
    };

    // Auto-scroll Logic
    useEffect(() => {
        const grid = scrollRef.current;
        let interval;

        const startScroll = () => {
            interval = setInterval(() => {
                scroll('right');
            }, 2000);
        };

        const stopScroll = () => {
            clearInterval(interval);
        };

        startScroll();

        if (grid) {
            grid.addEventListener('mouseenter', stopScroll);
            grid.addEventListener('mouseleave', startScroll);
        }

        return () => {
            stopScroll();
            if (grid) {
                grid.removeEventListener('mouseenter', stopScroll);
                grid.removeEventListener('mouseleave', startScroll);
            }
        };
    }, []);

    // Scroll Logic
    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const firstCard = current.querySelector('.trending-card');
            const cardWidth = firstCard ? firstCard.offsetWidth + 32 : 400;
            const maxScroll = current.scrollWidth - current.clientWidth;

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

    const filteredCourses = (initialCategory && initialCategory !== 'trending')
        ? coursesData.filter(c => {
            const cat = c.category.toLowerCase();
            const search = initialCategory.toLowerCase();
            if (search === 'nonit') {
                return cat.includes('non-it') || cat.includes('management');
            }
            return cat.includes(search);
        })
        : coursesData.filter(c => c.isTrending2026);

    return (
        <section className="trending-section">
            {showTitle && (
                <div className="trending-header">
                    <div className="title-group">
                        <h2>
                            {initialCategory === 'trending' || !initialCategory
                                ? "Trending on Gyantrix"
                                : initialCategory === 'nonit'
                                    ? "Non IT & Management Programs"
                                    : `${initialCategory.toUpperCase()} Programs`}
                        </h2>
                        <p className="subtitle">Curated pathways for the next generation of industry leaders.</p>
                    </div>
                    <div className="header-actions">
                        <div className="scroll-controls">
                            <button className="scroll-btn" onClick={() => scroll('left')}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button className="scroll-btn" onClick={() => scroll('right')}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <Link to="/student-programs" className="btn view-all-btn">
                            <span>Explore Store</span>
                            <div className="liquid"></div>
                        </Link>
                    </div>
                </div>
            )}

            <div className="trending-grid" ref={scrollRef} onScroll={handleScroll}>
                {filteredCourses.map((course, index) => (
                    <div key={index} className="trending-card">
                        <div className="card-image-container">
                            <img src={getAssetUrl(course.img)} alt={course.title} />
                            <div className="card-overlay">
                                <span className="curriculum-tag">
                                    <i className="fas fa-layer-group"></i> {course.modules ? course.modules.length : '8+'} Modules
                                </span>
                            </div>
                            {course.isTrending2026 && <div className="card-badge">Trending </div>}
                        </div>

                        <div className="card-body">
                            <div className="card-meta">
                                <div className="duration-pill">
                                    <i className="far fa-calendar-alt"></i> 6-12 Months
                                </div>
                                <div className="rating">
                                    <span className="stars">★★★★★</span>
                                    <span className="rating-text">4.5</span>
                                </div>
                            </div>

                            <h3>{course.title}</h3>

                            <div className="card-footer">
                                <div className="price-tag">
                                    <span className="price-label">Program Fee</span>
                                    <span className="price-value">{course.price || "₹14,999"}</span>
                                </div>
                                <Link to={course.link} className="btn-schedule btn">
                                    <span>Learn More</span>
                                    <div className="liquid"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="scroll-progress-container">
                <div
                    className="scroll-progress-bar"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>
        </section>
    );
};

export default CourseTrending;
