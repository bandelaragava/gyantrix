import React, { useState } from 'react';
import './InterviewQuestions.css';
import interviewImg from '../assets/interviewq&a.webp';

const InterviewQuestions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: "Tell me about yourself.",
            answer: "Start with your educational background, key skills, relevant experiences, and end with what you are looking for in your career."
        },
        {
            question: "What are your strengths and weaknesses?",
            answer: "Mention strengths relevant to the job role and a weakness that you are actively improving, showing self-awareness and growth mindset."
        },
        {
            question: "Why do you want to work with our company?",
            answer: "Research the company values, culture, and work. Highlight alignment with your goals and enthusiasm for contributing."
        },
        {
            question: "How do you handle pressure and stress?",
            answer: "Explain techniques you use such as prioritization, time management, and maintaining a positive attitude."
        },
        {
            question: "Describe a challenging situation and how you resolved it.",
            answer: "Use the STAR method (Situation, Task, Action, Result) to clearly demonstrate your problem-solving skills."
        }
    ];

    return (
        <section className="interview-section">
            <div className="interview-container">
                {/* Left Column: Questions */}
                <div className="questions-column">
                    <div className="questions-header">
                        <h2>General Interview Questions</h2>
                        <p>Prepare yourself for interviews with commonly asked general questions by recruiters.</p>
                    </div>

                    <div className="questions-list">
                        {questions.map((item, index) => (
                            <div
                                key={index}
                                className={`iq-item ${activeIndex === index ? 'active' : ''}`}
                            >
                                <button
                                    className="iq-question"
                                    onClick={() => toggleQuestion(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    {item.question}
                                </button>
                                <div className="iq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="q-a-img">
                    <img src={interviewImg} alt="Interview Preparation" />
                </div>
            </div>
        </section>
    );
};

export default InterviewQuestions;
