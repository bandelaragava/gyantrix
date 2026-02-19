import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { getAssetUrl } from '../utils/assets';
import './TrendingCourses.css';

const TrendingCourses = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    // Derived values from URL
    const searchQuery = searchParams.get('search') || '';
    const selectedCategory = searchParams.get('category') || '';
    const sortOption = searchParams.get('sort') || 'Newest';
    const currentPage = parseInt(searchParams.get('page')) || 1;

    const itemsPerPage = 6;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter and Sort Logic (Calculated on every render based on URL)
    let filteredCourses = coursesData;

    // Filter by Search Query
    if (searchQuery) {
        filteredCourses = filteredCourses.filter(course =>
            course.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Filter by Category
    if (selectedCategory) {
        filteredCourses = filteredCourses.filter(course =>
            course.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );
    }

    // Sort Results
    if (sortOption === 'Popular') {
        filteredCourses = [...filteredCourses].reverse();
    } else if (sortOption === 'Rating') {
        filteredCourses = [...filteredCourses].sort((a, b) => b.title.length - a.title.length);
    }

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

    const updateParams = (newParams) => {
        const nextParams = Object.fromEntries(searchParams.entries());
        Object.keys(newParams).forEach(key => {
            if (newParams[key] === '' || newParams[key] === null || (key === 'page' && newParams[key] === 1) || (key === 'sort' && newParams[key] === 'Newest')) {
                delete nextParams[key];
            } else {
                nextParams[key] = newParams[key];
            }
        });
        setSearchParams(nextParams, { replace: true });
    };

    const handleSearchChange = (e) => {
        updateParams({ search: e.target.value, page: 1 });
    };

    const handleCategoryChange = (e) => {
        updateParams({ category: e.target.value, page: 1 });
    };

    const handleSortChange = (e) => {
        updateParams({ sort: e.target.value });
    };

    const handleReset = () => {
        setSearchParams({}, { replace: true });
    };

    const paginate = (pageNumber) => {
        updateParams({ page: pageNumber });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Categories derived from data
    const categories = ['IT', 'Non-IT', 'Pharma', 'Agriculture', 'Management'];

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
                            onChange={handleSearchChange}
                        />
                        <span className="search-icon">🔍</span>
                    </div>

                    <select
                        className="category-select"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    <div className="search-btn-group">
                        <button className="reset-btn" style={{ width: '100%' }} onClick={handleReset}>Reset Filters</button>
                    </div>
                </div>

                {/* Results Header */}
                <div className="results-header">
                    <div className="results-info-top">
                        <span className="results-count-main">{filteredCourses.length} Results Found</span>
                    </div>
                    <div className="header-right">
                        <select
                            className="sort-select"
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <option value="Newest">Newest</option>
                            <option value="Popular">Popular</option>
                            <option value="Rating">Rating</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                <div className="trending-courses-grid">
                    {currentItems.length > 0 ? (
                        currentItems.map((course, index) => (
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


                {/* Pagination Bottom */}
                <div className="pagination-bottom-wrapper">
                    <div className="pagination-info-left">
                        <span className="showing-text">Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredCourses.length)} of {filteredCourses.length} results</span>
                    </div>
                    {totalPages > 1 && (
                        <div className="pagination-bottom">
                            <button
                                className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
                                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            >
                                Previous
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                    onClick={() => paginate(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                className={`page-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>

                {/* Upskill CTA Section */}
                <div className="upskill-cta-section">
                    <div className="upskill-container">
                        <div className="upskill-content">
                            <div className="upskill-text-wrapper">
                                <span className="upskill-tag">Ready to Upskill?</span>
                                <h1>Start your journey with <br />Gyantrix Learn from the best</h1>
                                <p>Explore top courses, gain real-world skills, and grow at your own pace.</p>
                            </div>

                            <div className="upskill-visual">
                                <div className="curved-arrow">
                                    <svg viewBox="0 0 150 50" preserveAspectRatio="none">
                                        <path d="M10,40 Q80,10 140,20" fill="none" stroke="#4a6cf7" strokeWidth="2" strokeDasharray="5,5" />
                                        <path d="M132,12 L142,20 L134,28" fill="none" stroke="#4a6cf7" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <Link to="/courses" className="upskill-btn">Start Learning Today</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCourses;
