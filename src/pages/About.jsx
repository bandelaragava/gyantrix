import React from 'react';

const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp,gif}', { eager: true });
const getAssetUrl = (name) => {
    if (!name || name.startsWith('http')) return name;
    const fileName = name.split('/').pop();
    const path = Object.keys(images).find(key => key.endsWith(fileName));
    return path ? images[path].default : name;
};

const About = () => {
    return (
        <section className="about-section" id="about">
            <h3 className="about-title">About Gyantrix</h3>
            <h2><span className="highlight">Gyantrix</span> - Making Job Cracking Easier!</h2>

            <div className="about-container">
                <div className="about-image">
                    <img src={getAssetUrl("/images/teamcollab.jpeg")} alt="Gyantrix Team Collaboration" />
                </div>

                <div className="about-content">
                    <h3>OUR MISSION :</h3>
                    <p>
                        To bridge the gap between learning and real-world application by offering
                        cutting-edge training that transforms students into skilled, confident, and
                        job-ready professionals ready to thrive in the tech industry.
                    </p>

                    <h3>OUR VISION :</h3>
                    <p>
                        To create an inclusive digital learning ecosystem where every learner—
                        regardless of background—can access quality education, develop
                        industry-relevant skills, and build a successful career in technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
