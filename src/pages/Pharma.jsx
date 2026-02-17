import React from 'react';
import CourseTrending from '../components/CourseTrending';

const Pharma = () => {
    return (
        <div className="category-page">
            <CourseTrending initialCategory="pharma" showFilters={false} />
        </div>
    );
};

export default Pharma;
