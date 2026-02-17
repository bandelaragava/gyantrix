import React from 'react';
import CourseTrending from '../components/CourseTrending';

const Courses = () => {
    return (
        <div className="courses-page">
            <CourseTrending initialCategory="popular" showFilters={true} />
        </div>
    );
};

export default Courses;
