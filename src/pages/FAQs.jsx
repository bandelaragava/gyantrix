import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQs = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqItems = [
        {
            column: 1,
            items: [
                { id: "1-1", q: "Can employees attend sessions from different locations?", a: "Yes, all our courses are offered in flexible online modes, allowing employees to attend sessions remotely from any location worldwide." },
                { id: "1-2", q: "Do you provide placement or career support?", a: "We provide comprehensive career support, including resume building, interview preparation, and access to our network of hiring partners." },
                { id: "1-3", q: "How does Gyantrix Academy measure training effectiveness?", a: "Effectiveness is measured through regular assessments, project completion, feedback surveys, and tracking post-training performance metrics for corporate clients." },
                { id: "1-4", q: "What companies or industries do you cater to?", a: "We cater to diverse sectors including IT, Finance, Healthcare, E-commerce, and Manufacturing, providing customized training for various job roles." },
                { id: "1-5", q: "How do we enroll or request a corporate training program?", a: "You can contact our Corporate Training team via the 'Contact Us' button or fill out the inquiry form on our website to start the enrollment process." },
                { id: "1-6", q: "Are these certifications valid for government or overseas jobs?", a: "Our industry-recognized certifications are highly valued globally. While specific government requirements vary, they significantly support applications for both domestic and overseas roles." },
                { id: "2-7", q: "What certifications will I receive after completing the program?", a: "You will receive a program completion certificate from Gyantrix, in addition to preparation support for external vendor certifications (e.g., AWS, Microsoft, Cisco)." },
                { id: "2-3", q: "What training modes are available?", a: "We offer online live classes, self-paced learning modules, and dedicated corporate on-site or virtual bootcamps." }
            ]
        },
        {
            column: 2,
            items: [
                { id: "2-1", q: "What kind of training programs does Gyantrix Academy provide?", a: "We offer programs in Data Science, Cloud Computing, Cybersecurity, Digital Marketing, and various other industry-aligned professional skills." },
                { id: "2-2", q: "Can training be customized for our organization?", a: "Absolutely. We specialize in tailoring curriculum content, duration, and delivery mode to meet the specific requirements and goals of your organization." },
                { id: "2-4", q: "Do you provide certification after training?", a: "Yes, participants receive an industry-recognized certification from Gyantrix Academy upon successful completion of the course and final project/exam." },
                { id: "2-5", q: "How are trainers selected at Gyantrix Academy?", a: "Our trainers are industry veterans with extensive experience, selected through a rigorous process that ensures both deep domain knowledge and teaching proficiency." },
                { id: "2-6", q: "Do you provide internship opportunities with MNCs and IT companies?", a: "We facilitate internship opportunities and project-based learning through our partnerships, helping candidates gain relevant work experience." },
                { id: "1-7", q: "How do these certifications benefit my career?", a: "The certifications enhance your profile credibility, demonstrate specialized skills to recruiters, and significantly boost your chances of securing higher-paying jobs." },
                { id: "1-8", q: "Is 100% placement assistance guaranteed?", a: "While we cannot guarantee 100% job placement, we provide dedicated, continuous placement support and interview opportunities until a candidate is successfully placed." }
            ]
        }
    ];

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <p>Got more questions? Feel free to contact us for more information.</p>
            <Link to="/contact" className="contact-button btn" style={{ width: 'auto', padding: '0.8rem 2.5rem' }}>
                <span>Contact Us</span>
                <div className="liquid"></div>
            </Link>

            <div className="faq-content">
                {faqItems.map((col, colIdx) => (
                    <div key={colIdx} className="faq-column">
                        {col.items.map((item) => (
                            <div key={item.id} className="faq-item">
                                <input
                                    type="checkbox"
                                    id={`faq-${item.id}`}
                                    className="faq-toggle"
                                    checked={openFaq === item.id}
                                    onChange={() => toggleFaq(item.id)}
                                />
                                <label htmlFor={`faq-${item.id}`} className="faq-question">
                                    {item.q}
                                </label>
                                <div className="faq-answer">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQs;
