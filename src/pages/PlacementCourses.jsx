import React from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { getAssetUrl } from '../utils/assets';
import '../components/PlacementGuarantee.css';

const PlacementCourses = () => {
    // Filter ALL placement courses
    const placementCourses = coursesData.filter(course =>
        course.category.includes('placement')
    );

    return (
        <div className="placement-page" style={{ padding: '8rem 5% 4rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '700' }}>
                Placement Guarantee Courses
            </h1>
            <div className="placement-grid">
                {placementCourses.map((course, index) => (
                    <div key={index} className="placement-card">
                        <img src={getAssetUrl(course.img)} alt={course.title} />
                        <div className="content">
                            <h3>{course.title}</h3>
                            <div className="buttons">
                                <Link to={course.link} className="btn btn-outline">View Programme</Link>
                                <Link to="/contact" className="btn btn-fill">Schedule Appointment</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlacementCourses;
