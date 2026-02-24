import React from 'react';
import CourseTrending from '../components/CourseTrending';

const Management = () => {
    return (
        <div className="category-page">
            <CourseTrending initialCategory="management" showFilters={false} />
        </div>
    );
};

export default Management;
