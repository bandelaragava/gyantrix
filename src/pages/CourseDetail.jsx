import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { getAssetUrl } from '../utils/assets';
import './CourseDetail.css';

const CourseDetail = () => {
    const { courseId } = useParams();
    const sectionRef = useRef(null);
    const [activeModule, setActiveModule] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeCert, setActiveCert] = useState('gyantrix');
    const [reviews, setReviews] = useState([]);

    // Find the course based on the courseId from the URL
    const course = coursesData.find(c => c.link === `/courses/${courseId}`);

    // If course not found, redirect to courses page
    if (!course) {
        return <Navigate to="/courses" replace />;
    }

    // Mouse Tracking for Advantage Section
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleMouseMove = (e) => {
            const rect = section.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            section.style.setProperty('--mx', `${x}%`);
            section.style.setProperty('--my', `${y}%`);
        };

        section.addEventListener('mousemove', handleMouseMove);
        return () => section.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Initialize reviews from course data on mount or course change
    useEffect(() => {
        if (course.reviews) {
            setReviews(course.reviews);
        } else {
            setReviews([]);
        }
        // Reset states when course changes
        setActiveModule(0);
        setActiveFaq(null);
    }, [course]);

    const toggleModule = (index) => {
        // In the Nexus view, we don't allow closing the active tab (stays active)
        setActiveModule(index);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Use course-specific data or fallbacks
    const modules = course.modules || [];
    const faqs = course.faqs || [
        { question: `What is ${course.title}?`, answer: course.desc },
        { question: 'What are the prerequisites?', answer: 'Basic computer knowledge.' },
        { question: 'Is placement assistance provided?', answer: 'Yes, we provide 100% placement assistance.' }
    ];
    // Generic tools if none provided (optional, or show empty)
    const tools = course.tools || [];

    // Generic placement students if not specific (could also be kept in courses.js if needed)
    // For now, keeping the static list as "Our Students" unless we want course-specific placements too.
    // Keeping static for now as requested "student reviews" was the main concern, but placements usually span across.
    // However, the user said "It should not always load the Full Stack Development content... unless Full Stack... is clicked".
    // So let's make placements generic or specific. If specific placements aren't there, maybe show a generic set or none. 
    // To be safe and compliant, I'll stick to a generic set for now if course doesn't have it, 
    // but the prompt implies we shouldn't show Full Stack content for others.
    // I will use a generic set of students that are likely relevant to all or just mixed.
    // The current hardcoded list seems mixed (Tech Mahindra, Wipro etc).
    // I will use reference to the hardcoded list but maybe we should randomize or just keep it as "Institute Placements".

    const placementStudents = [
        { name: 'Priya Sharma', company: 'Future Invo Solutions', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Rahul Verma', company: 'Infoz IT', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Neha Gupta', company: 'Wipro', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Vikas Kumar', company: 'Tech Mahindra', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Ritu Singh', company: 'Capgemini', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Amit Patel', company: 'Infosys', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Sonal Jain', company: 'TCS', img: 'https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Karan Singh', company: 'HCL', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Megha Rao', company: 'Genpact', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Arjun Das', company: 'Accenture', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Tanvi Shah', company: 'Deloitte', img: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3f?auto=format&fit=crop&q=80&w=150&h=150' },
        { name: 'Rohan Gupta', company: 'Cisco', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150' }
    ];

    const [newReview, setNewReview] = useState({ name: '', role: '', review: '' });

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.role && newReview.review) {
            const reviewToAdd = {
                ...newReview,
                img: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' // Default user icon
            };
            setReviews([reviewToAdd, ...reviews]); // Add to top
            setNewReview({ name: '', role: '', review: '' }); // Reset form
        }
    };

    return (
        <div className="course-detail-page">
            {/* Course Overview - Advanced V2 Redesign */}
            <section className="future-forge-section v2">
                <div className="forge-aurora">
                    <div className="aurora-blob aurora-1"></div>
                    <div className="aurora-blob aurora-2"></div>
                    <div className="aurora-blob aurora-3"></div>
                </div>

                <div className="floating-elements">
                    <div className="float-item sphere-1"></div>
                    <div className="float-item sphere-2"></div>
                    <div className="float-item crystal-1"></div>
                </div>

                <div className="forge-container">
                    <div className="forge-content-wrapper">
                        <div className="forge-editorial">
                            <span className="forge-eyebrow">Professional Track</span>
                            <h1>Shape Tomorrow with the Power of <br /><span className="title-highlight">{course.title}</span></h1>
                            <p>
                                {course.programDescription || `Step confidently into the cutting-edge world of technology with our ${course.title} Training in Hyderabad. Guided by industry experts, you'll learn to solve real-world problems with hands-on projects and IIT-inspired curriculum.`}
                            </p>

                            <div className="tech-specs-grid">
                                <div className="spec-card">
                                    <span className="spec-val">6.5 LPA</span>
                                    <span className="spec-lab">Highest CTC</span>
                                </div>
                                <div className="spec-card">
                                    <span className="spec-val">10K+</span>
                                    <span className="spec-lab">Students</span>
                                </div>
                                <div className="spec-card">
                                    <span className="spec-val">999+</span>
                                    <span className="spec-lab">Partners</span>
                                </div>
                                <div className="spec-card highlight">
                                    <span className="spec-val">8+</span>
                                    <span className="spec-lab">Live Projects</span>
                                </div>
                            </div>

                            <div className="forge-cta-wrapper">
                                <button className="liquid-btn">
                                    <span>Request Call Back</span>
                                    <div className="liquid"></div>
                                </button>
                                <div className="verification-pill">
                                    <span className="pill-dot"></span>
                                    Industry Verified Curriculum
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="forge-visual-wrapper">
                        <div className="image-frame-container">
                            <div className="tech-frame">
                                <div className="frame-corner top-left"></div>
                                <div className="frame-corner top-right"></div>
                                <div className="frame-corner bottom-left"></div>
                                <div className="frame-corner bottom-right"></div>
                                <div className="scanning-line"></div>
                                <img src={getAssetUrl(course.img)} alt={course.title} className="forge-img-v2" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Commented out section divider deleted for cleanliness */}
            </section>
            {/* Course Banner */}
            <section className="course-banner">
                <div className="banner-left">
                    <div className="rating">
                        <span className="rating-value">4.5 <span className="str">★★★★★</span></span>
                        <span className="reviews">{reviews.length > 0 ? `${reviews.length + 2300} Reviews` : '2000+ Reviews'}</span>
                    </div>
                    <h1>Best {course.title} Training</h1>
                    <ul className="key-points">
                        <li><img className="tick" src={getAssetUrl('/images/correcticon.webp')} alt="Tick" /> Build complete solutions</li>
                        <li><img className="tick" src={getAssetUrl('/images/correcticon.webp')} alt="Tick" /> Master core technologies</li>
                        <li><img className="tick" src={getAssetUrl('/images/correcticon.webp')} alt="Tick" /> Learn industry practices</li>
                        <li><img className="tick" src={getAssetUrl('/images/correcticon.webp')} alt="Tick" /> Develop professional portfolios</li>
                        <li><img className="tick" src={getAssetUrl('/images/correcticon.webp')} alt="Tick" /> 100% Placement Assistance</li>
                    </ul>
                    <Link to="/contact" className="enroll-btn">
                        <span>Enroll Now</span>
                        <div className="liquid"></div>
                    </Link>
                </div>

                <div className="banner-center">
                    <img src={getAssetUrl(course.img)} alt={course.title} />
                </div>

                <div className="banner-right">
                    <h2>Connect with Our Experts</h2>
                    <form className="syllabus-form">
                        <label htmlFor="name">Name <span className="redstar">*</span></label>
                        <input type="text" id="name" placeholder="Enter your full name" required />

                        <label htmlFor="email">Email <span className="redstar">*</span></label>
                        <input type="email" id="email" placeholder="Enter your email address" required />

                        <label htmlFor="mobile">Mobile No <span className="redstar">*</span></label>
                        <input type="tel" id="mobile" placeholder="Enter your mobile number" required />

                        <label htmlFor="course">Course <span className="redstar">*</span></label>
                        <select id="course" required defaultValue={course.title}>
                            <option value={course.title}>{course.title}</option>
                            {coursesData.filter(c => c.title !== course.title).map((c, i) => (
                                <option key={i} value={c.title}>{c.title}</option>
                            ))}
                        </select>

                        <button type="submit" className="download-btn">
                            <span>Submit</span>
                            <div className="liquid"></div>
                        </button>
                    </form>
                </div>
            </section>

            <section className="advantage-section quantum-interface" ref={sectionRef}>
                <div className="quantum-grid-bg"></div>
                <div className="quantum-scanner-beam"></div>

                <div className="section-header-v4 scroll-reveal">
                    <div className="quantum-tag">
                        <span className="pulse-dot"></span>
                        ADVANTAGE ANALYTICS v4.0
                    </div>
                    <h2 className="quantum-title">The Gyantrix <span className="glitch-text" data-text="Advantage">Advantages</span></h2>
                    <p className="quantum-subtitle">Deploying a hyper-structured ecosystem for elite technical evolution.</p>
                </div>

                <div className="quantum-grid-layout">
                    {[
                        { icon: "fas fa-broadcast-tower", img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", title: "Synapse Hub", desc: "Real-time interactive neuro-learning environment." },
                        { icon: "fas fa-layer-group", img: "https://cdn-icons-png.flaticon.com/512/4359/4359738.png", title: "Architect Roadmap", desc: "Precision-engineered curriculum for technical dominance." },
                        { icon: "fas fa-users-viewfinder", img: "https://cdn-icons-png.flaticon.com/512/3845/3845815.png", title: "Global Nexus", desc: "Ultra-high value network of industry commanders." },
                        { icon: "fas fa-microchip", img: "https://cdn-icons-png.flaticon.com/512/2082/2082405.png", title: "Forge Projects", desc: "Industrial-grade project deployment with 24/7 support." },
                        { icon: "fas fa-vial-circle-check", img: "https://cdn-icons-png.flaticon.com/512/4320/4320350.png", title: "Stress Labs", desc: "High-pressure technical assessment & simulation." },
                        { icon: "fas fa-award", img: "https://cdn-icons-png.flaticon.com/512/1904/1904425.png", title: "Verified Elite", desc: "Globally accredited credentials for the top 1%." }
                    ].map((item, index) => (
                        <div key={index} className="quantum-card-wrapper scroll-reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="quantum-card">
                                <div className="card-body-v4">
                                    <div className="icon-quantum-wrap">
                                        {item.img ? (
                                            <img src={item.img} alt={item.title} className="quantum-logo-img" />
                                        ) : (
                                            <i className={item.icon}></i>
                                        )}
                                        <div className="icon-ripple"></div>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>

                                <div className="quantum-glare"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* The Curriculum Nexus Hub */}
            {modules.length > 0 && (
                <section className="curriculum-nexus">
                    <div className="nexus-grid-bg"></div>
                    <div className="nexus-orb nexus-orb-1"></div>
                    <div className="nexus-orb nexus-orb-2"></div>

                    <div className="nexus-header">
                        <div className="nexus-badge">SYSTEMS ARCHITECTURE v3.0</div>
                        <h2>The <span className="gradient-text">Curriculum Nexus</span></h2>
                        <p>An interactive, multi-dimensional learning experience engineered for rapid industry scaling.</p>
                    </div>

                    <div className="nexus-container">
                        {/* Nexus Navigation Side-Bar (Horizontal on mobile) */}
                        <div className="nexus-tabs">
                            {modules.map((module, index) => (
                                <button
                                    key={index}
                                    className={`nexus-tab-item ${activeModule === index ? 'active' : ''}`}
                                    onMouseEnter={() => toggleModule(index)}
                                >
                                    <span className="tab-id">0{index + 1}</span>
                                    <span className="tab-title">{module.title}</span>
                                    <div className="tab-active-bar"></div>
                                </button>
                            ))}
                        </div>

                        {/* Nexus Content Deck - Keeps height 'Medium' and constant */}
                        <div className="nexus-deck">
                            <div className="deck-card">
                                <div className="deck-card-header">
                                    <div className="module-phase">PHASE_{activeModule + 1} // INITIALIZED</div>
                                    <div className="module-tag-glow">{modules[activeModule].tag}</div>
                                </div>

                                <div className="deck-card-body">
                                    <h3>{modules[activeModule].title}</h3>
                                    <p>{modules[activeModule].content}</p>

                                    <div className="nexus-deliverables">
                                        <div className="deliv-item">
                                            <i className="fas fa-layer-group"></i>
                                            <div>
                                                <strong>Core Architecture</strong>
                                                <span>Theoretical Grounding</span>
                                            </div>
                                        </div>
                                        <div className="deliv-item">
                                            <i className="fas fa-vial"></i>
                                            <div>
                                                <strong>Practical Lab</strong>
                                                <span>Hands-on Implementation</span>
                                            </div>
                                        </div>
                                        <div className="deliv-item">
                                            <i className="fas fa-shield-alt"></i>
                                            <div>
                                                <strong>Industry Validation</strong>
                                                <span>Final Sync & Review</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="deck-card-footer">
                                    <div className="footer-stats">
                                        <span><i className="fas fa-clock"></i> 40+ HOURS</span>
                                        <span><i className="fas fa-tasks"></i> 3 PROJECTS</span>
                                    </div>
                                    <button className="nexus-download-btn">
                                        <i className="fas fa-file-code"></i> DOWNLOAD PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Key Highlights */}
            <section className="career-highlights">
                <h2>Key Highlights in {course.title} Course</h2>
                <p className="high-p">Empowering Your Career with Every Feature</p>
                <div className="career-highlight-grid">
                    {(course.highlights || [
                        { title: "Worldwide Placements", icon: "https://cdn-icons-png.flaticon.com/512/2640/2640822.png" },
                        { title: "80% Practical Training", icon: "https://cdn-icons-png.flaticon.com/512/3233/3233514.png" },
                        { title: "Global Certifications", icon: "https://cdn.simpleicons.org/coursera" },
                        { title: "Integrated Internship", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png" },
                        { title: "Personalised Career Coach", icon: "https://cdn-icons-png.flaticon.com/512/10547/10547540.png" },
                        { title: "Instant Doubt Solving", icon: "https://cdn-icons-png.flaticon.com/512/9408/9408175.png" },
                        { title: "Alumni Network", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
                        { title: "Multi-Domain Interviews", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135729.png" },
                        { title: "Profile Building Session", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png" },
                        { title: "Job Assistance", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" }
                    ]).map((highlight, index) => (
                        <div key={index} className="career-card">
                            <div className="card-glass-effect"></div>
                            <img className="career-img" src={highlight.icon} alt={highlight.title} />
                            <p className="careerp">{highlight.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools & Technologies */}
            {tools.length > 0 && (
                <section className="tools-section">
                    <h2>Tools & Technologies You’ll Master in {course.title} Course</h2>
                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <div key={index} className="tool-card" title={tool.name}>
                                <img src={tool.img} alt={tool.name} />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Certifications */}
            <section className="certifications">
                <h2>Globally Recognized Certifications</h2>
                <div className="cert-buttons">
                    <button className={`cert-btn ${activeCert === 'gyantrix' ? 'active' : ''}`} onClick={() => setActiveCert('gyantrix')}>
                        <span>GYANTRIX CERTIFICATION</span>
                        <div className="liquid"></div>
                    </button>
                    <button className={`cert-btn ${activeCert === 'intern' ? 'active' : ''}`} onClick={() => setActiveCert('intern')}>
                        <span>INTERNSHIP CERTIFICATION</span>
                        <div className="liquid"></div>
                    </button>
                    <button className={`cert-btn ${activeCert === 'module' ? 'active' : ''}`} onClick={() => setActiveCert('module')}>
                        <span>MODULE-WISE CERTIFICATION</span>
                        <div className="liquid"></div>
                    </button>
                </div>
                <div className="cert-container">
                    <div className="cert-text">
                        <h3>
                            {activeCert === 'gyantrix' && `Master Certification in ${course.title}`}
                            {activeCert === 'intern' && "Internship Certification in Cloud and AI"}
                            {activeCert === 'module' && "Earn Module-Wise Certifications on Your Path to Mastery"}
                        </h3>
                        <p>
                            {activeCert === 'gyantrix' && `Receive the ${course.title} Certification validating your end-to-end development capabilities. Earn progress badges and demonstrate your expertise to potential employers.`}
                            {activeCert === 'intern' && "Gain real-world experience through an industry-recognized internship, validating your hands-on skills and expertise in cloud computing and artificial intelligence."}
                            {activeCert === 'module' && "Earn a recognized certificate after completing each module, showcasing your progress and skill mastery step by step throughout the program."}
                        </p>
                        <Link to="/contact" className="cert-btn-cta">
                            <span>Inquire Now →</span>
                            <div className="liquid"></div>
                        </Link>
                    </div>
                    <div className="cert-image">
                        {activeCert === 'gyantrix' && (
                            <img src={getAssetUrl('/assets/gyantrixCertification.jpeg')} alt="Gyantrix Certificate" />
                        )}
                        {activeCert === 'intern' && (
                            <img src={getAssetUrl('/assets/internshipCertification.jpeg')} alt="Internship Certificate" />
                        )}
                        {activeCert === 'module' && (
                            <img src={getAssetUrl('/assets/moduleWiseCertification.jpeg')} alt="Module Certificate" />
                        )}
                    </div>
                </div>
            </section>

            {/* Learning Journey */}
            <section className="jrny">
                <div className="jrny-text">
                    <h2>Transform Your Career with Most Trusted Institute</h2>
                    <p>
                        {course.category?.includes('it') ?
                            "Step into the world of end-to-end development and innovation. At our institute, you don't just code — you craft complete digital solutions." :
                            `Master the core principles of ${course.title} and drive innovation in your field. Our IIT-inspired curriculum ensures you're ready for elite professional roles.`
                        }
                    </p>
                    <ul>
                        {course.category?.includes('it') ? (
                            <>
                                <li>Master front-end, back-end, and database technologies with real-world projects</li>
                                <li>Gain expertise in modern frameworks and cloud deployment</li>
                                <li>Build a strong developer portfolio and become industry-ready for top IT roles</li>
                            </>
                        ) : (
                            <>
                                <li>Gain specialized expertise with industry-validated curriculum</li>
                                <li>Work on real-world case studies and industrial-grade projects</li>
                                <li>Accelerate your career with 100% placement assistance and expert mentoring</li>
                            </>
                        )}
                    </ul>
                    <Link to="/contact" className="contact-btn">
                        <span>Contact Us</span>
                        <div className="liquid"></div>
                    </Link>
                </div>
                <div className="jrny-img">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" alt="Professional Education" />
                </div>
            </section>

            {/* Student Placements - Generic for now */}
            <section className="stu-placement">
                <div className="place-container">
                    <div className="place-left">
                        <h1>Our Students Got Placed!</h1>
                        <p>Here are some of our brilliant students who have secured positions at leading companies across India, showcasing their dedication and the quality training they received.</p>
                        <img src={getAssetUrl('/images/man.png')} alt="Student Success" />
                    </div>
                    <div className="place-right">
                        {[1, 2, 3].map((col) => (
                            <div key={col} className="scroll-col">
                                {placementStudents.map((student, idx) => (
                                    <div key={idx} className="place-card">
                                        <img src={student.img} alt={student.name} />
                                        <div className="place-card-content">
                                            <h3>{student.name}</h3>
                                            <p>{student.company}</p>
                                        </div>
                                    </div>
                                ))}
                                {/* Duplicate for infinite scroll */}
                                {placementStudents.map((student, idx) => (
                                    <div key={`dup-${idx}`} className="place-card">
                                        <img src={student.img} alt={student.name} />
                                        <div className="place-card-content">
                                            <h3>{student.name}</h3>
                                            <p>{student.company}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Student Reviews */}
            {reviews.length > 0 && (
                <section className="reviews-section">
                    <h2>{course.title} – Student Reviews</h2>
                    <div className="review-summary">
                        <div className="summary-left">
                            <h1>4.5</h1>
                            <div className="stars">★★★★★</div>
                            <p>Course Rating</p>
                        </div>
                    </div>

                    <div className="reviews-content-wrapper">
                        <div className="chat-box-container">
                            <div className="chat-header">
                                <div className="chat-header-left">
                                    <span className="online-dot"></span>
                                    <div>
                                        <h4>Student Feedback</h4>
                                        {/* <span>Online</span> */}
                                    </div>
                                </div>
                                <div className="chat-header-right">⋮</div>
                            </div>
                            <div className="chat-area">
                                <div className="reviews-marquee">
                                    {/* Original List */}
                                    {reviews.map((review, index) => (
                                        <div key={index} className="review-chat-bubble">
                                            <div className="bubble-header">
                                                <img src={review.img} alt={review.name} />
                                                <div className="bubble-info">
                                                    <h4>{review.name}</h4>
                                                    <span>{review.role}</span>
                                                </div>
                                            </div>
                                            <p>{review.review}</p>
                                            <span className="time-stamp">Just now</span>
                                        </div>
                                    ))}
                                    {/* Duplicate List for Seamless Scroll if less than 10 reviews maybe? or just always duplicate for marquee */}
                                    {reviews.map((review, index) => (
                                        <div key={`dup-${index}`} className="review-chat-bubble">
                                            <div className="bubble-header">
                                                <img src={review.img} alt={review.name} />
                                                <div className="bubble-info">
                                                    <h4>{review.name}</h4>
                                                    <span>{review.role}</span>
                                                </div>
                                            </div>
                                            <p>{review.review}</p>
                                            <span className="time-stamp">Just now</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="review-submit-section">
                            <h3>Write a Review</h3>
                            <form onSubmit={handleReviewSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={newReview.name}
                                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Your Role (e.g. Student)"
                                        value={newReview.role}
                                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        placeholder="Share your experience..."
                                        value={newReview.review}
                                        onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit">
                                    <span>Submit Review</span>
                                    <div className="liquid"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {faqs.length > 0 && (
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                                <button className="faq-question" onClick={() => toggleFaq(index)}>
                                    {faq.question}
                                </button>
                                {activeFaq === index && (
                                    <div className="faq-answer">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div >
    );
};

export default CourseDetail;
