import React, { useEffect, useRef } from 'react';

const SparkleCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let particles = [];
        const maxParticles = 500;
        let animationFrameId;

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor(x, y, isBurst = false) {
                this.x = x;
                this.y = y;
                this.radius = Math.random() * 1.8 + 0.6;
                this.alpha = 1;
                this.friction = 0.97;
                this.isBurst = isBurst;

                const colors = ["255,255,255", "173,216,230", "255,223,0"];
                this.color = colors[Math.floor(Math.random() * colors.length)];

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

        const createBackgroundSparkles = (count) => {
            for (let i = 0; i < count; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                particles.push(new Particle(x, y, false));
            }
        };

        const createSparkleBurst = (x, y, count) => {
            for (let i = 0; i < count; i++) {
                if (particles.length >= maxParticles) particles.shift();
                particles.push(new Particle(x, y, true));
            }
        };

        const animate = () => {
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
        };

        createBackgroundSparkles(120);
        animate();

        const handleInteraction = (e) => {
            const x = e.clientX || (e.touches && e.touches[0].clientX);
            const y = e.clientY || (e.touches && e.touches[0].clientY);
            if (x !== undefined && y !== undefined) {
                createSparkleBurst(x, y, 20);
            }
        };

        canvas.addEventListener("mousedown", handleInteraction);
        canvas.addEventListener("mousemove", (e) => {
            if (Math.random() < 0.1) handleInteraction(e);
        });
        canvas.addEventListener("touchstart", handleInteraction);
        canvas.addEventListener("touchmove", handleInteraction);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="sparkleCanvas"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                backgroundColor: '#05051A'
            }}
        />
    );
};

export default SparkleCanvas;
