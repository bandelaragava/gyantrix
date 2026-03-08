import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleMouseMove = (e) => {
            const items = document.querySelectorAll('.grid-item');
            items.forEach(item => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                item.style.setProperty('--px', `${x}px`);
                item.style.setProperty('--py', `${y}px`);

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const tiltX = (centerY - y) / 25;
                const tiltY = (x - centerX) / 25;
                item.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
        };

        const handleMouseLeave = () => {
            const items = document.querySelectorAll('.grid-item');
            items.forEach(item => {
                item.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
        window.addEventListener('mousemove', handleMouseMove);

        const grid = document.querySelector('.architect-grid');
        if (grid) grid.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
        };
    }, []);

    return (
        <main className="about-masterpiece" ref={containerRef}>
            <div className="grid-overlay"></div>
            <div className="beam-effect"></div>

            <div className="container">
                {/* HERO PORTAL */}
                <section className="hero-portal scroll-reveal">
                    <div className="badge-outline">Gyantrix Intelligence</div>
                    <h1 className="headline-xl">
                        CRAFTING <span className="text-stroke">ELITE</span><br />
                        PROFESSIONALS
                    </h1>
                    <p className="hero-sub">
                        We are more than a training platform. We are a decentralized architecture
                        dedicated to the evolution of technical human capital.
                    </p>
                </section>

                {/* MODULAR ARCHITECT GRID */}
                <section className="architect-grid scroll-reveal">
                    {/* Vision */}
                    <div className="grid-item area-vision">
                        <span className="item-label">Strategic Vision</span>
                        <h3>Universal <br />Intelligence</h3>
                        <p>To architect a borderless ecosystem where elite-tier education is a fundamental human right, empowering the next wave of innovators.</p>
                    </div>

                    {/* Stats */}
                    <div className="stats-wrapper">
                        <div className="grid-item area-stats-1 stat-box">
                            <div className="big-num">95%</div>
                            <div className="big-label">Career Success</div>
                        </div>

                        <div className="grid-item area-stats-2 stat-box">
                            <div className="big-num">10K+</div>
                            <div className="big-label">Global Alumni</div>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="grid-item area-img img-visual-box">
                        <img src="/about_hero_new.png" alt="Cyber Architecture" />
                        <div className="visual-overlay"></div>
                    </div>

                    {/* Mission */}
                    <div className="grid-item area-mission">
                        <span className="item-label">The Mission</span>
                        <h3>Bridging The Void</h3>
                        <p>Bridging the radical gap between theoretical knowledge and industrial reality through hyper-pragmatic, project-based mentorship. We build professionals who are Day-One ready for any challenge.</p>

                        <div style={{ marginTop: '2rem', display: 'flex', gap: '3rem' }}>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.5rem' }}>5Y+</h4>
                                <span style={{ color: 'var(--primary)', fontSize: '0.7rem' }}>HISTORY</span>
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.5rem' }}>1:1</h4>
                                <span style={{ color: 'var(--primary)', fontSize: '0.7rem' }}>ACCESS</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE NEURAL TIMELINE */}
                <section className="timeline-section">
                    <div className="neural-line"></div>

                    {/* ERA 1: 2019 */}
                    <div className="timeline-era scroll-reveal">
                        <div className="era-side">
                            <div className="era-year">2019</div>
                            <div className="era-card">
                                <span className="holograph-tag">The Genesis</span>
                                <h2 className="era-title">The Ignition</h2>
                                <p className="era-desc">
                                    Gyantrix emerged as a response to the static nature of technical training.
                                    We started with a core team of tech Leads determined to rewrite the rules of education.
                                </p>
                            </div>
                        </div>
                        <div className="era-node"></div>
                        <div className="era-visual">
                            <img src="/about_hero_new.png" alt="The Ignition" />
                        </div>
                    </div>

                    {/* ERA 2: 2026 */}
                    <div className="timeline-era era-reverse scroll-reveal">
                        <div className="era-side">
                            <div className="era-year">2026</div>
                            <div className="era-card">
                                <span className="holograph-tag">The Expansion</span>
                                <h2 className="era-title">Global Nexus</h2>
                                <p className="era-desc">
                                    Today, we stand as a global nexus connecting thousands of learners to 500+ corporate partners.
                                    Our architecture has evolved, but our core mission remains unchanged.
                                </p>
                            </div>
                        </div>
                        <div className="era-node"></div>
                        <div className="era-visual">
                            <img src="/global_nexus.png" alt="Global Nexus" />
                        </div>
                    </div>
                </section>
            </div>

            <div className="film-grain"></div>
        </main>
    );
};

export default About;
