import React from 'react';
import CourseTrending from '../components/CourseTrending';

const Agriculture = () => {
    return (
        <div className="category-page">
            <CourseTrending initialCategory="agriculture" showFilters={false} />
        </div>
    );
};

export default Agriculture;
