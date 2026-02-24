import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CareerServices = () => {
    const galleryRef = useRef(null);
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slides Data - matching reference website exactly
    const slidesData = [
        {
            img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=80",
            title: "Technical Seminars",
            p: "Learn from top industry experts on emerging technologies and innovation trends.",
        },
        {
            img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
            title: "Mock Interviews",
            p: "Gain real interview experience and build confidence through expert feedback.",
        },
        {
            img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
            title: "CRT & Job Ready Skills",
            p: "Master aptitude, reasoning, and communication skills to become job ready.",
        },
        {
            img: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=900&q=80",
            title: "Placement Assistance",
            p: "Exclusive access to career mentors and job placement support from experts.",
        },
        {
            img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
            title: "Internship Opportunities",
            p: "Hands-on internship programs to gain real-world experience and exposure.",
        },
    ];

    /* ---------------- Scroll Detection Logic ---------------- */
    useEffect(() => {
        const container = galleryRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollPosition = container.scrollTop;
            const slideHeight = container.clientHeight;
            const index = Math.round(scrollPosition / slideHeight);

            if (index !== currentSlide && index >= 0 && index < slidesData.length) {
                setCurrentSlide(index);
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [currentSlide, slidesData.length]);

    /* ---------------- Section-Wide Scroll Handler ---------------- */
    useEffect(() => {
        const section = sectionRef.current;
        const gallery = galleryRef.current;

        if (!section || !gallery) return;

        const handleWheel = (e) => {
            const { scrollTop, scrollHeight, clientHeight } = gallery;
            const delta = e.deltaY;
            const isScrollingDown = delta > 0;
            const isScrollingUp = delta < 0;

            const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
            const isAtTop = scrollTop <= 0;

            // Allow default window scroll if:
            // 1. We are scrolling DOWN and are already at the BOTTOM
            // 2. We are scrolling UP and are already at the TOP
            if ((isScrollingDown && isAtBottom) || (isScrollingUp && isAtTop)) {
                return;
            }

            // Otherwise, prevent default and scroll the gallery
            e.preventDefault();
            gallery.scrollBy({
                top: delta,
                behavior: 'auto'
            });
        };

        section.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            section.removeEventListener("wheel", handleWheel);
        };
    }, []);

    /* ---------------- Scroll to Slide ---------------- */
    const scrollToSlide = (index) => {
        const container = galleryRef.current;
        if (!container) return;

        const slideHeight = container.clientHeight;
        container.scrollTo({
            top: slideHeight * index,
            behavior: "smooth",
        });

        setCurrentSlide(index);
    };

    return (
        <section className="career-services" ref={sectionRef}>
            <div className="career-wrapper">
                {/* LEFT CONTENT */}
                <div className="services-info">
                    <h2>Career Services</h2>

                    <div className="scroll-headings">
                        {slidesData.map((slide, i) => (
                            <div
                                key={i}
                                className={`heading-item ${currentSlide === i ? "active-heading" : ""}`}
                                onClick={() => scrollToSlide(i)}
                            >
                                {slide.title}
                            </div>
                        ))}
                    </div>

                    <div className="dynamic-content">
                        <p key={currentSlide} className="fade-text">
                            {slidesData[currentSlide].p}
                        </p>
                    </div>
                </div>

                {/* RIGHT IMAGE SCROLL */}
                <div className="program-gallery" ref={galleryRef}>
                    {slidesData.map((slide, i) => (
                        <div
                            key={i}
                            className="image-slide"
                            data-index={i}
                        >
                            <img src={slide.img} alt={slide.title} loading={i === 0 ? "eager" : "lazy"} />

                            <div className="caption">
                                <h3>{slide.title}</h3>
                                <p>{slide.p}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Link to="/contact?source=reqForm" className="cta-btn btn">
                <span>Request Call Back</span>
                <div className="liquid"></div>
            </Link>
        </section>
    );
};

export default CareerServices;