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

    return (
        <div className="blog-page">
            <canvas id="sparkleCanvas" ref={canvasRef}></canvas>
            <div className="coming-soon-container">
                <h1>🚀 We’re Coming Soon!</h1>
                <p>Our <strong>Blog</strong> is under construction. Stay tuned for exciting updates, tips, and insights!</p>
            </div>
        </div>
    );
};

export default Blog;
