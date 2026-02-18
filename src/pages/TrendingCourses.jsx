import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { getAssetUrl } from '../utils/assets';
import './TrendingCourses.css';

const TrendingCourses = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // State for filters
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState('Newest');
    const [filteredCourses, setFilteredCourses] = useState(coursesData);

    // Categories derived from data
    const categories = ['IT', 'Non-IT', 'Pharma', 'Agriculture', 'Management'];

    // Handle Search & Filter
    const handleSearch = () => {
        let results = coursesData;

        // Filter by Search Query
        if (searchQuery) {
            results = results.filter(course =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by Category
        if (selectedCategory) {
            results = results.filter(course =>
                course.category.toLowerCase().includes(selectedCategory.toLowerCase())
            );
        }

        // Sort Results
        if (sortOption === 'Newest') {
            // Keep default
        } else if (sortOption === 'Popular') {
            results = [...results].reverse();
        } else if (sortOption === 'Rating') {
            // Mock rating sort
            results = [...results].sort((a, b) => b.title.length - a.title.length);
        }

        setFilteredCourses(results);
    };

    const handleReset = () => {
        setSearchQuery('');
        setSelectedCategory('');
        setSortOption('Newest');
        setFilteredCourses(coursesData);
    };

    // Auto-search on sort change
    useEffect(() => {
        handleSearch();
    }, [sortOption]);
    // Intentionally NOT adding query/category here to allow manual "Search" button click as per UI pattern

    // Helper for duration display
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
        <div className="trending-courses-page">
            <div className="container">
                {/* Breadcrumb */}
                <div className="trending-breadcrumb">
                    <Link to="/">Home</Link> <span>►</span> All Trending Courses
                </div>

                {/* Search & Filter Section */}
                <div className="search-filter-container">
                    <div className="search-input-wrapper">
                        <input
                            type="text"
                            placeholder="Enter course name"
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <span className="search-icon">🔍</span>
                    </div>

                    <select
                        className="category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    <button className="search-btn" onClick={handleSearch}>Search</button>
                    <button className="reset-btn" onClick={handleReset}>Reset</button>
                </div>

                {/* Results Header */}
                <div className="results-header">
                    <div className="results-count">{filteredCourses.length} Results Found</div>
                    <select
                        className="sort-select"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="Newest">Newest</option>
                        <option value="Popular">Popular</option>
                        <option value="Rating">Rating</option>
                    </select>
                </div>

                {/* Grid */}
                <div className="trending-courses-grid">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course, index) => (
                            <div key={index} className="trending-card">
                                <img src={getAssetUrl(course.img)} alt={course.title} />

                                <div className="card-meta">
                                    <span className="duration-pill">{getDuration(course.title)}</span>
                                    <span className="stars">★★★★★</span>
                                </div>

                                <h3>{course.title}</h3>

                                <div className="buttons">
                                    <Link to={course.link} className="btn-know-more">Know More</Link>
                                    <Link to="/contact" className="btn-enroll">Enroll Now</Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '1.2rem', padding: '2rem' }}>
                            No courses found matching your criteria.
                        </p>
                    )}
                </div>

                {/* Upskill CTA Section */}
                <div className="upskill-cta-section">
                    <div className="upskill-container">
                        <div className="upskill-text">
                            <span className="upskill-label">Ready to Upskill?</span>
                            <h2>Start your journey with Gyantrix Learn from the best</h2>
                            <p>Explore top courses, gain real-world skills, and grow at your own pace.</p>
                        </div>
                        <div className="upskill-arrow">
                            <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 30C40 10 90 10 140 25" stroke="#305caf" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
                                <path d="M135 15L145 25L135 32" stroke="#305caf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="upskill-action">
                            <Link to="/courses" className="btn-upskill">Start Learning Today</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCourses;
