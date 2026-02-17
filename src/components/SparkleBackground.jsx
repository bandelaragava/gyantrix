import React, { useEffect, useRef } from 'react';
import './SparkleBackground.css';

const SparkleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

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
                this.radius = Math.random() * 1.5 + 0.5;
                this.alpha = 1;
                this.friction = 0.98;
                this.isBurst = isBurst;

                const colorChoice = Math.random();
                if (colorChoice < 0.4) {
                    this.color = '255, 255, 255';
                } else if (colorChoice < 0.8) {
                    this.color = '173, 216, 230';
                } else {
                    this.color = '255, 223, 0';
                }

                if (isBurst) {
                    this.velocity = {
                        x: (Math.random() - 0.5) * (Math.random() * 8 + 2),
                        y: (Math.random() - 0.5) * (Math.random() * 8 + 2)
                    };
                    this.decayRate = 0.03;
                    this.radius = Math.random() * 0.7 + 0.1;
                } else {
                    this.velocity = {
                        x: (Math.random() - 0.5) * 0.2,
                        y: (Math.random() - 0.5) * 0.2
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
                if (particles.length >= maxParticles) {
                    particles.shift();
                }
                particles.push(new Particle(x, y, true));
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.fillStyle = '#05051A';
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update();
                p.draw();

                if (p.isBurst && p.alpha <= 0) {
                    particles.splice(i, 1);
                    i--;
                }

                if (!p.isBurst) {
                    if (p.x < 0) p.x = width;
                    if (p.x > width) p.x = 0;
                    if (p.y < 0) p.y = height;
                    if (p.y > height) p.y = 0;
                }
            }

            if (particles.filter(p => !p.isBurst).length < 50) {
                createBackgroundSparkles(10);
            }
        };

        let isMouseDown = false;
        const handleMouseDown = (e) => {
            isMouseDown = true;
            createSparkleBurst(e.clientX, e.clientY, 50);
        };
        const handleMouseUp = () => isMouseDown = false;
        const handleMouseMove = (e) => {
            if (isMouseDown || Math.random() < 0.2) {
                createSparkleBurst(e.clientX, e.clientY, isMouseDown ? 25 : 10);
            }
        };
        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            createSparkleBurst(touch.clientX, touch.clientY, 50);
        };
        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            createSparkleBurst(touch.clientX, touch.clientY, 10);
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

        createBackgroundSparkles(100);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchmove', handleTouchMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="sparkleCanvas" className="sparkle-background" />;
};

export default SparkleBackground;
