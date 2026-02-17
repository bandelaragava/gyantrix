import React from 'react';
import CourseTrending from '../components/CourseTrending';

const IT = () => {
    return (
        <div className="category-page">
            <CourseTrending initialCategory="it" showFilters={false} />
        </div>
    );
};

export default IT;
