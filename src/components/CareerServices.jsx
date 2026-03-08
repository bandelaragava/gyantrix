import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CareerServices = () => {
    const galleryRef = useRef(null);
    const sectionRef = useRef(null);
    const slideRefs = useRef([]);
    const headingsContainerRef = useRef(null);
    const headingRefs = useRef([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const currentSlideRef = useRef(0);
    const lastScrollTime = useRef(0);

    // Sync ref with state
    useEffect(() => {
        currentSlideRef.current = currentSlide;
    }, [currentSlide]);

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

    /* ---------------- Smart Scroll Interaction ---------------- */
    useEffect(() => {
        const section = sectionRef.current;
        const gallery = galleryRef.current;
        if (!section || !gallery) return;

        const handleWheel = (e) => {
            const isDesktop = window.innerWidth > 992;
            if (!isDesktop) return;

            const rect = section.getBoundingClientRect();
            const delta = e.deltaY;

            // "Centered" check: section is pinned in view
            const isCentered = Math.abs(rect.top) < 100;

            const isAtTop = currentSlideRef.current === 0;
            const isAtBottom = currentSlideRef.current === slidesData.length - 1;

            if (!isCentered) return;

            // Determine if we should capture and move one step
            const shouldCapture =
                (delta > 0 && !isAtBottom) ||
                (delta < 0 && !isAtTop);

            if (shouldCapture) {
                e.preventDefault();

                // Rate limiting to one step per 800ms
                const now = Date.now();
                if (now - lastScrollTime.current < 800) return;

                if (delta > 30 && !isAtBottom) {
                    scrollToSlide(currentSlideRef.current + 1);
                    lastScrollTime.current = now;
                } else if (delta < -30 && !isAtTop) {
                    scrollToSlide(currentSlideRef.current - 1);
                    lastScrollTime.current = now;
                }
            }
        };

        // Attach with passive: false to allow e.preventDefault()
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [slidesData.length]);

    /* ---------------- Heading Scroll Sync ---------------- */
    useEffect(() => {
        const activeHeading = headingRefs.current[currentSlide];
        const container = headingsContainerRef.current;

        if (activeHeading && container) {
            const isDesktop = window.innerWidth > 992;

            if (isDesktop) {
                // Vertical scroll for desktop
                const containerHeight = container.offsetHeight;
                const headingOffset = activeHeading.offsetTop;
                const headingHeight = activeHeading.offsetHeight;

                container.scrollTo({
                    top: headingOffset - (containerHeight / 2) + (headingHeight / 2),
                    behavior: "smooth"
                });
            } else {
                // Horizontal scroll for mobile
                const containerWidth = container.offsetWidth;
                const headingOffset = activeHeading.offsetLeft;
                const headingWidth = activeHeading.offsetWidth;

                container.scrollTo({
                    left: headingOffset - (containerWidth / 2) + (headingWidth / 2),
                    behavior: "smooth"
                });
            }
        }
    }, [currentSlide]);

    /* ---------------- Scroll Detection Logic ---------------- */
    useEffect(() => {
        const handleScroll = () => {
            const container = galleryRef.current;
            if (!container) return;

            // Check if gallery is internally scrolling (desktop) or if it's auto-height (mobile)
            const isDesktop = window.innerWidth > 992;

            if (isDesktop) {
                const scrollPosition = container.scrollTop;
                const slideHeight = container.clientHeight;
                const index = Math.round(scrollPosition / slideHeight);

                if (index !== currentSlide && index >= 0 && index < slidesData.length) {
                    setCurrentSlide(index);
                }
            } else {
                // For Mobile: Detect which card is in view based on window scroll
                const viewportCenter = window.innerHeight / 2;
                let activeIndex = 0;
                let minDistance = Infinity;

                slideRefs.current.forEach((ref, index) => {
                    if (ref) {
                        const rect = ref.getBoundingClientRect();
                        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
                        if (distance < minDistance) {
                            minDistance = distance;
                            activeIndex = index;
                        }
                    }
                });

                if (activeIndex !== currentSlide) {
                    setCurrentSlide(activeIndex);
                }
            }
        };

        const container = galleryRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentSlide, slidesData.length]);

    /* ---------------- Scroll to Slide ---------------- */
    const scrollToSlide = (index) => {
        const target = slideRefs.current[index];
        if (!target) return;

        const isDesktop = window.innerWidth > 992;

        if (isDesktop) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        } else {
            // Mobile: Scroll window to image
            const offset = 100; // Account for sticky nav/header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = target.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }

        setCurrentSlide(index);
    };

    return (
        <section className="career-services" ref={sectionRef}>
            <div className="career-wrapper">
                {/* LEFT CONTENT */}
                <div className="services-info">
                    <h2>Career Services</h2>

                    <div className="scroll-headings" ref={headingsContainerRef}>
                        {slidesData.map((slide, i) => (
                            <div
                                key={i}
                                ref={el => headingRefs.current[i] = el}
                                className={`heading-item ${currentSlide === i ? "active-heading" : ""}`}
                                onClick={() => scrollToSlide(i)}
                            >
                                {slide.title}
                            </div>
                        ))}
                    </div>

                    <div className="dynamic-content" style={{ position: 'relative', minHeight: '80px' }}>
                        {slidesData.map((slide, i) => (
                            <p
                                key={i}
                                className={`fade-text ${currentSlide === i ? "show" : ""}`}
                                style={{
                                    position: i === currentSlide ? 'relative' : 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    margin: 0,
                                    pointerEvents: i === currentSlide ? 'auto' : 'none'
                                }}
                            >
                                {slide.p}
                            </p>
                        ))}
                    </div>
                </div>

                {/* RIGHT IMAGE SCROLL */}
                <div className="program-gallery" ref={galleryRef}>
                    {slidesData.map((slide, i) => (
                        <div
                            key={i}
                            className="image-slide"
                            data-index={i}
                            ref={el => slideRefs.current[i] = el}
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
