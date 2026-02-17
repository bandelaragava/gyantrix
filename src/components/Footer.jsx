import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import footerLogo from '../assets/gyan1.png';

const Footer = () => {
    return (
        <section className="foot">
            <footer className="footer">
                <div className="footer-container">
                    {/* ADDRESS */}
                    <div className="footer-section address">
                        <Link to="/"><img src={footerLogo} alt="Gyantrix Academy Logo" className="footer-logo" /></Link>
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/photo/?fbid=122101027089065794&set=a.122101027125065794" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" />
                            </a>
                            <a href="https://x.com/GyantixAcademy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
                            </a>
                            <a href="https://www.instagram.com/gyantrix_academy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/company/109240608/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
                            </a>
                            <a href="https://wa.me/7386879818" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174879.png" alt="Whatsapp" />
                            </a>
                        </div>
                    </div>

                    {/* MENU */}
                    <div className="footer-section">
                        <h3>Menu</h3>
                        <ul>
                            <li><Link to="/">Gyantrix Academy</Link></li>
                            <li><Link to="/faqs">FAQs</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/career-form">Careers</Link></li>
                        </ul>
                    </div>

                    {/* OUR COURSES */}
                    <div className="footer-section">
                        <h3>Our Courses</h3>
                        <ul>
                            <li><Link to="/it">IT</Link></li>
                            <li><Link to="/nonit">Non IT & Management</Link></li>
                            <li><Link to="/pharma">Pharma</Link></li>
                            <li><Link to="/agriculture">Agriculture</Link></li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li><Link to="/videolectures">Video Lectures</Link></li>
                            <li><Link to="/interview-questions">Interview Questions</Link></li>
                            <li><Link to="/blog">Blogs</Link></li>
                        </ul>
                    </div>

                    {/* POLICIES */}
                    <div className="footer-section">
                        <h3>Policies</h3>
                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                            <li><Link to="/refund">Refund</Link></li>
                            <li><Link to="/referral">Referral</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-sec">
                    <p>Empowering learners with industry-relevant skills and practical knowledge for career excellence.</p>
                </div>

                <div className="footer-sec1-container">
                    <div className="footer-sec1">
                        <h3>Official Address</h3>
                        <p>4th Floor,</p>
                        <p>Manjeera Trinity corporate, </p>
                        <p>KPHB,</p>
                        <p>Hyderabad, </p>
                        <p>Telangana - 500072</p>
                    </div>

                    <div className="footer-sec1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3797554837915!2d78.39008137385507!3d17.48937628341533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918dab342375%3A0x180a04af0c47f594!2sManjeera%20Trinity%20Corporate!5e0!3m2!1sen!2sin!4v1761911473357!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>

                {/* FOOTER BOTTOM */}
                <div className="footer-bottom">
                    <p>Made with <span className="heart">❤️</span> in Hyderabad, India</p>
                    <p>Copyright © 2025 <Link to="/" className="company">Gyantrix Academy</Link> || All Rights Reserved</p>
                    <p>Developed By <a href="https://www.futureinvo.com/" className="dev" target="_blank" rel="noopener noreferrer">Future Invo Solutions</a></p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
