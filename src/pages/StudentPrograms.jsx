import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getAssetUrl } from '../utils/assets';
import { coursesData } from '../data/courses';
import './StudentPrograms.css';

const StudentPrograms = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get('type') || 'popular';
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'popular', label: 'All Programs' },
        { id: 'it', label: 'IT' },
        { id: 'pharma', label: 'Pharma' },
        { id: 'nonit', label: 'Non IT & Management' },
        { id: 'agriculture', label: 'Agriculture' }
    ];

    const setActiveCategory = (id) => {
        if (id === 'popular') {
            setSearchParams({}, { replace: true });
        } else {
            setSearchParams({ type: id }, { replace: true });
        }
    };

    const filteredCourses = useMemo(() => {
        return coursesData.filter(course => {
            const courseCategories = course.category.split(' ');
            let matchesCategory = false;

            if (activeCategory === 'popular') {
                matchesCategory = true;
            } else if (activeCategory === 'nonit') {
                // Matches both Non IT and Management as per Navbar label
                matchesCategory = courseCategories.includes('non-it-marketing') || courseCategories.includes('management');
            } else {
                // Exact whole word check (e.g., 'it' won't match 'non-it')
                matchesCategory = courseCategories.includes(activeCategory);
            }

            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    return (
        <section className="catalog-masterclass">
            <div className="glow-orb-premium top-left"></div>
            <div className="glow-orb-premium bottom-right"></div>

            <div className="catalog-header">
                <div className="header-meta">
                    <div className="pulse-dot"></div>
                    <span>Admissions Open 2026</span>
                </div>
                <h2>Forge Your Path with <span>Expert Curated Programs</span></h2>
                <p>Lean from industry leaders and gain career-defining certifications.</p>

                {/* Enhanced Search System */}
                <div className="search-bench">
                    <div className="search-input-wrap">
                        <i className="fas fa-search search-icon"></i>
                        <input
                            type="text"
                            placeholder="Find your future career (e.g. AI, Full Stack...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button className="clear-search" onClick={() => setSearchTerm('')}>
                                <i className="fas fa-times"></i>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <nav className="catalog-nav">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`nav-item ${activeCategory === category.id ? 'is-active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.label}
                        <div className="nav-underline"></div>
                    </button>
                ))}
            </nav>

            <div className="program-grid-immersive">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                        <div key={course.title} className="program-node">
                            <div className="node-content">
                                <div className="visual-container">
                                    <img src={getAssetUrl(course.img)} alt={course.title} />
                                    <div className="glass-stats">
                                        <div className="g-stat">
                                            <i className="fas fa-clock"></i>
                                            <span>{course.duration || '6 Months'}</span>
                                        </div>
                                        <div className="g-stat">
                                            <i className="fas fa-signal"></i>
                                            <span>{course.level || 'Intermediate'}</span>
                                        </div>
                                    </div>
                                    {course.isTrending2026 && <div className="trending-pill">Trending 2026</div>}
                                </div>

                                <div className="info-container">
                                    <div className="info-header">
                                        <div className="rating-pill">
                                            <i className="fas fa-star"></i>
                                            <span>4.5</span>
                                        </div>
                                        <span className="course-id">#{course.category?.split(' ')[0].toUpperCase() || 'P'}</span>
                                    </div>

                                    <h3>{course.title}</h3>
                                    <p className="excerpt">{course.desc}</p>

                                    <div className="skills-tags">
                                        <span className="skill-tag">{course.studentCount || '10k+'} Students</span>
                                        <span className="skill-tag">Job Portal Access</span>
                                        <span className="skill-tag">Mentorship</span>
                                    </div>

                                    <div className="financial-footer">
                                        <div className="price-tag-wrap">
                                            <span className="p-label">Starting at</span>
                                            <div className="p-main">
                                                <span className="symbol">₹</span>
                                                <span className="val">{course.price.replace(/[^0-9]/g, '')}</span>
                                                <span className="ext">/-</span>
                                            </div>
                                        </div>

                                        <div className="button-group-modern">
                                            <Link to={course.link} className="btn-icon">
                                                <i className="fas fa-external-link-alt"></i>
                                            </Link>
                                            <Link to="/contact" className="btn-main-enroll">
                                                <span>Secure Seat</span>
                                                <i className="fas fa-bolt"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <i className="fas fa-search"></i>
                        <h3>No programs matched your request</h3>
                        <p>Try searching for a different keyword or category.</p>
                        <button onClick={() => { setSearchTerm(''); setActiveCategory('popular'); }} className="btn-main-enroll">
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>

            <div className="catalog-footer">
                <p>Not sure which program to pick? <Link to="/contact">Talk to a Career Counselor →</Link></p>
            </div>
        </section>
    );
};

export default StudentPrograms;
