import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/gy1.png';

const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const navbarRef = useRef(null);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    useEffect(() => {
        const handleScroll = () => {
            const mainNav = document.getElementById('mainNav');
            if (window.scrollY > 50) {
                mainNav?.classList.add('fixed');
            } else {
                mainNav?.classList.remove('fixed');
            }
        };

        const handleClickOutside = (event) => {
            // Close dropdown and mobile nav if clicking outside the navbar
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setIsNavActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeAll = () => {
        setOpenDropdown(null);
        setIsNavActive(false);
    };

    return (
        <header className="navbar" id="mainNav" ref={navbarRef}>
            <div className="logo-heading-container">
                <Link to="/"><img src={logo} alt="Gyantrix" /></Link>
                <div className="headingnames">
                    <h3 className="head1" id="gyantrix">GYANTRIX</h3>
                    <h3 className="head1" id="academy">ACADEMY</h3>
                </div>
            </div>
            <Link to="/student-programs" className="student-btn">🎓 Student Programs</Link>
            <button className="hamburger" id="hamburger" onClick={toggleNav}>☰</button>
            <nav className={isNavActive ? 'active' : ''}>
                <Link to="/" onClick={closeAll}>Home</Link>
                <div className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}>
                    <button className="drop-btn" onClick={() => toggleDropdown('about')}>About us▿</button>
                    <div className="dropdown-content">
                        <Link to="/about" onClick={closeAll}>About</Link>
                        <Link to="/faqs" onClick={closeAll}>FAQs</Link>
                    </div>
                </div>

                <div className={`dropdown ${openDropdown === 'courses' ? 'open' : ''}`}>
                    <button className="drop-btn" onClick={() => toggleDropdown('courses')}>Courses▿</button>
                    <div className="dropdown-content">
                        <Link to="/it" onClick={closeAll}>IT</Link>
                        <Link to="/pharma" onClick={closeAll}>Pharma</Link>
                        <Link to="/nonit" onClick={closeAll}>Non IT & Management</Link>
                        <Link to="/agriculture" onClick={closeAll}>Agriculture</Link>
                    </div>
                </div>
                <Link to="/events" onClick={closeAll}>Events</Link>
                <Link to="/careers" onClick={closeAll}>Careers</Link>
                <Link to="/contact" onClick={closeAll}>Contact us</Link>
            </nav>
        </header>
    );
};

export default Navbar;
