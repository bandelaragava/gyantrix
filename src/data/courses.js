import { getAssetUrl } from '../utils/assets';

export const coursesData = [
    {
        title: "Artificial Intelligence & Data Analyst",
        category: "it popular",
        price: "₹14,999",
        img: "/images/AI.png",
        desc: "Artificial Intelligence is the development of computer systems that can perform tasks requiring human-like intelligence.",
        link: "/courses/artificialintelligence",
        isTrending2026: true,
        modules: [
            { title: 'Python Programming', tag: '#Backend', content: 'Master Python syntax, data structures, and libraries essential for AI and Data Science.' },
            { title: 'SQL & Database', tag: '#Database', content: 'Master SQL queries to extract and manage data from relational databases.' },
            { title: 'Machine Learning Fundamentals', tag: '#AI', content: 'Understand supervised and unsupervised learning algorithms like Regression, Clustering, and Decision Trees.' },
            { title: 'Power BI & Tableau', tag: '#Visualization', content: 'Create interactive dashboards and business intelligence reports.' },
            { title: 'Statistical Analysis', tag: '#Analytics', content: 'Descriptive and Inferential Statistics, Probability distributions.' },
            { title: 'AI-powered Automation', tag: '#AI', content: 'Build neural networks and deep learning models using TensorFlow and Keras.' },
            { title: 'Business Intelligence Tools', tag: '#BI', content: 'Learn to process and analyze data for actionable insights.' },
            { title: 'Capstone Project', tag: '#Project', content: 'Apply all your skills to solve a real-world business problem in a comprehensive project.' }
        ],
        tools: [
            { name: 'Python', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
            { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png' },
            { name: 'Pandas', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png' },
            { name: 'NumPy', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1200px-NumPy_logo_2020.svg.png' },
            { name: 'Scikit-Learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
            { name: 'Keras', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png' },
            { name: 'PyTorch', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
            { name: 'Tableau', img: 'https://cdn.simpleicons.org/tableau/E97627' },
            { name: 'Power BI', img: 'https://cdn.simpleicons.org/powerbi/F2C811' },
            { name: 'SQL', img: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'Jupyter', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png' }
        ],
        reviews: [
            { name: "Arun Kumar", role: "Data Analyst", review: "The AI & Data Science course specific curriculum helped me switch from a non-tech role.", img: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg" },
            { name: "Sneha Reddy", role: "ML Engineer", review: "Hands-on projects in Machine Learning were incredibly useful for my interviews.", img: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg" }
        ],
        faqs: [
            { question: "What are the career opportunities after completing this course?", answer: "Graduates can apply for roles like AI Engineer, Data Scientist, ML Engineer, and Business Intelligence Analyst across various industries." },
            { question: "Is this course suitable for non-technical backgrounds?", answer: "Yes, we start with Python and SQL basics, making it ideal for anyone looking to transition into the AI field." },
            { question: "Will I get hands-on experience?", answer: "Absolutely. The course includes multiple real-world projects and a final Capstone project to build your portfolio." },
            { question: "Do you provide placement assistance?", answer: "Yes, we offer 100% placement support, including resume building and mock interviews with industry experts." },
            { question: "What certifications will I receive?", answer: "You will receive a globally recognized certification from Gyantrix Academy upon successful completion." },
            { question: "What is the duration of the course?", answer: "The course is typically 9-12 months long with flexible weekend and weekday sessions." }
        ]
    },
    {
        title: "Full Stack Development",
        category: "it popular",
        price: "₹14,999",
        img: "/images/fullstackdev.png",
        desc: "Master both front-end and back-end skills to build complete, scalable web applications from scratch.",
        link: "/courses/fullstack",
        isTrending2026: true,
        modules: [
            { title: 'Web Design (HTML/CSS)', tag: '#Frontend', content: 'Learn HTML5, CSS3, and JavaScript to build responsive and visually appealing websites.' },
            { title: 'React Mastery', tag: '#Frontend', content: 'Master ReactJS for building dynamic single-page applications with component-based design.' },
            { title: 'Backend with Node.js', tag: '#Backend', content: 'Learn Node.js and Express to build fast, scalable, and server-side applications.' },
            { title: 'Python for Backend', tag: '#Backend', content: 'Learn Python fundamentals, data structures, and OOP concepts for robust server logic.' },
            { title: 'Django Framework', tag: '#Backend', content: 'Build scalable web applications with Django and REST API integration.' },
            { title: 'Automation Testing', tag: '#Testing', content: 'Learn Selenium and automation testing tools to ensure quality assurance.' },
            { title: 'NoSQL with MongoDB', tag: '#Database', content: 'Explore NoSQL databases and document-based schema using MongoDB.' },
            { title: 'Angular Framework', tag: '#Frontend', content: 'Learn Angular framework and TypeScript for enterprise-level applications.' },
            { title: 'Cloud & DevOps', tag: '#Cloud', content: 'Understand AWS fundamentals and DevOps practices including CI/CD pipelines.' },
            { title: 'Java Backend', tag: '#Backend', content: 'Learn Java basics and OOP principles to strengthen enterprise backend skills.' }
        ],
        tools: [
            { name: 'HTML5', img: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png' },
            { name: 'CSS3', img: 'https://cdn.iconscout.com/icon/free/png-256/css3-11-1175239.png' },
            { name: 'JavaScript', img: 'https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png' },
            { name: 'React', img: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
            { name: 'Node.js', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
            { name: 'MongoDB', img: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png' },
            { name: 'Docker', img: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
            { name: 'AWS', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' }
        ],
        reviews: [
            { name: 'Swati Nair', role: 'Full Stack Developer', review: 'Gyantrix Academy completely changed my career path. The mentors are industry experts who guide you at every step.', img: 'https://xsgames.co/randomusers/assets/avatars/female/2.jpg' },
            { name: 'Karthik Goud', role: 'MERN Developer', review: 'The practical approach with real projects helped me build confidence and land a high-paying job.', img: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg' }
        ],
        faqs: [
            { question: "What is the primary focus of the Full Stack course?", answer: "We focus on end-to-end development, covering React for frontend, Node/Python/Java for backend, and MongoDB/SQL for databases." },
            { question: "Do you cover both frontend and backend?", answer: "Yes, you will master the complete MERN stack (MongoDB, Express, React, Node) along with other essential technologies." },
            { question: "Are there any projects included?", answer: "Yes, you will build 5+ real-world projects, including a fully functional e-commerce app and a social media platform." },
            { question: "What kind of job support do you offer?", answer: "We provide dedicated placement assistance, portfolio reviews, and mock technical interviews." },
            { question: "Is this course for beginners?", answer: "Yes, we start from the very basics of HTML and CSS and gradually move to advanced concepts." },
            { question: "Can I choose between Python and Java for backend?", answer: "Our curriculum includes modules for both, giving you the flexibility to specialize based on your preference." }
        ]
    },
    {
        title: "Data Science & Analytics With AI",
        category: "it",
        price: "₹14,999",
        img: "/images/datascience.png",
        desc: "Transform data into intelligence and insights through the power of Artificial Intelligence and Analytics.",
        link: "/courses/ds-analytics-ai",
        isTrending2026: true,
        modules: [
            { title: 'Intro to Data Science', tag: '#DataScience', content: 'Understanding the data science lifecycle and the role of a data scientist.' },
            { title: 'Advanced Python Programming', tag: '#Python', content: 'Master advanced Python libraries for data manipulation and analysis.' },
            { title: 'Exploratory Data Analysis (EDA)', tag: '#EDA', content: 'Techniques to clean and visualize data to find patterns and trends.' },
            { title: 'Machine Learning Algorithms', tag: '#ML', content: 'Detailed study of Regression, Classification, and Clustering algorithms.' },
            { title: 'Deep Learning & Neural Networks', tag: '#DL', content: 'Build neural networks for computer vision and NLP using Keras and PyTorch.' },
            { title: 'Big Data with Hadoop & Spark', tag: '#BigData', content: 'Handling massive datasets using distributed computing tools.' },
            { title: 'Natural Language Processing (NLP)', tag: '#AI', content: 'Text mining and sentiment analysis for unstructured data.' },
            { title: 'Generative AI & LLMs', tag: '#AI', content: 'Exploring the world of Transformers, BERT, and GPT models.' },
            { title: 'Deployment with Flask & Docker', tag: '#DevOps', content: 'Deploying your machine learning models into production.' },
            { title: 'Advanced Visualization (Tableau/Power BI)', tag: '#Visualization', content: 'Creating professional dashboards for business communication.' }
        ],
        tools: [
            { name: 'Python', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
            { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png' },
            { name: 'PyTorch', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
            { name: 'Hadoop', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hadoop_logo.svg/1200px-Hadoop_logo.svg.png' },
            { name: 'Spark', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png' }
        ],
        reviews: [
            { name: "Ananya Gupta", role: "Data Scientist", review: "The program at Gyantrix helped me gain job-ready skills and land my first internship in less than three months.", img: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg" }
        ],
        faqs: [
            { question: "Is Python mandatory for Data Science?", answer: "Python is the most popular language for Data Science due to its extensive library support, and it is a core part of our training." },
            { question: "Will I learn about Big Data?", answer: "Yes, the course includes modules on Hadoop and Spark for processing large-scale datasets." },
            { question: "What is the difference between this and the Data Analyst course?", answer: "This course is more advanced, covering Machine Learning, Deep Learning, and AI in depth." },
            { question: "Do you cover Generative AI?", answer: "Yes, we have a specialized module on Large Language Models (LLMs) and Generative AI." },
            { question: "What kind of projects will I work on?", answer: "Projects include predictive modeling, sentiment analysis, and building recommendation engines." },
            { question: "Is career guidance provided?", answer: "Yes, we have dedicated sessions for resume building, LinkedIn optimization, and placement support." }
        ]
    },
    {
        title: "Business Analyst",
        category: "non-it-marketing",
        price: "₹14,999",
        img: "/images/businessanalyst1.jpg",
        desc: "A Business Analyst identifies business needs and recommends effective solutions.",
        link: "/courses/businessanalyst",
        isTrending2026: true,
        modules: [
            { title: 'Business Analysis Fundamentals', tag: '#BA', content: 'Understanding the role, responsibilities, and key terminology of a BA.' },
            { title: 'Requirements Elicitation & Management', tag: '#Requirements', content: 'Techniques for gathering and documenting business requirements.' },
            { title: 'Software Development Life Cycle (SDLC)', tag: '#SDLC', content: 'Introduction to Waterfall, Agile, and Scrum methodologies.' },
            { title: 'Data Analysis for Business', tag: '#DataAnalysis', content: 'Using data to drive business decisions and strategy.' },
            { title: 'Process Modeling & BPMN', tag: '#BPMN', content: 'Mapping business processes using standard notation.' },
            { title: 'UML Diagrams', tag: '#Design', content: 'Creating Use Case, Sequence, and Activity diagrams for technical teams.' },
            { title: 'Agile & Scrum Framework', tag: '#Agile', content: 'Deep dive into user stories, product backlogs, and sprint planning.' },
            { title: 'Jira for Project Management', tag: '#Tools', content: 'Mastering Jira for tracking issues and managing projects.' },
            { title: 'SQL for Business Analytics', tag: '#Database', content: 'Basics of SQL for querying and reporting.' },
            { title: 'Stakeholder Management', tag: '#SoftSkills', content: 'Effective communication and negotiation with project stakeholders.' }
        ],
        tools: [
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'Jira', img: 'https://cdn.iconscout.com/icon/free/png-256/jira-1-1175159.png' },
            { name: 'SQL', img: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
            { name: 'Visio', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Microsoft_Visio_logo_%282019-present%29.svg/1200px-Microsoft_Visio_logo_%282019-present%29.svg.png' }
        ],
        reviews: [
            { name: "Ritu Singh", role: "Business Analyst", review: "The Agile and Scrum modules were incredibly practical. I learned how to manage stakeholders effectively.", img: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg" }
        ],
        faqs: [
            { question: "What is the primary role of a Business Analyst?", answer: "A BA acts as a bridge between business stakeholders and technical teams, translating business needs into technical requirements." },
            { question: "Do I need technical skills for this role?", answer: "While not strictly a technical role, basic knowledge of SQL, Jira, and SDLC is essential and covered in our course." },
            { question: "Is this course suitable for freshers?", answer: "Yes, the course is designed to take you from a beginner level to being ready for a junior BA role." },
            { question: "Will I learn how to use Jira?", answer: "Yes, Jira is a core part of our training for project management and issue tracking." },
            { question: "What industries hire Business Analysts?", answer: "BAs are hired across all major sectors including IT, Finance, Healthcare, and E-commerce." },
            { question: "Do you offer interview preparation?", answer: "Yes, we focus on behavioral and case-study based interviews common for BA positions." }
        ]
    },
    {
        title: "Data Analyst",
        category: "it",
        price: "₹14,999",
        img: "/images/dataanalyst.png",
        desc: "A Data Analyst interprets and transforms data into actionable insights for decision-making.",
        link: "/courses/dataanalyst",
        modules: [
            { title: 'Excel Mastery for Data Analysis', tag: '#Excel', content: 'Advanced functions, pivot tables, and data modeling in Excel.' },
            { title: 'SQL Fundamentals', tag: '#SQL', content: 'Basics of relational databases and querying data using SQL.' },
            { title: 'Data Cleaning & Prep with Python', tag: '#Python', content: 'Using Pandas and NumPy to clean and organize raw data.' },
            { title: 'Exploratory Data Analysis', tag: '#Analytics', content: 'Finding trends and anomalies in data using statistical methods.' },
            { title: 'Storytelling with Visualization', tag: '#DataViz', content: 'Creating compelling narratives using data visualization tools.' },
            { title: 'Power BI Fundamentals', tag: '#PowerBI', content: 'Building interactive reports and dashboards for business users.' },
            { title: 'Tableau for Professionals', tag: '#Tableau', content: 'Mastering Tableau for complex data visualization and sharing.' },
            { title: 'Statistics for Data Analytics', tag: '#Statistics', content: 'Essential statistical concepts like mean, median, correlation, and hypothesis testing.' },
            { title: 'Business Intelligence Strategy', tag: '#BI', content: 'How to turn data insights into business growth strategies.' },
            { title: 'Project: Retail Sales Analysis', tag: '#Project', content: 'Apply all tools to analyze and report on a real retail dataset.' }
        ],
        tools: [
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'SQL', img: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
            { name: 'Power BI', img: 'https://cdn.simpleicons.org/powerbi/F2C811' },
            { name: 'Tableau', img: 'https://cdn.simpleicons.org/tableau/E97627' },
            { name: 'Python', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' }
        ],
        reviews: [
            { name: "Suresh Raina", role: "Junior Data Analyst", review: "The visualization modules in Power BI and Tableau were excellent. I can now create dashboards that wow my team.", img: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg" }
        ],
        faqs: [
            { question: "What is the difference between Data Science and Data Analytics?", answer: "Data Analytics focuses more on interpreting existing data to provide insights, while Data Science involves building predictive models." },
            { question: "Do I need to be good at math?", answer: "Basic math and logical reasoning are sufficient. We cover the necessary statistical concepts during the course." },
            { question: "Which tool is more important: Power BI or Tableau?", answer: "Both are widely used in the industry. Our course covers both to make you versatile in the job market." },
            { question: "Will I learn how to clean data?", answer: "Yes, data cleaning is a critical step, and you will learn how to do it efficiently with both Excel and Python." },
            { question: "Is SQL hard to learn?", answer: "SQL is very intuitive and easy to pick up. We start from the basics and move to advanced join operations." },
            { question: "What kind of jobs can I apply for?", answer: "You can apply for roles like Junior Data Analyst, BI Analyst, and Reporting Specialist." }
        ]
    },
    {
        title: "Medical Coding",
        category: "pharma popular",
        price: "₹14,999",
        img: "/images/medicalcoding.jpg",
        desc: "Medical Coding is the process of translating healthcare diagnoses, procedures, and treatments into standardized codes for records and billing.",
        link: "/courses/medicalCoding",
        isTrending2026: true,
        modules: [
            { title: 'Medical Terminology and Anatomy', tag: '#Basic', content: 'Master medical terms and human anatomy essentials for accurate coding.' },
            { title: 'ICD-10-CM Training', tag: '#ICD10', content: 'Deep dive into diagnosis coding with the latest ICD-10-CM standards.' },
            { title: 'CPT Coding Guidelines', tag: '#CPT', content: 'Learn procedure coding for outpatient services using CPT manuals.' },
            { title: 'HCPCS Level II Coding', tag: '#HCPCS', content: 'Coding for medical supplies, equipment, and non-physician services.' },
            { title: 'Medical Billing Fundamentals', tag: '#Billing', content: 'Understanding the relationship between coding and the revenue cycle.' },
            { title: 'HIPAA and Compliance', tag: '#Regulations', content: 'Essential training on healthcare privacy laws and ethics.' },
            { title: 'CPC Exam Preparation', tag: '#ExamPrep', content: 'Mock tests and strategies to clear the CPC certification by AAPC.' },
            { title: 'Inpatient Coding (ICD-10-PCS)', tag: '#PCS', content: 'Introduction to procedural coding for inpatient settings.' },
            { title: 'Chart Auditing and Quality Control', tag: '#Audit', content: 'Learn how to review medical records for coding accuracy.' },
            { title: 'Software Training (Encoder)', tag: '#Tools', content: 'Hands-on practice with coding software used by industry professionals.' }
        ],
        tools: [
            { name: 'ICD-10', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966334.png' },
            { name: 'CPT', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966448.png' },
            { name: 'AAPC', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966436.png' }
        ],
        reviews: [
            { name: "Neha Gupta", role: "Medical Coder", review: "The certification exam preparation was extremely helpful. I cleared my CPC on the first attempt.", img: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg" }
        ],
        faqs: [
            { question: "What certifications are covered?", answer: "We prepare you for global certifications like AAPC (CPC) and AHIMA, which are highly recognized in the healthcare industry." },
            { question: "Is medical coding a good career choice?", answer: "Absolutely. With the increase in healthcare documentation needs, professional coders are in high demand globally." },
            { question: "Do I need a medical background?", answer: "No, while helpful, we teach all the necessary anatomy and terminology from scratch." },
            { question: "What is the CPC exam?", answer: "The CPC (Certified Professional Coder) is a globally recognized certification provided by AAPC." },
            { question: "What is the job salary for a medical coder?", answer: "Salaries are competitive and grow significantly with experience and subsequent certifications." },
            { question: "Can I work remotely as a medical coder?", answer: "Yes, many medical coding roles, especially in RCM companies, offer work-from-home opportunities." }
        ]
    },
    {
        title: "Medical Scribing",
        category: "pharma",
        price: "₹14,999",
        img: "/images/medicalscribing.jpg",
        desc: "Medical Scribing involves documenting patient encounters and clinical information on behalf of healthcare providers in real-time.",
        link: "/courses/medicalscribing",
        modules: [
            { title: 'Role of a Medical Scribe', tag: '#Intro', content: 'Understanding the importance of scribes in the modern healthcare ecosystem.' },
            { title: 'Medical Terminology & Abbreviations', tag: '#Medical', content: 'Learning the language of medicine used during physician-patient encounters.' },
            { title: 'Electronic Health Records (EHR) Navigation', tag: '#Tech', content: 'Hands-on training in documenting patient data within top EHR systems like Epic and Cerner.' },
            { title: 'Patient History and Physical Exams', tag: '#Clinic', content: 'How to accurately scribe various components of a medical visit.' },
            { title: 'Clinical Decision Making Documentation', tag: '#Advanced', content: 'Recording the physician\'s thought process and assessment plan.' },
            { title: 'HIPAA and Medical Ethics', tag: '#Legal', content: 'Ensuring patient confidentiality and adhering to legal documentation standards.' },
            { title: 'Pharmacology for Scribes', tag: '#Pharma', content: 'Commonly prescribed medications and their usages.' },
            { title: 'Simulation and Real-time Practice', tag: '#Practice', content: 'Live scribing practice using recorded doctor-patient interactions.' },
            { title: 'Workflow Management', tag: '#SoftSkills', content: 'Managing the clinic flow and assisting physicians with administrative tasks.' },
            { title: 'Career Path for Scribes', tag: '#Career', content: 'Transitioning to medical school, PA school, or senior scribe roles.' }
        ],
        tools: [
            { name: 'Epic EHR', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966486.png' },
            { name: 'Cerner', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966504.png' }
        ],
        reviews: [
            { name: "Siddharth Verma", role: "Medical Scribe", review: "The EHR training was fantastic. I felt completely prepared when I started my first day at the clinic.", img: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg" }
        ],
        faqs: [
            { question: "What exactly does a Medical Scribe do?", answer: "A scribe works alongside doctors to document patient encounters in real-time within the EHR system, freeing the physician to focus on care." },
            { question: "Is this training useful for future medical students?", answer: "Yes, it provides invaluable clinical experience that is highly regarded by medical and PA school admissions committees." },
            { question: "Do I need to be fast at typing?", answer: "A good typing speed (typically 50-60 WPM) is recommended. We include modules to help you improve your clinical typing speed." },
            { question: "Is there a lot of medical terminology to memorize?", answer: "There is quite a bit, but our course is structured to make it easy to learn through context and practice." },
            { question: "Can I work part-time as a scribe?", answer: "Yes, many clinics and hospitals offer flexible shifts suitable for students." },
            { question: "What is EHR?", answer: "EHR stands for Electronic Health Record, which is the digital version of a patient's paper chart." }
        ]
    },
    {
        title: "Genetic Engineering",
        category: "agriculture popular",
        price: "₹14,999",
        img: "/images/geneticeng.jpg",
        desc: "Genetic Engineering is the science of altering an organism’s genes to achieve specific traits or outcomes.",
        link: "/courses/geneticeng",
        modules: [
            { title: 'Molecular Biology Fundamentals', tag: '#Genetics', content: 'Detailed study of DNA, RNA, and protein synthesis.' },
            { title: 'Recombinant DNA Technology', tag: '#Advanced', content: 'Core techniques for cloning and manipulating genetic material.' },
            { title: 'Gene Expression and Regulation', tag: '#Molecular', content: 'Understanding how genes are turned on and off in different organisms.' },
            { title: 'CRISPR/Cas9 and Gene Editing', tag: '#CuttingEdge', content: 'Mastering the revolutionary gene editing tool that is transforming biology.' },
            { title: 'Genomics and Proteomics', tag: '#Omics', content: 'Large-scale analysis of genomes and proteomes using computational tools.' },
            { title: 'Bioethics and Regulations', tag: '#Ethics', content: 'Navigating the legal and ethical considerations of genetic modification.' },
            { title: 'Genetic Modification in Agriculture', tag: '#Agri', content: 'Developing drought-resistant and high-yield crop varieties.' },
            { title: 'Gene Therapy and Clinical Apps', tag: '#Healthcare', content: 'Applications of genetics in treating hereditary diseases and cancers.' },
            { title: 'Bioinformatics for Geneticists', tag: '#Tech', content: 'Using software tools to analyze DNA sequences and protein structures.' },
            { title: 'Laboratory Safety and Techniques', tag: '#Practical', content: 'Standard operating procedures for working in a high-tech genetics lab.' }
        ],
        tools: [
            { name: 'CRISPR', img: 'https://cdn-icons-png.flaticon.com/512/3208/3208726.png' },
            { name: 'PCR Machine', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966378.png' },
            { name: 'Bioinformatics Tools', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966367.png' }
        ],
        reviews: [
            { name: "Simran Kaur", role: "Geneticist", review: "The CRISPR and gene editing modules were world-class. Excellent research support provided here.", img: "https://xsgames.co/randomusers/assets/avatars/female/6.jpg" }
        ],
        faqs: [
            { question: "What is the focus of the Genetic Engineering course?", answer: "The course focuses on molecular biology, CRISPR/Cas9 gene editing, and recombinant DNA technology." },
            { question: "What are the career prospects?", answer: "Graduates can work in biotech research, pharmaceutical companies, agricultural development, and clinical genetics." },
            { question: "Is this a laboratory-intensive course?", answer: "Yes, we provide hands-on training with modern lab equipment and bioinformatics software." },
            { question: "Do I need a background in biology?", answer: "A basic understanding of biology and chemistry is required for this advanced-level course." },
            { question: "What is CRISPR?", answer: "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a revolutionary gene-editing technology." },
            { question: "How does genetic engineering help in agriculture?", answer: "It allows for the creation of crops that are more nutritional, pest-resistant, and adaptable to climate change." }
        ]
    },
    {
        title: "Pharmacovigilance",
        category: "pharma",
        price: "₹14,999",
        img: "/images/pharmaco-vigilance.jpg",
        desc: "Pharmacovigilance is the science of monitoring drug safety and ensuring the legal compliance of medicines.",
        link: "/courses/pharmacovigilance",
        modules: [
            { title: 'Introduction to PV & Drug Safety', tag: '#Basic', content: 'Understanding the importance of drug safety surveillance in the pharma industry.' },
            { title: 'Adverse Drug Reactions (ADR) Monitoring', tag: '#ADR', content: 'Techniques for identifying and reporting unexpected side effects.' },
            { title: 'Serious Adverse Events (SAE) Management', tag: '#Safety', content: 'Procedures for handling and reporting clinical trial emergencies.' },
            { title: 'Global Regulatory Guidelines (ICH-GCP)', tag: '#Compliance', content: 'Detailed study of international standards for drug safety and clinical trials.' },
            { title: 'MedDRA Coding for Drug Safety', tag: '#Coding', content: 'Standardizing medical terms for regulatory reporting using MedDRA.' },
            { title: 'Signal Detection and Risk Management', tag: '#Advanced', content: 'Identifying patterns in safety data and developing risk mitigation plans.' },
            { title: 'Periodic Safety Update Reports (PSUR)', tag: '#Reporting', content: 'Developing comprehensive safety reports for regulatory agencies.' },
            { title: 'Pharmacovigilance Software (Argus)', tag: '#Tools', content: 'Hands-on training in industry-standard PV databases.' },
            { title: 'Clinical Trial Pharmacovigilance', tag: '#Research', content: 'Specialized safety monitoring for drugs currently in testing phases.' },
            { title: 'PV Inspections and Audits', tag: '#Quality', content: 'Preparing for and managing regulatory inspections.' }
        ],
        tools: [
            { name: 'Argus Safety', img: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
            { name: 'MedDRA', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966468.png' }
        ],
        reviews: [
            { name: "Sandeep Rao", role: "PV Specialist", review: "The deep dive into MedDRA coding and Argus Safety was exactly what I needed for my promotion.", img: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg" }
        ],
        faqs: [
            { question: "What is Pharmacovigilance (PV)?", answer: "PV is the science and activities relating to the detection, assessment, understanding, and prevention of adverse effects of medicines." },
            { question: "Who can pursue a career in PV?", answer: "Graduates from life sciences, pharmacy, medicine, or nursing are ideal candidates." },
            { question: "Is this field different from Clinical Research?", answer: "Yes, while related, PV specifically focuses on the long-term safety and risk/benefit ratio of drugs." },
            { question: "Will I learn how to use Argus?", answer: "Yes, our course includes hands-on training with Argus, one of the most widely used PV databases in the industry." },
            { question: "Are these certifications recognized by MNCs?", answer: "Absolutely. Our certification is built on ICH-GCP guidelines followed by all global pharmaceutical companies." },
            { question: "What is the typical job role for a beginner?", answer: "Common entry-level roles include Drug Safety Associate and Junior PV Officer." }
        ]
    },
    {
        title: "Digital Marketing",
        category: "non-it-marketing popular",
        price: "₹14,999",
        img: "/images/digitalmarketing1.png",
        desc: "Empower brands to reach, engage, and grow through data-driven digital marketing strategies.",
        link: "/courses/digitalmarketing",
        isTrending2026: true,
        modules: [
            { title: 'Search Engine Optimization (SEO)', tag: '#SEO', content: 'Master on-page, off-page, and technical SEO strategies to improve website rankings.' },
            { title: 'Search Engine Marketing (Google Ads)', tag: '#SEM', content: 'Build and optimize high-converting PPC campaigns and display ads.' },
            { title: 'Social Media Marketing (SMM)', tag: '#Social', content: 'Strategies for growing brands on Instagram, Facebook, LinkedIn, and Twitter.' },
            { title: 'Content Marketing & Strategy', tag: '#Content', content: 'Developing compelling content that drives engagement and sales.' },
            { title: 'Email Marketing Automation', tag: '#Email', content: 'Using tools like Mailchimp to build subscriber lists and automate email sequences.' },
            { title: 'Google Analytics & Reporting', tag: '#Analytics', content: 'Tracking website traffic and measuring campaign ROI with precision.' },
            { title: 'Affiliate & Influencer Marketing', tag: '#Growth', content: 'Leveraging partnerships to expand brand reach and credibility.' },
            { title: 'Mobile & App Marketing', tag: '#Mobile', content: 'Strategies for app store optimization (ASO) and mobile-first campaigns.' },
            { title: 'Video Marketing on YouTube', tag: '#Video', content: 'Creating and optimizing video content for the world\'s largest video platform.' },
            { title: 'Digital Marketing Capstone', tag: '#Project', content: 'Build a complete 360-degree digital marketing plan for a real business.' }
        ],
        tools: [
            { name: 'Google Ads', img: 'https://cdn.iconscout.com/icon/free/png-256/google-ads-2038788-1721678.png' },
            { name: 'Analytics', img: 'https://cdn.iconscout.com/icon/free/png-256/google-analytics-2038788-1721678.png' },
            { name: 'Mailchimp', img: 'https://cdn.iconscout.com/icon/free/png-256/mailchimp-3-1175151.png' },
            { name: 'Semrush', img: 'https://cdn.iconscout.com/icon/free/png-256/semrush-1-1175065.png' }
        ],
        reviews: [
            { name: "Priya Sharma", role: "Digital Marketer", review: "The Google Ads module changed my perspective on PPC. I saw immediate results in my client projects.", img: "https://xsgames.co/randomusers/assets/avatars/female/7.jpg" }
        ],
        faqs: [
            { question: "What are the most in-demand skills in Digital Marketing?", answer: "SEO, Performance Marketing (Ads), Social Media Strategy, and Content Marketing are currently the top skills sought by employers." },
            { question: "Do I need a large budget to practice?", answer: "No, many modules focus on organic (free) growth, and we provide dummy accounts for paid ad practice." },
            { question: "Will I get Google certifications?", answer: "Yes, we guide you to clear major certifications from Google, Meta, and HubSpot." },
            { question: "Is this course suitable for business owners?", answer: "Absolutely, it's designed to help both job seekers and entrepreneurs grow their online presence." },
            { question: "How technical is this course?", answer: "It's non-technical. You don't need to know coding, though basic web literacy is helpful." },
            { question: "What is ROI in digital marketing?", answer: "ROI stands for Return on Investment, and we teach you how to track and maximize it for every advertising rupee spent." }
        ]
    },
    {
        title: "Product Management",
        category: "management",
        price: "₹14,999",
        img: "/images/productmanagement.jpg",
        desc: "Product Management involves planning, developing, and overseeing a product throughout its entire lifecycle.",
        link: "/courses/productmanagement",
        modules: [
            { title: 'Introduction to Product Management', tag: '#Foundations', content: 'The role of a PM, product lifecycle, and different types of PM roles.' },
            { title: 'Product Strategy & Vision', tag: '#Strategy', content: 'Defining the "Why" behind a product and creating a compelling roadmap.' },
            { title: 'User Research & Personas', tag: '#Research', content: 'Understanding customer needs, pain points, and building user personas.' },
            { title: 'Product Design & Prototyping', tag: '#Design', content: 'Basics of UI/UX, wireframing, and building MVPs (Minimum Viable Products).' },
            { title: 'Product Metrics & Analytics', tag: '#Metrics', content: 'Defining KPIs and using data to measure product success (AARRR framework).' },
            { title: 'Stakeholder & Team Collaboration', tag: '#Leadership', content: 'Working effectively with engineering, design, and marketing teams.' },
            { title: 'Product Backlog & Prioritization', tag: '#Execution', content: 'Using frameworks like RICE and MoSCoW to decide what to build next.' },
            { title: 'Agile Product Management', tag: '#Agile', content: 'Mastering sprints, user stories, and the role of PM in an agile environment.' },
            { title: 'Go-to-Market (GTM) Strategy', tag: '#Launch', content: 'Planning and executing a successful product launch.' },
            { title: 'Product Management Interview Prep', tag: '#Career', content: 'Mastering case studies, product sense, and behavioral interview questions.' }
        ],
        tools: [
            { name: 'Jira', img: 'https://cdn.iconscout.com/icon/free/png-256/jira-1-1175159.png' },
            { name: 'Figma', img: 'https://cdn.iconscout.com/icon/free/png-256/figma-1-1175147.png' },
            { name: 'Miro', img: 'https://cdn.iconscout.com/icon/free/png-256/miro-1-1175135.png' },
            { name: 'Amplitude', img: 'https://cdn-icons-png.flaticon.com/512/906/906314.png' }
        ],
        reviews: [
            { name: "Varun Mehta", role: "Associate PM", review: "The case study methodology used here is excellent. It really taught me how to think like a product owner.", img: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg" }
        ],
        faqs: [
            { question: "What is an MVP?", answer: "An MVP (Minimum Viable Product) is the simplest version of a product that allows a team to collect maximum validated learning about customers with the least effort." },
            { question: "Do PMs need to know how to code?", answer: "Not necessarily. While a technical background is helpful, good PMs focus more on problem-solving, user empathy, and business strategy." },
            { question: "What is the RICE framework?", answer: "RICE stands for Reach, Impact, Confidence, and Effort—a tool for prioritizing tasks and features." },
            { question: "How do I build a PM portfolio?", answer: "We help you create detailed case studies of product problems you've solved during the course." },
            { question: "Is this course for experienced professionals?", answer: "Yes, it's ideal for career changers from engineering, marketing, or design who want to move into management." },
            { question: "What is the difference between a Project and Product Manager?", answer: "A Product Manager focuses on the 'What' and 'Why', while a Project Manager focuses more on the 'How' and 'When' (timelines and resources)." }
        ]
    },
    {
        title: "Human Resources",
        category: "non-it-marketing",
        price: "₹14,999",
        img: "/images/humanresourse.jpg",
        desc: "Human Resources manages recruitment, employee relations, and workforce development within an organization.",
        link: "/courses/humanresourse",
        modules: [
            { title: 'HR Fundamentals', tag: '#HRM', content: 'The core functions of HR and its importance in modern businesses.' },
            { title: 'Talent Acquisition & Recruitment', tag: '#Recruitment', content: 'Strategies for sourcing, interviewing, and hiring top-tier talent.' },
            { title: 'Performance Management', tag: '#Performance', content: 'Designing appraisal systems and fostering employee growth.' },
            { title: 'Employee Relations & Engagement', tag: '#Culture', content: 'Building a positive work environment and resolving conflicts.' },
            { title: 'Learning & Development (L&D)', tag: '#L&D', content: 'Developing training programs to skill and upskill the workforce.' },
            { title: 'Compensation & Benefits', tag: '#Finance', content: 'Structuring payroll, bonuses, and non-monetary perks.' },
            { title: 'HR Analytics', tag: '#Data', content: 'Using data to measure turnover, engagement, and recruitment efficiency.' },
            { title: 'HR Information Systems (HRIS)', tag: '#Tools', content: 'Managing employee data with digital platforms.' },
            { title: 'Labor Laws and Compliance', tag: '#Legal', content: 'Understanding the legal framework governing employment.' },
            { title: 'Strategic HR Leadership', tag: '#Leadership', content: 'Aligning HR goals with the overall business vision.' }
        ],
        tools: [
            { name: 'LinkedIn Recruiter', img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
            { name: 'Workday', img: 'https://cdn.iconscout.com/icon/free/png-256/workday-2-1175131.png' },
            { name: 'SAP SuccessFactors', img: 'https://cdn.iconscout.com/icon/free/png-256/sap-4-1175133.png' }
        ],
        reviews: [
            { name: "Megha Rao", role: "HR Generalist", review: "The module on HR Analytics opened my eyes to how much impact data can have on hiring efficiency.", img: "https://xsgames.co/randomusers/assets/avatars/female/8.jpg" }
        ],
        faqs: [
            { question: "What is the most important skill for an HR professional?", answer: "A mix of empathy, communication, and organizational skills is essential for success in HR." },
            { question: "Will I learn how to use HR software?", answer: "Yes, we cover popular HRIS tools that are used globally by major corporations." },
            { question: "Is HR all about hiring and firing?", answer: "Not at all. HR also encompasses culture building, employee well-being, strategic planning, and performance growth." },
            { question: "What is HR Analytics?", answer: "It's the application of data science to manage people more effectively, from predicting turnover to measuring training success." },
            { question: "Are there remote HR jobs?", answer: "Yes, many recruitment and talent acquisition roles are now remote or hybrid." },
            { question: "Do you help with SHRM or PHR exam prep?", answer: "We provide foundational knowledge that is highly applicable for major HR certifications." }
        ]
    },
    {
        title: "Nano Science & Technology",
        category: "pharma agriculture",
        price: "₹14,999",
        img: "/images/nanoscience&technology.jpg",
        desc: "Nano Science & Technology studies and manipulates materials at the atomic and molecular scale for advanced applications.",
        link: "/courses/nanoscience",
        modules: [
            { title: 'Fundamentals of Nanoscience', tag: '#Foundations', content: 'Properties of matter at the nanoscale and the history of nanotechnology.' },
            { title: 'Synthesis of Nanomaterials', tag: '#Advanced', content: 'Chemical and physical methods for creating nanoparticles and nanotubes.' },
            { title: 'Characterization Techniques', tag: '#Tools', content: 'Mastering SEM, TEM, and AFM for viewing and analyzing materials at the nanoscale.' },
            { title: 'Nanotechnology in Healthcare', tag: '#Medical', content: 'Targeted drug delivery and diagnostic tools using nanobots.' },
            { title: 'Nanomaterials for Energy', tag: '#Energy', content: 'Using nanotech to improve solar cells, batteries, and fuel cells.' },
            { title: 'Nano-agriculture', tag: '#Agri', content: 'Developing nano-fertilizers and smart sensors for precision farming.' },
            { title: 'Environmental Nanotechnology', tag: '#Environment', content: 'Nanosystems for water purification and air filtration.' },
            { title: 'Carbon Nanotubes & Graphene', tag: '#Special', content: 'Deep dive into the properties of wonder-materials like graphene.' },
            { title: 'Nanotoxicology and Safety', tag: '#Ethical', content: 'Understanding and managing the health risks of nanomaterials.' },
            { title: 'Nano-electronics', tag: '#Tech', content: 'The next generation of semiconductors and quantum computing.' }
        ],
        tools: [
            { name: 'SEM', img: 'https://cdn-icons-png.flaticon.com/512/3201/3201246.png' },
            { name: 'AFM', img: 'https://cdn-icons-png.flaticon.com/512/3201/3201258.png' },
            { name: 'NanoDesign Soft', img: 'https://cdn-icons-png.flaticon.com/512/3201/3201201.png' }
        ],
        reviews: [],
        faqs: [
            { question: "What is Nanoscience?", answer: "Nanoscience is the study of manipulating matter at the molecular and atomic scale, primarily structures between 1 and 100 nanometres." },
            { question: "Is this a theoretical or practical course?", answer: "It's a mix of both. We cover the deep physics/chemistry and the hands-on characterization techniques." },
            { question: "What industries use Nanotechnology?", answer: "Electronics, Healthcare, Aerospace, Energy, and specialized manufacturing are the primary users." },
            { question: "Do I need a PhD to work in this field?", answer: "While research roles often require high degrees, many engineering and quality control roles are open to graduates with specialized training." },
            { question: "What is a Carbon Nanotube?", answer: "Carbon Nanotubes are cylindrical molecules of carbon with extraordinary structural and electrical properties." },
            { question: "Can nanotechnology help clean the environment?", answer: "Yes, nanomaterials are used in highly efficient water filters and for removing pollutants from soil." }
        ]
    },
    {
        title: "Salesforce",
        category: "it non-it-marketing",
        price: "₹14,999",
        img: "/images/SalesForce.png",
        desc: "Salesforce is a powerful cloud-based CRM platform used to manage sales, customer data, and business workflows globally.",
        link: "/courses/salesForce",
        modules: [
            { title: 'Salesforce CRM Basics', tag: '#CRM', content: 'Understanding the core cloud platform and navigating the ecosystem.' },
            { title: 'Admin & Configuration', tag: '#Admin', content: 'Building custom apps, objects, fields, and tabs without coding.' },
            { title: 'Data Management & Security', tag: '#Security', content: 'Managing users, profiles, permission sets, and data import/export.' },
            { title: 'Workflows and Automations', tag: '#Flow', content: 'Mastering Flow Builder and Process Builder for business automation.' },
            { title: 'Reports and Dashboards', tag: '#Analytics', content: 'Building powerful visualizations to drive sales and marketing decisions.' },
            { title: 'Apex Programming for Developers', tag: '#Dev', content: 'Learning the object-oriented language of Salesforce to build custom logic.' },
            { title: 'Visualforce and Lightning Components', tag: '#UI', content: 'Building custom user interfaces on the Salesforce platform.' },
            { title: 'Salesforce Integration (API)', tag: '#Advanced', content: 'Connecting Salesforce with other third-party applications.' },
            { title: 'Salesforce Sales & Service Cloud', tag: '#Special', content: 'Deep dive into industry-specific cloud offerings.' },
            { title: 'Trailhead Certification Prep', tag: '#Prep', content: 'Strategies and mock tests for the Salesforce Certified Administrator exam.' }
        ],
        tools: [
            { name: 'Salesforce', img: 'https://cdn.iconscout.com/icon/free/png-256/salesforce-2-1175067.png' },
            { name: 'Flow Builder', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966424.png' },
            { name: 'Trailhead', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966412.png' }
        ],
        reviews: [
            { name: "Rahul Deshmukh", role: "Salesforce Admin", review: "The hands-on Flow Builder training was a lifesaver. I can now automate complex business logic in minutes.", img: "https://xsgames.co/randomusers/assets/avatars/male/7.jpg" }
        ],
        faqs: [
            { question: "Do I need to know coding for Salesforce?", answer: "Not initially. You can start as a Salesforce Administrator (No-Code). Coding (Apex) is needed for the Developer track, which we also cover." },
            { question: "What is Trailhead?", answer: "Trailhead is Salesforce's official learning platform, and we use it as a core part of our training." },
            { question: "Is the Salesforce Admin certification hard?", answer: "It's a comprehensive exam, but our structured mock tests and project-based learning make it very achievable." },
            { question: "What is CRM?", answer: "CRM stands for Customer Relationship Management, a technology for managing all your company's relationships with customers." },
            { question: "What is the job market like for Salesforce professionals?", answer: "Demand for Salesforce talent continues to grow globally as more companies adopt the platform for their operations." },
            { question: "What is Apex?", answer: "Apex is a strongly typed, object-oriented programming language that allows developers to execute flow and transaction control statements on the Salesforce platform." }
        ]
    }
];
