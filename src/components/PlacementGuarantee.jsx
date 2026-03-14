import React from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { getAssetUrl } from '../utils/assets';
import './PlacementGuarantee.css';

const PlacementGuarantee = () => {
    // Filter the specific courses for the placement section
    const placementCourses = coursesData.filter(course =>
        course.category.includes('placement')
    ).slice(0, 3);

    return (
        <section className="placement-section">
            <h2>Career Launch Programs</h2>
            <div className="placement-grid">
                {placementCourses.map((course, index) => (
                    <div key={index} className="placement-card">
                        <img src={getAssetUrl(course.img)} alt={course.title} />
                        <div className="content">
                            <h3>{course.title}</h3>
                            <div className="buttons">
                                <Link to={course.link} className="btn btn-outline">
                                    <span>View Programme</span>
                                    <div className="liquid"></div>
                                </Link>
                                <Link to="/contact" className="btn btn-fill">
                                    <span>Schedule Appointment</span>
                                    <div className="liquid"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/placement-guarantee" className="btn view-all-btn">
                <span>View All</span>
                <div className="liquid"></div>
            </Link>
        </section>
    );
};

export default PlacementGuarantee;
