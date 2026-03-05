import React from 'react';
import './LearnHub.css';

const LearnHub = () => {
    const hubSections = [
        {
            title: "Personal Dashboard (Control Center)",
            icon: "fas fa-tachometer-alt",
            desc: "The nerve center of your learning journey. Designed for clarity and efficiency.",
            features: [
                "Enrolled courses at a glance",
                "Real-time progress percentage",
                "List of pending lessons",
                "Upcoming deadlines & schedules",
                "Easy access to earned certificates"
            ],
            examples: [
                "Coursera: Clear deadlines & progress tracking",
                "Udemy: 'My Learning' with resume buttons"
            ],
            note: "A poor hub forces learners to search; a great one guides them."
        },
        {
            title: "Structured Course Player",
            icon: "fas fa-play-circle",
            desc: "The immersive classroom where real learning happens, optimized for focus.",
            features: [
                "High-performance video player",
                "Downloadable PDFs & Resources",
                "Module-wise structured lesson list",
                "Interactive 'Mark as Complete' system",
                "Smart 'Resume where you left off' logic"
            ],
            examples: [
                "LinkedIn Learning: Intelligent auto-resume",
                "Khan Academy: Small, structured learning units"
            ],
            note: "Amateur platforms use embeds; professionals build structure."
        },
        {
            title: "Progress Tracking & Analytics",
            icon: "fas fa-chart-line",
            desc: "Data-driven insights to keep you accountable and motivated throughout.",
            features: [
                "Visual completion percentages",
                "Detailed quiz score history",
                "Total time spent learning metrics",
                "Skill level progression mapping"
            ],
            examples: [
                "Coursera: Graded performance analytics",
                "Duolingo: Daily streaks & skill leveling"
            ],
            note: "If you can't measure it, you won't stay motivated."
        },
        {
            title: "Assessments & Quizzes",
            icon: "fas fa-tasks",
            desc: "Validate your knowledge with rigorous testing and instant feedback loops.",
            features: [
                "Dynamic MCQs & Quizzes",
                "Integrated Coding Challenges",
                "Secure Assignment upload portals",
                "Instant feedback and corrections"
            ],
            examples: [
                "Udacity: Project-based assessments",
                "Coursera: Peer-reviewed benchmarks"
            ],
            note: "Learning without testing is just browsing."
        },
        {
            title: "Community & Discussion",
            icon: "fas fa-users",
            desc: "Collaborate and clear doubts in a vibrant ecosystem of peers and mentors.",
            features: [
                "Threaded discussion forums",
                "Dedicated 'Doubt' resolution cells",
                "Direct Instructor Q&A access",
                "Real-time peer interaction"
            ],
            examples: [
                "Stack Overflow style tech discussions",
                "Reddit-style topic-based threads"
            ],
            note: "Isolation leads to dropouts; community builds mastery."
        },
        {
            title: "Certificates & Achievements",
            icon: "fas fa-award",
            desc: "Showcase your expertise with industry-recognized digital credentials.",
            features: [
                "Instant downloadable certificates",
                "One-click 'Share to LinkedIn' feature",
                "Unlockable achievement badges",
                "Verification portal for employers"
            ],
            examples: [
                "Coursera: Professional shareable certs",
                "Google Certificates: High industry value"
            ],
            note: "Recognition is the fuel for course completion."
        },
        {
            title: "Profile & Settings",
            icon: "fas fa-user-cog",
            desc: "Manage your professional identity and subscription status seamlessly.",
            features: [
                "Comprehensive Profile management",
                "Secure password & security settings",
                "Transparent Payment & Billing history",
                "Flexible Subscription management"
            ],
            note: "Essential controls to reduce support tickets by 80%."
        }
    ];

    return (
        <div className="learn-hub-container">
            <div className="hub-header">
                <span className="badge-premium">Next-Gen Learning</span>
                <h1>Gyantrix <span>Learn Hub</span></h1>
                <p>
                    Experience an enterprise-grade Learning Management System (LMS) designed to power the next generation of industry leaders. Our hub combines structure, analytics, and community to ensure 100% career readiness.
                </p>
            </div>

            <div className="hub-grid">
                {hubSections.map((section, index) => (
                    <div key={index} className="hub-card">
                        <div className="card-icon">
                            <i className={section.icon}></i>
                        </div>
                        <h2>{section.title}</h2>
                        <p className="desc">{section.desc}</p>

                        <ul className="feature-list">
                            {section.features.map((f, i) => (
                                <li key={i}><i className="fas fa-check-circle"></i> {f}</li>
                            ))}
                        </ul>

                        {section.examples && (
                            <div className="example-box">
                                <h4>Industry Standards:</h4>
                                {section.examples.map((ex, i) => (
                                    <div key={i} className="example-text">{ex}</div>
                                ))}
                            </div>
                        )}

                        <div className="danger-note">
                            <i className="fas fa-info-circle"></i>
                            <span>{section.note}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearnHub;
