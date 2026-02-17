import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { getAssetUrl } from '../utils/assets';
import { handleFormSubmit } from '../utils/leadForm';
import CourseTrending from '../components/CourseTrending';
import FeaturesSection from '../components/FeaturesSection';
import CareerServices from '../components/CareerServices';

const Home = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Building Next Generation AI and Tech Professionals</h1>
                    <h3>India’s Leading and <span className="highlight">Trusted IT Training</span></h3>
                    <p>
                        Empowering learners with classroom and online training, in collaboration with top global organizations. Gain hands-on experience, real-world skills, and industry exposure with
                    </p>
                    <p id="com_name">IBM, Microsoft, Infosys, Meta, AWS, Amazon, Google, Wipro, YouTube, Oracle, TCS, and Deloitte.</p>

                    <div className="company-logos">
                        <img src={getAssetUrl("/images/IBM.png")} alt="IBM" />
                        <img src={getAssetUrl("/images/micro.webp")} alt="Microsoft" />
                        <img src={getAssetUrl("/images/infosys_logo.png")} alt="Infosys" />
                        <img src={getAssetUrl("/images/Meta.png")} alt="Meta" />
                        <img src={getAssetUrl("/images/AWS.png")} alt="AWS" />
                        <img src={getAssetUrl("/images/Amazon.png")} alt="Amazon" />
                        <img src={getAssetUrl("/images/goggle.png")} alt="Goggle" />
                        <img src={getAssetUrl("/images/wipro.png")} alt="Wipro" />
                        <img src={getAssetUrl("/images/youtube.png")} alt="Youtube" />
                    </div>

                    <p>
                        Unlock your potential through world-class courses, insightful blogs, exciting hackathons, and a vibrant community of tech enthusiasts.
                    </p>

                    <div className="course-buttons">
                        <Link to="/courses/artificialintelligence" className="btn blue">Artificial Intelligence</Link>
                        <Link to="/courses/fullstack" className="btn orange">Web Developer</Link>
                        <Link to="/courses/medicalCoding" className="btn red">Medical Coding</Link>
                        <Link to="/courses/geneticeng" className="btn sky">Genetic Engineering</Link>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="orbit outer-orbit">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                        <img src="https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png" alt="JS" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                        <img src={getAssetUrl("/images/c-icon.png")} alt="c" />
                        <img src={getAssetUrl("/images/rprogramming.jpeg")} alt="RProgramming" />
                    </div>

                    <div className="orbit inner-orbit">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png" alt="Node.js" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                        <img src={getAssetUrl("/images/goL.png")} alt="Go" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                        <img src="https://static.vecteezy.com/system/resources/previews/043/987/991/non_2x/sql-3d-icon-png.png" alt="SQL" />
                    </div>

                    <div className="center">
                        <img src={getAssetUrl("/images/hero11.png")} alt="Center Logo" />
                    </div>
                </div>

                <div className="stats">
                    <div className="stat-box">
                        <h2>5000+</h2>
                        <p>Learners</p>
                    </div>
                    <div className="stat-box">
                        <h2>100%</h2>
                        <p>Success Rate</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact">
                <div className="form-section">
                    <h3>Let’s Level up your career together!</h3>
                    <form className="lead-table" onSubmit={(e) => handleFormSubmit(e, 'home')}>
                        <label htmlFor="name">Name<span className="star">*</span>:</label>
                        <input type="text" id="home-name" name="name" required />

                        <label htmlFor="number">Mobile<span className="star">*</span>:</label>
                        <input type="tel" id="home-number" name="mobileNumber" required />

                        <label htmlFor="email">Email<span className="star">*</span>:</label>
                        <input type="email" id="home-email" name="email" required />

                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="infosection">
                    <p className="pp"><span className="highlightbtn">Gain real-world experience with guidance from industry experts.</span></p>
                    <p>Powered by an <span className="hgbtn">AI-Enabled LMS,</span> we’re empowering the next generation of</p>
                    <div className="course-slider">
                        <div className="course-list">
                            <p>Artificial Intelligence</p>
                            <p>Full Stack Developer</p>
                            <p>Data Analyst</p>
                            <p>Data Science</p>
                            <p>Business Analyst</p>
                            <p>Medical Coding</p>
                            <p>Medical Scribing</p>
                            <p>Genetic Engineering</p>
                            <p>Pharmacovigilance</p>
                            <p>Product Management</p>
                            <p>Digital Marketing</p>
                            <p>Human Resources</p>
                            <p>Nano Science & Technology</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="acrdt">
                <p>We are Collaborated & Accredited by</p>
                <div className="logo-slider">
                    <div className="logo-track">
                        <div className="logos"><img src={getAssetUrl("/images/nsdclogo.jpg")} alt="NSDC" /></div>
                        <div className="logos"><img src={getAssetUrl("/images/skillindia.jpeg")} alt="Skill India" /></div>
                        <div className="logos"><img src={getAssetUrl("/images/MCA.png")} alt="MCA" /></div>
                        <div id="msme" className="logos"><img src={getAssetUrl("/images/msme.png")} alt="MSME" /></div>
                        <div className="logos"><img src={getAssetUrl("/images/ISO.jpeg")} alt="ISO" /></div>
                        <div className="logos"><img src={getAssetUrl("/images/nasscom1.png")} alt="NASSCOM" /></div>
                        <div className="logos"><img src={getAssetUrl("/images/nsdclogo.jpg")} alt="NSDC" /></div>
                        <div className="logos"><img src={getAssetUrl("/images/skillindia.jpeg")} alt="Skill India" /></div>
                        <div className="logos"><img src={getAssetUrl("/images/MCA.png")} alt="MCA" /></div>
                        <div className="logos"><img src={getAssetUrl("/images/msme.png")} alt="MSME" /></div>
                        <div className="logos"><img src={getAssetUrl("/images/ISO.jpeg")} alt="ISO" /></div>
                        <div className="logos"><img src={getAssetUrl("/images/nasscom1.png")} alt="NASSCOM" /></div>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <FeaturesSection />

            <section className="offer">
                <h2>WHAT WE OFFER</h2>
                <div className="offer-grid">
                    <div className="offer-card">Live & Recorded</div>
                    <div className="offer-card">Real Projects</div>
                    <div className="offer-card">AI Based LMS</div>
                    <div className="offer-card">Mentor Access</div>
                    <div className="offer-card">Career Support</div>
                </div>
            </section>

            {/* Trending Section */}
            <CourseTrending initialCategory="trending" showFilters={true} />

            {/* Partners section */}
            <section className="partners">
                <div className="partners-heading">
                    <h3>Trusted by 500+ Enterprises</h3>
                    <p>Empowering 500+ enterprises to accelerate growth & innovation by building future-ready AI teams.</p>
                </div>
                <div className="partners-main">
                    <div className="partners-content">
                        <p>Gyantrix Academy learners are recognized for their excellence in Full Stack Development, Data Science & Analytics with AI, DevOps with AWS, Software Testing, Digital Marketing, and Investment Banking.</p>
                        <p>Top organizations trust our graduates for their hands-on expertise and job readiness.</p>
                    </div>
                    <div className="partners-logos">
                        <div className="logo-row left-scroll">
                            <div className="logo-track">
                                {['IBM.png', 'Wiprologo1.jpg', 'infosys_logo.png', 'amazon.png', 'genpact.jpg', 'accenture.webp', 'Intel.png'].map(img => (
                                    <img key={img} src={getAssetUrl(`/images/${img}`)} alt={img} />
                                ))}
                                {['IBM.png', 'Wiprologo1.jpg', 'infosys_logo.png', 'amazon.png', 'genpact.jpg', 'accenture.webp', 'Intel.png'].map(img => (
                                    <img key={`dup-${img}`} src={getAssetUrl(`/images/${img}`)} alt={img} />
                                ))}
                            </div>
                        </div>
                        <div className="logo-row right-scroll">
                            <div className="logo-track">
                                {['publicis-sapient.png', 'wns.jpg', 'fractal.png', 'clubmahindra.png', 'ABInBev.png', 'TVS.png', 'americanexpress.png'].map(img => (
                                    <img key={img} src={getAssetUrl(`/images/${img}`)} alt={img} />
                                ))}
                                {['publicis-sapient.png', 'wns.jpg', 'fractal.png', 'clubmahindra.png', 'ABInBev.png', 'TVS.png', 'americanexpress.png'].map(img => (
                                    <img key={`dup-${img}`} src={getAssetUrl(`/images/${img}`)} alt={img} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="why-choose">
                <h3>Why Learners Choose Gyantrix</h3>
                <div className="why-grid">
                    {[
                        { img: "doubtclear.jpg", title: "Instant Clarity, Lasting Growth", p: "Clear your doubts instantly and move forward with the clarity, confidence, and skills essential for career advancement." },
                        { img: "careergrowth.webp", title: "Turn Challenges into Triumphs", p: "Embrace the right approach, transforming every challenge into a powerful opportunity to build clarity, confidence, and accelerate your career growth." },
                        { img: "interview.jpeg", title: "Master the Interview, Secure Your Future", p: "Master interview techniques with expert training—build confidence, refine your answers, and secure the career you've always envisioned." },
                        { img: "certificate.jpg", title: "Globally Recognized, Credibly Certified", p: "Earn globally recognized certifications that validate your expertise, boost your credibility, and unlock doors to international career opportunities." },
                        { img: "dcfd.png", title: "Expert Guidance, Your Path to Confidence", p: "Get your doubts cleared instantly with expert guidance, transforming confusion into clarity and boosting your confidence to succeed." },
                        { img: "profile.png", title: "Build a Profile That Commands Attention", p: "Develop a powerful professional profile—designed to impress recruiters, highlight your unique strengths, and unlock unparalleled career opportunities." }
                    ].map((item, i) => (
                        <div key={i} className="why-card">
                            <img src={getAssetUrl(`/images/${item.img}`)} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.p}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <div className="content">
                    <p className="intro">
                        Transforming Your Potential into Expertise At <b>Gyantrix</b>, we’re dedicated to helping you grow into a skilled
                        professional. With guidance from industry experts, practical learning opportunities, and cutting-edge resources,
                        we empower you to reach your goals and excel in your career.
                    </p>
                    <h3>Skills Today, Success Tomorrow</h3>
                    <div className="skills-body">
                        <div className="features-container">
                            <div className="features left">
                                {[
                                    { img: "3135715.png", b: "Free", p: "Career Guidance" },
                                    { img: "3135768.png", b: "Globally", p: "Approved Curriculum" },
                                    { img: "3135755.png", b: "Dedicated", p: "Student Dashboard" },
                                    { img: "3135780.png", b: "Classroom", p: " & Online Trainings" },
                                    { img: "image.png", b: "Classroom", p: "Recordings", isLocal: true },
                                ].map((f, i) => (
                                    <div key={i} className="featuree">
                                        <img src={f.isLocal ? getAssetUrl(`/images/${f.img}`) : `https://cdn-icons-png.flaticon.com/512/3135/${f.img}`} alt="" />
                                        <div className="text"><b>{f.b}</b><p>{f.p}</p></div>
                                    </div>
                                ))}
                            </div>
                            <div className="features right">
                                {[
                                    { img: "3135752.png", b: "Course", p: "Materials" },
                                    { img: "3135743.png", b: "Module", p: "Based Assessments" },
                                    { img: "3135758.png", b: "Hands", p: "On Projects" },
                                    { img: "3135738.png", b: "Internship", p: "Opportunity" },
                                    { img: "3135762.png", b: "100%", p: "Job Assistance" },
                                ].map((f, i) => (
                                    <div key={i} className="featuree">
                                        <img src={`https://cdn-icons-png.flaticon.com/512/3135/${f.img}`} alt="" />
                                        <div className="text"><b>{f.b}</b><p>{f.p}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="divider">
                            <span className="dot"></span>
                            <span className="line"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="form-box">
                            <form className="lead-table" onSubmit={(e) => handleFormSubmit(e, 'skillsSection')}>
                                <label htmlFor="skill-name">Name<span className="star">*</span>:</label>
                                <input type="text" id="skill-name" name="name" required />
                                <label htmlFor="skill-number">Mobile Number<span className="star">*</span>:</label>
                                <input type="tel" id="skill-number" name="mobileNumber" required />
                                <label htmlFor="skill-email">Email<span className="star">*</span>:</label>
                                <input type="email" id="skill-email" name="email" required />
                                <label>Message</label>
                                <textarea rows="3" name="message"></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="journey-section">
                <h2>Turn Your Learning Into a Career That You’re Proud Of</h2>
                <div className="labels">
                    <span className="start">Start <span className="line">as a Student.</span></span>
                </div>
                <div className="journey-container">
                    <svg className="journey-path" viewBox="0 0 1000 400" preserveAspectRatio="none">
                        <path
                            id="curvePath"
                            d="M50 300 Q100 100 250 300 Q350 500 450 300 Q650 100 750 300 Q850 500 950 300"
                            fill="transparent"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeDasharray="5 8"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="journey">
                        {[
                            { title: "Career Guidance by Mentors", p: "Get one-on-one guidance from experts to identify your goals and choose the right learning path.", pos: "top", num: "01" },
                            { title: "Industry-Focused Learning", p: "Develop practical skills through project-based sessions designed to match real-world industry needs.", pos: "bottom", num: "02" },
                            { title: "Portfolio & Profile Building", p: "Create a professional portfolio that highlights your achievements and technical strengths effectively.", pos: "top", num: "03" },
                            { title: "Final Evaluation Exam", p: "Evaluate your performance through practical and theory assessments to measure your learning outcomes.", pos: "bottom", num: "04" },
                            { title: "Global Certification", p: "Earn globally recognized certifications to validate your expertise and enhance your professional profile.", pos: "top", num: "05" },
                            { title: "Internship & Placement", p: "Apply your skills in real-world internships and step into the industry as a confident professional.", pos: "bottom", num: "06" }
                        ].map((step, i) => (
                            <div key={i} className={`step ${step.pos}`}>
                                <h3>{step.num}</h3>
                                <h4>{step.title}</h4>
                                <p>{step.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="labels">
                    <span className="end">End <span className="line">like a Professional.</span></span>
                </div>
            </section>

            {/* Career Services Section */}
            <CareerServices />

            {/* FAQ Section */}
            <section className="faq-section home-faq">
                <h2>Frequently Asked Questions</h2>
                <p>Got more questions? Feel free to contact us for more information.</p>
                <Link to="/contact">Contact Us</Link>
                <div className="faq-content">
                    <div className="faq-column">
                        {[
                            { id: "1-1", q: "Can employees attend sessions from different locations?", a: "Yes, all our courses are offered in flexible online modes, allowing employees to attend sessions remotely from any location worldwide." },
                            { id: "1-2", q: "Do you provide placement or career support?", a: "We provide comprehensive career support, including resume building, interview preparation, and access to our network of hiring partners." },
                            { id: "1-3", q: "How does Gyantrix Academy measure training effectiveness?", a: "Effectiveness is measured through regular assessments, project completion, feedback surveys, and tracking post-training performance metrics for corporate clients." },
                            { id: "1-4", q: "What companies or industries do you cater to?", a: "We cater to diverse sectors including IT, Finance, Healthcare, E-commerce, and Manufacturing, providing customized training for various job roles." },
                            { id: "1-5", q: "How do we enroll or request a corporate training program?", a: "You can contact our Corporate Training team via the 'Contact Us' button or fill out the inquiry form on our website to start the enrollment process." },
                            { id: "1-6", q: "Are these certifications valid for government or overseas jobs?", a: "Our industry-recognized certifications are highly valued globally. While specific government requirements vary, they significantly support applications for both domestic and overseas roles." },
                            { id: "1-7", q: "What certifications will I receive after completing the program?", a: "You will receive a program completion certificate from Gyantrix, in addition to preparation support for external vendor certifications (e.g., AWS, Microsoft, Cisco)." },
                            { id: "1-8", q: "What training modes are available in Gyantrix Academy?", a: "We offer online live classes, self-paced learning modules, and dedicated corporate on-site or virtual bootcamps." }
                        ].map((item) => (
                            <div key={item.id} className="faq-item">
                                <input type="checkbox" id={`faq-${item.id}`} className="faq-toggle" checked={openFaq === item.id} onChange={() => setOpenFaq(openFaq === item.id ? null : item.id)} />
                                <label htmlFor={`faq-${item.id}`} className="faq-question">{item.q}</label>
                                <div className="faq-answer"><p>{item.a}</p></div>
                            </div>
                        ))}
                    </div>
                    <div className="faq-column">
                        {[
                            { id: "2-1", q: "What kind of training programs does Gyantrix Academy provide?", a: "We offer programs in Data Science, Cloud Computing, Cybersecurity, Digital Marketing, and various other industry-aligned professional skills." },
                            { id: "2-2", q: "Can training be customized for our organization?", a: "Absolutely. We specialize in tailoring curriculum content, duration, and delivery mode to meet the specific requirements and goals of your organization." },
                            { id: "2-3", q: "Do you provide certification after training?", a: "Yes, participants receive an industry-recognized certification from Gyantrix Academy upon successful completion of the course and final project/exam." },
                            { id: "2-4", q: "How are trainers selected at Gyantrix Academy?", a: "Our trainers are industry veterans with extensive experience, selected through a rigorous process that ensures both deep domain knowledge and teaching proficiency." },
                            { id: "2-5", q: "Do you provide internship opportunity with MNCs and IT companies?", a: "We facilitate internship opportunities and project-based learning through our partnerships, helping candidates gain relevant work experience." },
                            { id: "2-6", q: "How do these certifications benefit my career?", a: "The certifications enhance your profile credibility, demonstrate specialized skills to recruiters, and significantly boost your chances of securing higher-paying jobs." },
                            { id: "2-7", q: "Is 100% placement assistance guaranteed?", a: "While we cannot guarantee 100% job placement, we provide dedicated, continuous placement support and interview opportunities until a candidate is successfully placed." }
                        ].map((item) => (
                            <div key={item.id} className="faq-item">
                                <input type="checkbox" id={`faq-${item.id}`} className="faq-toggle" checked={openFaq === item.id} onChange={() => setOpenFaq(openFaq === item.id ? null : item.id)} />
                                <label htmlFor={`faq-${item.id}`} className="faq-question">{item.q}</label>
                                <div className="faq-answer"><p>{item.a}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>What Students Say</h2>
                <div className="testimonials-grid">
                    <div className="slider row1">
                        <div className="track">
                            {[
                                { p: "Gyantrix transformed the way I think about learning. The mentors not only teach — they guide, motivate, and prepare you for real-world challenges.", name: "Rakesh Choudhary" },
                                { p: "The Data Science program at Gyantrix helped me gain job-ready skills and land my first internship in less than three months. Highly recommended!", name: "Ananya Gupta" },
                                { p: "The training here is industry-focused. Every concept is taught with practical use cases, making me feel ready for any professional challenge.", name: "Karthik Goud" },
                                { p: "I enrolled in the Full Stack program, and it completely changed my career path. The support team was with me from day one to placement day.", name: "Swati Nair" },
                                { p: "From resume building to interview preparation — Gyantrix covers it all. I’m now working with one of the top MNCs, and it all started here.", name: "Amit Malhotra" }
                            ].map((t, i) => (
                                <div key={i} className="crd">
                                    <p>{t.p}</p>
                                    <div className="stars">★★★★★</div>
                                    <h4>— {t.name}</h4>
                                </div>
                            ))}
                            {/* Duplicate for loop */}
                            {[
                                { p: "Gyantrix transformed the way I think about learning. The mentors not only teach — they guide, motivate, and prepare you for real-world challenges.", name: "Rakesh Choudhary" },
                                { p: "The Data Science program at Gyantrix helped me gain job-ready skills and land my first internship in less than three months. Highly recommended!", name: "Ananya Gupta" }
                            ].map((t, i) => (
                                <div key={`dup-${i}`} className="crd">
                                    <p>{t.p}</p>
                                    <div className="stars">★★★★★</div>
                                    <h4>— {t.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="slider row2">
                        <div className="track">
                            {[
                                { p: "From resume building to interview preparation — Gyantrix covers it all. I’m now working with one of the top MNCs, and it all started here.", name: "Amit Malhotra" },
                                { p: "I enrolled in the Full Stack program, and it completely changed my career path. The support team was with me from day one to placement day.", name: "Swati Nair" },
                                { p: "The training here is industry-focused. Every concept is taught with practical use cases, making me feel ready for any professional challenge.", name: "Karthik Goud" },
                                { p: "The Data Science program at Gyantrix helped me gain job-ready skills and land my first internship in less than three months. Highly recommended!", name: "Ananya Gupta" },
                                { p: "Gyantrix transformed the way I think about learning. The mentors not only teach — they guide, motivate, and prepare you for real-world challenges.", name: "Rakesh Choudhary" }
                            ].map((t, i) => (
                                <div key={i} className="crd">
                                    <p>{t.p}</p>
                                    <div className="stars">★★★★★</div>
                                    <h4>— {t.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <h3 className="feature-title">Featured In</h3>
                <div className="feature-logos">
                    {['thehindunewspaper.png', 'TV5.jpg', 'hmtv.png', 'eenadu.jpg', 'v6.jpeg', 'hansindia.jpg', 'andhrajyothy.png', 'adhabhyd.png', 'dailyhunt.jpeg', 'lokal.jpg', 'teluguprabha.jpeg', 'manatg.jpeg', 'tnews.jpg', 'metroudayam.jpeg', 'TheDaily.jpeg'].map(img => (
                        <img key={img} src={getAssetUrl(`/images/${img}`)} alt={img} />
                    ))}
                </div>
            </section>

            {/* Connect Section */}
            <section className="connectplan">
                <h1>Let's Connect and Plan Your Career Ahead</h1>
                <p>Our team of expert career guide ninjas are ready to help you choose the right path with clarity and confidence.</p>
                <div className="connectform-container">
                    <div className="connectform">
                        <form className="lead-table" onSubmit={(e) => handleFormSubmit(e, 'footerSection')}>
                            <label htmlFor="conn-name">Your Name<span className="star">*</span>:</label>
                            <input type="text" id="conn-name" name="name" required />
                            <label htmlFor="conn-email">Email Address<span className="star">*</span>:</label>
                            <input type="email" id="conn-email" name="email" required />
                            <label htmlFor="conn-number">Mobile Number<span className="star">*</span>:</label>
                            <input type="tel" id="conn-number" name="mobileNumber" required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="connectform">
                        <img src={getAssetUrl("/images/contact.png")} alt="Career Guidance" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
