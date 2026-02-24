import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getAssetUrl } from '../utils/assets';
import './StudentPrograms.css';

const StudentPrograms = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get('type') || 'popular';

    const categories = [
        { id: 'popular', label: 'All Programs' },
        { id: 'btech', label: 'B.Tech' },
        { id: 'pharma', label: 'Pharmacy' },
        { id: 'degree', label: 'Degree' },
        { id: 'mba', label: 'MBA' },
        { id: 'mca', label: 'MCA' },
        { id: 'agriculture', label: 'Agriculture' }
    ];

    const courses = [
        { id: 'ai-data-analyst', img: '/images/AI.png', title: 'Artificial Intelligence & Data Analyst', description: 'Artificial Intelligence is the development of computer systems that can perform tasks requiring human-like intelligence.', price: '₹12,999', categories: ['mca', 'btech', 'degree', 'popular'], link: '/courses/artificialintelligence' },
        { id: 'full-stack-dev', img: '/images/fullstackdev.png', title: 'Full Stack Development', description: 'Master both front-end and back-end skills to build complete, scalable web applications from scratch.', price: '₹9,999', categories: ['mca', 'btech', 'degree', 'popular'], link: '/courses/fullstack' },
        { id: 'ds-analytics-ai', img: '/images/datascience.png', title: 'Data Science & Analytics With AI', description: 'Transform data into intelligence and insights through the power of Artificial Intelligence and Analytics.', price: '₹9,999', categories: ['mca', 'btech', 'degree', 'popular'], link: '/courses/ds-analytics-ai' },
        { id: 'business-analyst-1', img: '/images/businessanalyst1.jpg', title: 'Business Analyst', description: 'A Business Analyst identifies business needs and recommends effective solutions.', price: '₹9,999', categories: ['degree', 'popular'], link: '/courses/businessanalyst' },
        { id: 'data-analyst', img: '/images/dataanalyst.png', title: 'Data Analyst', description: 'A Data Analyst interprets and transforms data into actionable insights for decision-making.', price: '₹9,999', categories: ['btech', 'degree', 'popular'], link: '/courses/dataanalyst' },
        { id: 'medical-coding', img: '/images/medicalcoding.jpg', title: 'Medical Coding', description: 'Medical Coding converts medical information into standard codes for documentation and billing.', price: '₹9,999', categories: ['pharma', 'btech', 'degree', 'popular'], link: '/courses/medicalCoding' },
        { id: 'medical-scribing', img: '/images/medicalscribing.jpg', title: 'Medical Scribing', description: 'Medical Scribing involves documenting patient encounters and clinical information on behalf of healthcare providers.', price: '₹9,999', categories: ['pharma', 'btech', 'degree', 'popular'], link: '/courses/medicalscribing' },
        { id: 'genetic-eng', img: '/images/geneticeng.jpg', title: 'Genetic Engineering', description: "Genetic Engineering involves modifying an organism's DNA to achieve desired traits or outcomes.", price: '₹9,999', categories: ['pharma', 'degree', 'popular'], link: '/courses/geneticeng' },
        { id: 'pharmacovigilance', img: '/images/pharmaco-vigilance.jpg', title: 'Pharmacovigilance', description: 'Pharmacovigilance is the science of monitoring and ensuring the safety of medicines.', price: '₹9,999', categories: ['pharma', 'btech', 'degree', 'popular'], link: '/courses/pharmacovigilance' },
        { id: 'digital-marketing', img: '/images/digitalmarketing1.png', title: 'Digital Marketing', description: 'Empower brands to reach, engage, and grow through data-driven digital marketing strategies.', price: '₹9,999', categories: ['mba', 'degree', 'popular'], link: '/courses/digitalmarketing' },
        { id: 'product-management', img: '/images/productmanagement.jpg', title: 'Product Management', description: 'Product Management involves planning, developing, and overseeing a product to meet market needs and business goals.', price: '₹9,999', categories: ['degree', 'popular'], link: '/courses/productmanagement' },
        { id: 'human-resources', img: '/images/humanresourse.jpg', title: 'Human Resources', description: 'Human Resources manages recruitment, employee relations, and workforce development within an organization.', price: '₹9,999', categories: ['mba', 'degree', 'popular'], link: '/courses/humanresourse' },
        { id: 'nano-science', img: '/images/nanoscience&technology.jpg', title: 'Nano Science & Technology', description: 'Nano Science & Technology studies and manipulates materials at the atomic and molecular scale for advanced applications.', price: '₹9,999', categories: ['agriculture', 'degree', 'popular'], link: '/courses/nanoscience' },
        { id: 'genetic-eng-agri', img: '/images/geneticeng.jpg', title: 'Genetic Engineering (Agriculture)', description: 'Genetic Engineering is the science of altering an organism\'s genes to achieve specific traits or outcomes.', price: '₹9,999', categories: ['agriculture', 'degree', 'popular'], link: '/courses/geneticeng' }
    ];

    const setActiveCategory = (id) => {
        if (id === 'popular') {
            setSearchParams({}, { replace: true });
        } else {
            setSearchParams({ type: id }, { replace: true });
        }
    };

    const filteredCourses = activeCategory === 'popular'
        ? courses
        : courses.filter(course => course.categories.includes(activeCategory));

    return (
        <section className="programs-section">
            <h2>Perfect Programs <span>For You To Explore</span></h2>

            <div className="program-tabs">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        <span>{category.label}</span>
                        <div className="liquid"></div>
                    </button>
                ))}
            </div>

            <div className="courses-container">
                {filteredCourses.map(course => (
                    <div key={course.id} className="course-card">
                        <img src={getAssetUrl(course.img)} alt={course.title} />
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <span>{course.price}</span>

                        <div className="card-buttons">
                            <Link to={course.link} className="know-more-btn btn">
                                <span>Know More</span>
                                <div className="liquid"></div>
                            </Link>
                            <Link to="/contact" className="payment-btn btn">
                                <span>Enroll</span>
                                <div className="liquid"></div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StudentPrograms;
