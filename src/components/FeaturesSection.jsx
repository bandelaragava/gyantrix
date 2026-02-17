import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assets';

const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState('courses');

    const featureContent = {
        courses: {
            title: "Expand Your Knowledge with Our Courses",
            text1: "Gain hands-on experience in cutting-edge technologies and industry-relevant skills.",
            text2: "Our courses are designed to help learners of all levels achieve mastery and confidence.",
            linkText: "Explore Courses",
            link: "/courses",
            image: getAssetUrl("/images/coursesimage.png")
        },
        certification: {
            title: "Boost Your Career with Certifications",
            text1: "Earn globally recognized certificates that showcase your skills and expertise.",
            text2: "Certifications enhance your credibility and make you stand out to employers.",
            linkText: "Get Certified",
            link: "/certification",
            image: getAssetUrl("/images/certificationimage.png")
        },
        'live-events': {
            title: "Join Our Live Events and Webinars",
            text1: "Participate in live sessions with industry experts and gain practical insights.",
            text2: "Engage with professionals, ask questions, and learn from real-world experiences.",
            linkText: "View More",
            link: "/live-events",
            image: getAssetUrl("/images/liveeventsimg.png")
        },
        internships: {
            title: "Gain Hands-On Experience with Internships",
            text1: "Apply your skills in real-world projects through our internship programs.",
            text2: "Learn, contribute, and build a strong professional portfolio to kickstart your career.",
            linkText: "Apply Now",
            link: "/internship-form",
            image: getAssetUrl("/images/Intern.png")
        },
        careers: {
            title: "Transform Learning into Career Success – with Gyantrix",
            text1: "Accelerate your career through personalized mentorship, project-based learning, and globally recognized certification programs.",
            text2: "Gyantrix equips you with the tools, guidance, and confidence to stand out and thrive in your professional journey.",
            linkText: "Get Started",
            link: "/career-form",
            image: getAssetUrl("/images/careers.png")
        },
        projects: {
            title: "Build Real-World Projects",
            text1: "Work on projects that simulate real industry scenarios and challenges.",
            text2: "Showcase your project portfolio to employers and gain practical experience.",
            linkText: "Know More",
            link: "/project-form",
            image: getAssetUrl("/images/projectimage.png")
        },
        mentorship: {
            title: "Learn from Experienced Mentors",
            text1: "Get personalized guidance from industry professionals who know the path to success.",
            text2: "Receive career advice, feedback on projects, and mentorship to fast-track your growth.",
            linkText: "Connect Now",
            link: "/mentorship-form",
            image: getAssetUrl("/images/mentorshipimg.png")
        },
        answers: {
            title: "Get Answers to Your Questions",
            text1: "Find solutions to common queries and learn from community discussions.",
            text2: "Our Q&A platform ensures you never get stuck while learning or applying skills.",
            linkText: "Talk with Expert",
            link: "/answer-form",
            image: getAssetUrl("/images/answering.png")
        }
    };

    const featuresList = [
        { id: 'courses', icon: 'courses.png', label: 'Courses' },
        { id: 'certification', icon: 'certification.png', label: 'Certification' },
        { id: 'live-events', icon: 'live-streaming.png', label: 'Live Events' },
        { id: 'internships', icon: 'internship.png', label: 'Internships' },
        { id: 'careers', icon: 'career-path.png', label: 'Careers' },
        { id: 'projects', icon: 'projects.png', label: 'Projects' },
        { id: 'mentorship', icon: 'mentorship.png', label: 'Mentorship' },
        { id: 'answers', icon: 'answer.png', label: 'Answers' }
    ];

    return (
        <>
            <section className="featuress">
                {featuresList.map((f) => (
                    <div
                        key={f.id}
                        className={`feature-card ${activeFeature === f.id ? 'active' : ''}`}
                        onClick={() => setActiveFeature(f.id)}
                    >
                        <img src={getAssetUrl(`/images/${f.icon}`)} alt={f.label} className="feature-logo" />
                        <h4>{f.label}</h4>
                    </div>
                ))}
            </section>

            <div className="feature-content active">
                <div className="sec1">
                    <h1>{featureContent[activeFeature].title}</h1>
                    <p>{featureContent[activeFeature].text1}</p>
                    <p>{featureContent[activeFeature].text2}</p>
                    <Link to={featureContent[activeFeature].link}>{featureContent[activeFeature].linkText}</Link>
                </div>
                <div className="sec2">
                    <img src={featureContent[activeFeature].image} alt={activeFeature} />
                </div>
            </div>
        </>
    );
};

export default FeaturesSection;
