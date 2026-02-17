import React from 'react';
import CourseTrending from '../components/CourseTrending';

const NonIT = () => {
    return (
        <div className="category-page">
            <CourseTrending initialCategory="non-it-marketing" showFilters={false} />
        </div>
    );
};

export default NonIT;
