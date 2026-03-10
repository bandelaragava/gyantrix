import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { coursesData } from '../data/courses';
import logo from '../assets/gy1.jpg';

const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navbarRef = useRef(null);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() === '') {
            setSearchResults([]);
        } else {
            const filtered = coursesData.filter(course =>
                course.title.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filtered);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setIsNavActive(false);
                setSearchResults([]); // Close search results too
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeAll = () => {
        setOpenDropdown(null);
        setIsNavActive(false);
        setSearchQuery('');
        setSearchResults([]);
    };

    return (
        <header className="navbar" id="mainNav" ref={navbarRef}>
            <div className="logo-heading-container">
                <Link to="/"><img src={logo} alt="Gyantrix" /></Link>
                <div className="headingnames">
                    <h3 className="head1" id="gyantrix">GYANTRIX</h3>
                    {/* <h3 className="head1" id="academy">ACADEMY</h3> */}
                </div>
            </div>

            <div className="nav-search-container">
                <div className="search-wrapper">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        placeholder="Search for courses..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="nav-search-input"
                    />
                </div>
                {searchResults.length > 0 && (
                    <div className="search-results-dropdown">
                        {searchResults.map((course, index) => (
                            <Link
                                key={index}
                                to={course.link}
                                className="search-result-item"
                                onClick={closeAll}
                            >
                                <img src={course.img} alt={course.title} className="result-img" />
                                <div className="result-info">
                                    <span className="result-title">{course.title}</span>
                                    <span className="result-cat">{course.category.split(' ')[0].toUpperCase()}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <button className="hamburger" id="hamburger" onClick={toggleNav}>☰</button>
            <nav className={isNavActive ? 'active' : ''}>
                <Link to="/" onClick={closeAll}>Home</Link>
                <div
                    className={`dropdown ${openDropdown === 'courses' ? 'open' : ''}`}
                    onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown('courses')}
                    onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
                >
                    <div className="drop-btn-wrapper">
                        <Link to="/student-programs" className="drop-btn" onClick={closeAll}>Courses</Link>
                        <button className="dropdown-toggle-btn" onClick={() => toggleDropdown('courses')}>
                            <i className={`fas fa-chevron-${openDropdown === 'courses' ? 'up' : 'down'}`}></i>
                        </button>
                    </div>
                    <div className="dropdown-content">
                        <Link to="/it" onClick={closeAll}>IT</Link>
                        <Link to="/pharma" onClick={closeAll}>Pharma</Link>
                        <Link to="/nonit" onClick={closeAll}>Non IT & Management</Link>
                        <Link to="/agriculture" onClick={closeAll}>Agriculture</Link>
                    </div>
                </div>
                <div
                    className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}
                    onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown('about')}
                    onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
                >
                    <div className="drop-btn-wrapper">
                        <Link to="/about" className="drop-btn" onClick={closeAll}>About us</Link>
                        <button className="dropdown-toggle-btn" onClick={() => toggleDropdown('about')}>
                            <i className={`fas fa-chevron-${openDropdown === 'about' ? 'up' : 'down'}`}></i>
                        </button>
                    </div>
                    <div className="dropdown-content">
                        <Link to="/about" onClick={closeAll}>About</Link>
                        <Link to="/faqs" onClick={closeAll}>FAQs</Link>
                    </div>
                </div>

                <div
                    className={`dropdown ${openDropdown === 'resources' ? 'open' : ''}`}
                    onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown('resources')}
                    onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
                >
                    <div className="drop-btn-wrapper">
                        <span className="drop-btn">Resources</span>
                        <button className="dropdown-toggle-btn" onClick={() => toggleDropdown('resources')}>
                            <i className={`fas fa-chevron-${openDropdown === 'resources' ? 'up' : 'down'}`}></i>
                        </button>
                    </div>
                    <div className="dropdown-content">
                        <Link to="/events" onClick={closeAll}>Events</Link>
                        <Link to="/careers" onClick={closeAll}>Careers</Link>
                        <Link to="/blog" onClick={closeAll}>Blogs</Link>
                        <Link to="/learn-hub" onClick={closeAll}>Learn Hub</Link>
                    </div>
                </div>

                <Link to="/contact" onClick={closeAll}>Contact us</Link>
                <Link to="/login" className="login-nav-btn" onClick={closeAll}>
                    <span>Login</span>
                    <div className="liquid"></div>
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
