import React, { useEffect, useRef } from 'react';
import './Blog.css';

const Blog = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.parentElement.clientWidth;
        let height = canvas.parentElement.clientHeight;
        let particles = [];
        let maxParticles = 500;
        let animationFrameId;

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                width = canvas.parentElement.clientWidth;
                height = canvas.parentElement.clientHeight;
                canvas.width = width;
                canvas.height = height;
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Particle Class
        class Particle {
            constructor(x, y, isBurst = false) {
                this.x = x;
                this.y = y;
                this.radius = Math.random() * 1.8 + 0.6;
                this.alpha = 1;
                this.friction = 0.97;
                this.isBurst = isBurst;

                // Random Color
                const colors = ["255,255,255", "173,216,230", "255,223,0"];
                this.color = colors[Math.floor(Math.random() * colors.length)];

                // Velocity
                if (isBurst) {
                    this.velocity = {
                        x: (Math.random() - 0.5) * (Math.random() * 12 + 4),
                        y: (Math.random() - 0.5) * (Math.random() * 12 + 4)
                    };
                    this.decayRate = 0.03;
                    this.radius = Math.random() * 0.8 + 0.2;
                } else {
                    this.velocity = {
                        x: (Math.random() - 0.5) * 0.6,
                        y: (Math.random() - 0.5) * 0.6
                    };
                    this.decayRate = 0;
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
                ctx.fill();
                ctx.restore();
            }

            update() {
                if (this.isBurst) {
                    this.velocity.x *= this.friction;
                    this.velocity.y *= this.friction;
                    this.alpha -= this.decayRate;
                }
                this.x += this.velocity.x;
                this.y += this.velocity.y;

                if (!this.isBurst) {
                    if (this.x < 0) this.x = width;
                    if (this.x > width) this.x = 0;
                    if (this.y < 0) this.y = height;
                    if (this.y > height) this.y = 0;
                }
            }
        }

        // Background Sparkles
        function createBackgroundSparkles(count) {
            for (let i = 0; i < count; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                particles.push(new Particle(x, y, false));
            }
        }

        // Burst Sparkles
        function createSparkleBurst(x, y, count) {
            for (let i = 0; i < count; i++) {
                if (particles.length >= maxParticles) particles.shift();
                particles.push(new Particle(x, y, true));
            }
        }

        // Animation Loop
        function animate() {
            animationFrameId = requestAnimationFrame(animate);

            ctx.fillStyle = "#05051A";
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update();
                p.draw();

                if (p.isBurst && p.alpha <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            if (particles.filter(p => !p.isBurst).length < 50) {
                createBackgroundSparkles(10);
            }
        }

        // Initialize
        createBackgroundSparkles(120);
        animate();

        // Mouse Interaction
        let isMouseDown = false;
        let lastX = 0;
        let lastY = 0;

        const handleMouseDown = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            isMouseDown = true;
            createSparkleBurst(x, y, 60);
        };

        const handleMouseUp = () => {
            isMouseDown = false;
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (isMouseDown || Math.random() < 0.35) {
                createSparkleBurst(x, y, isMouseDown ? 35 : 18);
            }

            const dx = x - lastX;
            const dy = y - lastY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 12 && isMouseDown) {
                createSparkleBurst(x, y, 25);
            }

            lastX = x;
            lastY = y;
        };

        const handleTouchStart = (e) => {
            // Prevent default to avoid scrolling while interacting, if desired
            // e.preventDefault(); 
            const rect = canvas.getBoundingClientRect();
            const t = e.touches[0];
            const x = t.clientX - rect.left;
            const y = t.clientY - rect.top;
            createSparkleBurst(x, y, 50);
        };

        const handleTouchMove = (e) => {
            // e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const t = e.touches[0];
            const x = t.clientX - rect.left;
            const y = t.clientY - rect.top;
            createSparkleBurst(x, y, 18);
        };


        canvas.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("touchstart", handleTouchStart);
        canvas.addEventListener("touchmove", handleTouchMove);


        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("touchstart", handleTouchStart);
            canvas.removeEventListener("touchmove", handleTouchMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const blogPosts = [
        {
            title: "New Courses Launched",
            description: "Discover what new programs were introduced in the last 4 months.",
            details: [
                {
                    subtitle: "AI Python Program Launched",
                    text: "Focus: Python, Machine Learning basics, automation tools."
                },
                {
                    subtitle: "Data Analytics Course Introduced",
                    text: "Covers Excel, SQL, Power BI, and real-world datasets."
                }
            ],
            icon: "🚀"
        },
        {
            title: "Student Projects Completed",
            description: "Practical work is the core of active learning. Take a look at the projects our students have delivered.",
            details: [
                {
                    subtitle: "Sales Data Analysis",
                    text: "Students built interactive Power BI dashboards for sales data analysis."
                },
                {
                    subtitle: "Process Automation",
                    text: "Python students created automation scripts for advanced data processing."
                }
            ],
            icon: "⚙️"
        },
        {
            title: "Student Job Placements",
            description: "Securing a bright future for our students is our ultimate goal. Here are the latest placement updates.",
            details: [
                {
                    subtitle: "25+ Students Placed",
                    text: "Successfully placed as Data Analysts and Python Developers."
                },
                {
                    subtitle: "Top MNC Hirings",
                    text: "Students hired by leading companies like Infosys, TCS, and Accenture."
                }
            ],
            icon: "💼"
        },
        {
            title: "Certifications Achieved",
            description: "Validating skills with recognized certifications to increase credibility.",
            details: [
                {
                    subtitle: "Salesforce Administrator",
                    text: "Students successfully earned their Salesforce Administrator Certification."
                },
                {
                    subtitle: "Power BI Certification",
                    text: "Data Analytics students completed comprehensive Power BI certification training."
                }
            ],
            icon: "📜"
        },
        {
            title: "Workshops & Events Conducted",
            description: "Keeping the academy active and engaging through continuous extracurriculars.",
            details: [
                {
                    subtitle: "Career Guidance Workshop",
                    text: "Conducted an extensive career guidance workshop customized for fresh graduates."
                },
                {
                    subtitle: "Live Industry Webinar",
                    text: "Hosted a highly-attended live industry webinar discussing Data Analytics careers."
                }
            ],
            icon: "🎤"
        },
        {
            title: "Industry Collaborations",
            description: "Partnering with leading tech companies and trainers to provide real-world insights.",
            details: [
                {
                    subtitle: "Project Mentoring",
                    text: "Collaboration with industry experts for top-tier, real-time project mentoring."
                },
                {
                    subtitle: "Guest Sessions",
                    text: "Interactive guest sessions hosted by working Data Analysts and software Developers."
                }
            ],
            icon: "🤝"
        },
        {
            title: "Student Success Stories",
            description: "Real results that attract new learners. Read about student transformations.",
            details: [
                {
                    subtitle: "Non-IT to Data Analyst",
                    text: "A student successfully transitioned from a non-IT background to a high-paying Data Analyst role."
                },
                {
                    subtitle: "Fast-Track Placement",
                    text: "A graduate secured a Python Developer job within just 3 months of intensive training."
                }
            ],
            icon: "🌟"
        }
    ];

    return (
        <div className="blog-page">
            <canvas id="sparkleCanvas" ref={canvasRef}></canvas>

            <div className="blog-container">
                <div className="blog-header">
                    <h1>Updates & Insights</h1>
                    <p>The latest news, success stories, and updates from Gyantrix.</p>
                </div>

                <div className="blog-timeline">
                    {blogPosts.map((post, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-dot">
                                <span className="timeline-icon">{post.icon}</span>
                            </div>
                            <div className="timeline-content blog-glass-card">
                                <h2 className="timeline-title">{post.title}</h2>
                                <p className="timeline-intro">{post.description}</p>

                                <div className="timeline-details">
                                    {post.details.map((detail, idx) => (
                                        <div key={idx} className="timeline-example">
                                            <div className="example-notch"></div>
                                            <div className="example-text">
                                                <h4>{detail.subtitle}</h4>
                                                <p>{detail.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
