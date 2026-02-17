import { getAssetUrl } from '../utils/assets';

export const coursesData = [
    {
        title: "Artificial Intelligence & Data Analyst",
        category: "it popular",
        price: "₹14,999",
        img: "/images/AI.png",
        desc: "Artificial Intelligence is the development of computer systems that can perform tasks requiring human-like intelligence.",
        link: "/courses/artificialintelligence",
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
            { name: 'Python', img: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' },
            { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png' },
            { name: 'Pandas', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png' },
            { name: 'NumPy', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1200px-NumPy_logo_2020.svg.png' },
            { name: 'Scikit-Learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
            { name: 'Keras', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png' },
            { name: 'PyTorch', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
            { name: 'Tableau', img: 'https://cdn.iconscout.com/icon/free/png-256/tableau-software-1-1175069.png' },
            { name: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
            { name: 'SQL', img: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'Jupyter', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png' }
        ],
        reviews: [
            { name: "Arun Kumar", role: "Data Analyst", review: "The AI & Data Science course specific curriculum helped me switch from a non-tech role.", img: "https://img.freepik.com/free-photo/young-indian-student-man-smiling-looking-camera_23-2148205259.jpg" },
            { name: "Sneha Reddy", role: "ML Engineer", review: "Hands-on projects in Machine Learning were incredibly useful for my interviews.", img: "https://img.freepik.com/free-photo/young-indian-woman-smiling-camera_23-2148952994.jpg" }
        ],
        faqs: [
            { question: "What are the career opportunities after completing this course?", answer: "Graduates can apply for roles like AI Engineer, Data Scientist, ML Engineer, and Business Intelligence Analyst across various industries." },
            { question: "Do I need a strong mathematical background for AI?", answer: "While basic math helps, our course covers the essential statistical and mathematical concepts from scratch." },
            { question: "What kind of projects will I work on?", answer: "You will work on real-world projects like predictive sales modeling, image recognition systems, and automated data processing pipelines." },
            { question: "Is this course aligned with industry standards?", answer: "Yes, our curriculum is IIT-inspired and regularly updated to match the latest trends in Artificial Intelligence and Data Analytics." },
            { question: "Will I get hands-on experience with tools?", answer: "Absolutely. You'll master tools like TensorFlow, Keras, Power BI, and Python through extensive practical sessions." },
            { question: "How long can I access the course material?", answer: "You will have lifetime access to the LMS, including all recorded sessions, study materials, and code repositories." },
            { question: "Are there weekend batches for working professionals?", answer: "Yes, we offer flexible weekend batches and early morning/late evening weekday sessions to accommodate working professionals." },
            { question: "Do you provide support for LinkedIn profile optimization?", answer: "Yes, as part of our career services, we help you build a professional LinkedIn presence and a strong GitHub portfolio." },
            { question: "What if I miss a live session?", answer: "All live sessions are recorded and uploaded to the LMS within 24 hours, so you can catch up at your convenience." }
        ]
    },
    {
        title: "Full Stack Development",
        category: "it popular",
        price: "₹14,999",
        img: "/images/fullstackdev.png",
        desc: "Master both front-end and back-end skills to build complete, scalable web applications from scratch.",
        link: "/courses/fullstack",
        modules: [
            { title: 'Web Design', tag: '#Frontend', content: 'Learn HTML, CSS, and JavaScript to build responsive and visually appealing websites.' },
            { title: 'React', tag: '#Frontend', content: 'Master ReactJS for building dynamic single-page applications with component-based design.' },
            { title: 'Node', tag: '#Backend', content: 'Learn Node.js to build fast, scalable, and server-side applications using JavaScript.' },
            { title: 'Python', tag: '#Backend', content: 'Learn Python fundamentals, data structures, and OOP concepts used in modern backend systems.' },
            { title: 'Django', tag: '#Backend', content: 'Build scalable web applications with Django and REST API integration.' },
            { title: 'Software Testing', tag: '#Testing', content: 'Learn manual and automation testing tools to ensure quality assurance in projects.' },
            { title: 'MongoDB', tag: '#Database', content: 'Explore NoSQL databases, collections, and document-based schema using MongoDB.' },
            { title: 'Angular', tag: '#Frontend', content: 'Learn Angular framework and TypeScript for dynamic enterprise-level applications.' },
            { title: 'AWS Essential + DevOps', tag: '#Cloud', content: 'Understand AWS fundamentals and DevOps practices including CI/CD and cloud deployment.' },
            { title: 'Java', tag: '#Backend', content: 'Learn Java basics and OOP principles to strengthen backend development skills.' }
        ],
        tools: [
            { name: 'HTML5', img: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png' },
            { name: 'CSS3', img: 'https://cdn.iconscout.com/icon/free/png-256/css3-11-1175239.png' },
            { name: 'JavaScript', img: 'https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png' },
            { name: 'React', img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
            { name: 'Angular', img: 'https://cdn.iconscout.com/icon/free/png-256/angular-2752246-2285063.png' },
            { name: 'Node.js', img: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png' },
            { name: 'Express', img: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png' },
            { name: 'MongoDB', img: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png' },
            { name: 'Python', img: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' },
            { name: 'Django', img: 'https://cdn.iconscout.com/icon/free/png-256/django-13-1175187.png' },
            { name: 'Java', img: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png' },
            { name: 'Spring Boot', img: 'https://img.icons8.com/color/512/spring-logo.png' },
            { name: 'AWS', img: 'https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png' },
            { name: 'Git', img: 'https://cdn.iconscout.com/icon/free/png-256/git-17-1175218.png' },
            { name: 'Docker', img: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png' },
            { name: 'Postman', img: 'https://cdn.iconscout.com/icon/free/png-256/postman-3521648-2945092.png' }
        ],
        reviews: [
            {
                name: 'Swati Nair',
                role: 'Full Stack Developer',
                review: 'Gyantrix Academy completely changed my career path. The support team was there from enrollment to placement day.',
                img: 'https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400847.jpg'
            },
            {
                name: 'Amit Malhotra',
                role: 'Software Engineer',
                review: 'They covered everything from resume building to interview preparation. I got placed in a top MNC within 3 months.',
                img: 'https://img.freepik.com/premium-photo/indian-man-portrait_115086-559.jpg'
            },
            {
                name: 'Pooja Reddy',
                role: 'Frontend Developer',
                review: 'The hands-on projects were the best part. I learned how to build real applications, not just theory.',
                img: 'https://img.freepik.com/free-photo/portrait-young-indian-woman-happy-with-her-work_1157-39906.jpg'
            }
        ],
        faqs: [
            { question: "What is the primary focus of the Full Stack course?", answer: "We focus on end-to-end development, covering React for frontend, Node/Python/Java for backend, and MongoDB/SQL for databases." },
            { question: "Will I build a portfolio?", answer: "Yes, you will complete multiple projects including a comprehensive capstone project that you can showcase to employers." },
            { question: "Is this course suitable for non-technical backgrounds?", answer: "Yes, we start with web fundamentals (HTML/CSS) and gradually move to advanced development concepts." },
            { question: "Do you provide placement assistance?", answer: "We provide 100% placement assistance, including mock interviews, resume building, and direct hiring partner connections." },
            { question: "What technologies are covered in DevOps?", answer: "We cover AWS essentials, Docker, and CI/CD practices to ensure you can deploy and manage your applications." },
            { question: "Can I choose between Java and Python for backend?", answer: "Yes, our curriculum is modularly designed, allowing you to specialize in either Java or Python backend based on your preference." },
            { question: "Are there live coding sessions?", answer: "Absolutely. We conduct regular live coding bootcamps and pair programming sessions to solve real-world problems." },
            { question: "What kind of industry projects are included?", answer: "You will build real applications like E-commerce platforms, Social Media dashboards, and Task Management systems." },
            { question: "Will I learn how to host my projects?", answer: "Yes, we teach you how to host and deploy your applications on cloud platforms like AWS and Netlify." }
        ]
    },
    {
        title: "Data Science & Analytics With AI",
        category: "it",
        price: "₹14,999",
        img: "/images/datascience.png",
        desc: "Transform data into intelligence and insights through the power of Artificial Intelligence and Analytics.",
        link: "/courses/ds&analyticswithai",
        modules: [
            { title: 'Advanced Python Programming', tag: '#Python', content: 'Master advanced Python concepts and libraries for data science.' },
            { title: 'Machine Learning & Deep Learning', tag: '#MachineLearning', content: 'Build predictive models using algorithms and neural networks.' },
            { title: 'Data Wrangling & Visualization', tag: '#DataVisualization', content: 'Clean, transform, and visualize complex datasets.' },
            { title: 'Big Data Analytics with PySpark', tag: '#BigData', content: 'Handle large-scale data processing with PySpark.' },
            { title: 'Natural Language Processing', tag: '#NLP', content: 'Analyze and interpret human language using NLP techniques.' },
            { title: 'Cloud Platforms (AWS)', tag: '#CloudComputing', content: 'Deploy and manage data science solutions on the cloud.' },
            { title: 'Model Deployment & MLOps', tag: '#MLOps', content: 'Deploy machine learning models into production environments.' },
            { title: 'Industry Capstone Project', tag: '#RealWorldProjects', content: 'Solve a real-world business problem in a comprehensive project.' }
        ],
        tools: [
            { name: 'Python', img: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' },
            { name: 'R', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png' },
            { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png' },
            { name: 'Keras', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png' },
            { name: 'Tableau', img: 'https://cdn.iconscout.com/icon/free/png-256/tableau-software-1-1175069.png' },
            { name: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
            { name: 'SQL', img: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' }
        ],
        reviews: [
            { name: "Rakesh Choudhary", role: "Data Scientist", review: "The Data Science program at Gyantrix helped me gain job-ready skills and land my first internship in less than three months.", img: "https://img.freepik.com/free-photo/young-student-man-smiling-looking-camera_23-2148205259.jpg" },
            { name: "Sneha Patel", role: "Analytics Lead", review: "Highly recommended for anyone looking to master analytics and AI implementation with a practical approach.", img: "https://img.freepik.com/free-photo/young-woman-smiling-camera_23-2148952994.jpg" }
        ],
        faqs: [
            { question: "Is Python mandatory for Data Science?", answer: "Python is the most popular language for Data Science due to its extensive library support, and it is a core part of our training." },
            { question: "What is the role of AI in this Data Science course?", answer: "We integrate AI to teach you how to build automated predictive models and use NLP for unstructured data analysis." },
            { question: "Will I learn Big Data tools?", answer: "Yes, the course includes training on PySpark and handling large datasets, which is crucial for modern data roles." },
            { question: "What is MLOps?", answer: "MLOps is about operationalizing machine learning models. You'll learn how to deploy and monitor models in production environments." },
            { question: "Do you provide cloud training for Data Science?", answer: "We provide hands-on experience with AWS SageMaker and cloud-based data storage solutions." },
            { question: "How many business use cases are covered?", answer: "We cover over 15+ industry-specific use cases across Retail, Finance, and Healthcare sectors." },
            { question: "Is there a certificate for PySpark?", answer: "Our comprehensive course completion certificate includes all modules, including Big Data Analytics with PySpark." },
            { question: "What kind of support is provided for the capstone project?", answer: "You will have 1-on-1 mentorship sessions with industry experts to guide you through your capstone implementation." },
            { question: "Can I attend demo sessions?", answer: "Yes, we conduct regular demo webinars where you can interact with trainers and understand the course structure." }
        ]
    },
    {
        title: "UI/UX Development",
        category: "it",
        price: "₹14,999",
        img: "/images/UI&UX.png",
        desc: "A UI/UX Development builds visually appealing and user-friendly interfaces that enhance the overall digital experience.",
        link: "/courses/ui_ux",
        modules: [
            { title: 'UI/UX Design Fundamentals', tag: '#Design', content: 'Introduction to user interface and user experience design principles.' },
            { title: 'User Research & Analysis', tag: '#Research', content: 'Understanding user needs, conducting interviews, and analyzing data.' },
            { title: 'Wireframing & Prototyping', tag: '#Prototyping', content: 'Creating low-fidelity wireframes and interactive prototypes.' },
            { title: 'Visual Design & Interaction', tag: '#VisualDesign', content: 'Applying color theory, typography, and interaction patterns.' },
            { title: 'Usability Testing & Feedback', tag: '#Testing', content: 'Conducting usability tests and incorporating user feedback.' },
            { title: 'Responsive & Mobile Design', tag: '#Responsive', content: 'Designing for various screen sizes and devices.' },
            { title: 'Design Systems & Collaboration', tag: '#Collaboration', content: 'Creating and maintaining design systems for consistency.' },
            { title: 'Advanced UX Strategies', tag: '#Strategy', content: 'Implementing advanced UX strategies for complex applications.' },
            { title: 'Capstone Project', tag: '#Project', content: 'Complete a full UI/UX design project for your portfolio.' }
        ],
        tools: [
            { name: 'Figma', img: 'https://cdn.iconscout.com/icon/free/png-256/figma-1-1175210.png' },
            { name: 'Adobe XD', img: 'https://cdn.iconscout.com/icon/free/png-256/adobe-xd-1-1175172.png' },
            { name: 'Sketch', img: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg' },
            { name: 'InVision', img: 'https://cdn.iconscout.com/icon/free/png-256/invision-2-1175084.png' },
            { name: 'Zeplin', img: 'https://cdn.iconscout.com/icon/free/png-256/zeplin-1-1175150.png' },
            { name: 'Miro', img: 'https://cdn.iconscout.com/icon/free/png-256/miro-3628938-3030163.png' }
        ],
        reviews: [
            { name: "Karthik Goud", role: "UI Designer", review: "Industry-focused training with practical use cases. I feel ready for any professional design challenge now.", img: "https://img.freepik.com/premium-photo/indian-man-portrait_115086-559.jpg" },
            { name: "Pooja Reddy", role: "UX Researcher", review: "The hands-on projects were the best part. I learned how to build real applications, not just theory.", img: "https://img.freepik.com/free-photo/portrait-young-woman-happy-with-her-work_1157-39906.jpg" }
        ],
        faqs: [
            { question: "Do I need to be good at drawing for UI/UX?", answer: "No, UI/UX is about problem-solving, empathy, and digital design tools like Figma, not traditional hand-sketching." },
            { question: "Will I learn both design and prototyping?", answer: "Yes, the course covers everything from user research to wireframing and interactive high-fidelity prototyping." },
            { question: "Is Figma the primary tool taught?", answer: "Figma is our main focus as it's the industry leader, but we also introduce Adobe XD and collaboration tools like Zeplin." },
            { question: "What is a Design System?", answer: "You'll learn how to create a library of reusable components and styles to ensure design consistency across a whole product." },
            { question: "What is the difference between UI and UX?", answer: "UX (User Experience) focuses on the feel and logic of the product, while UI (User Interface) focuses on the look and interactivity." },
            { question: "Will I build a design portfolio on Behance?", answer: "Yes, we guide you in documenting your case studies and publishing them on professional platforms like Behance and Dribbble." },
            { question: "Do you cover mobile app design specifically?", answer: "Absolutely. We have dedicated modules for both iOS (Human Interface Guidelines) and Android (Material Design) principles." },
            { question: "How do designers work with developers?", answer: "We teach you design hand-off processes using tools like Zeplin and Figma Dev Mode to ensure smooth collaboration." },
            { question: "Are there any mock design challenges?", answer: "Yes, we conduct weekly design sprints and 48-hour challenges to sharpen your creative problem-solving skills." }
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
            { title: 'Data Analysis with Python', tag: '#Python', content: 'Use Python libraries like Pandas and NumPy for data analysis.' },
            { title: 'Advanced Excel & SQL', tag: '#DataAnalysis', content: 'Master advanced Excel functions and SQL queries for data management.' },
            { title: 'Data Visualization with Tableau', tag: '#DataVisualization', content: 'Create impactful visual stories using Tableau.' },
            { title: 'Statistical Methods', tag: '#Statistics', content: 'Apply statistical methods to interpret data trends.' },
            { title: 'Dashboard Development', tag: '#Dashboarding', content: 'Design interactive dashboards for business monitoring.' },
            { title: 'Reporting Automation', tag: '#Automation', content: 'Automate data reporting processes for efficiency.' },
            { title: 'Business Metrics & KPIs', tag: '#BusinessIntelligence', content: 'Define and track key performance indicators for business growth.' },
            { title: 'Analytics Project', tag: '#CapstoneProject', content: 'Execute a comprehensive data analysis project.' }
        ],
        tools: [
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'SQL', img: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
            { name: 'Tableau', img: 'https://cdn.iconscout.com/icon/free/png-256/tableau-software-1-1175069.png' },
            { name: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
            { name: 'Python', img: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' },
            { name: 'R', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png' }
        ],
        faqs: [
            { question: "What is the difference between Data Science and Data Analytics?", answer: "Data Analytics focuses more on interpreting existing data to provide insights, while Data Science involves building predictive models." },
            { question: "Is Advanced Excel still relevant?", answer: "Definitely. Most businesses still rely on Excel for quick analysis, and our course covers the advanced features recruiters look for." },
            { question: "What BI tools will I learn?", answer: "You will master both Tableau and Power BI, the two most popular business intelligence platforms in the market today." },
            { question: "Will I learn how to automate reports?", answer: "Yes, a key part of the course is learning how to use Python and SQL to automate repetitive reporting tasks." },
            { question: "Which SQL databases are covered?", answer: "We provide hands-on training with MySQL and PostgreSQL, covering complex joins, subqueries, and stored procedures." },
            { question: "Do you help with data analyst interview preparation?", answer: "Yes, we conduct mock technical interviews and provide a bank of real-world business case studies for practice." },
            { question: "Is there a focus on data storytelling?", answer: "Visualizing data is only half the battle. We teach you how to present your findings to stakeholders effectively." },
            { question: "Can I transition from a sales/marketing role to Data Analytics?", answer: "Many of our successful students come from non-tech backgrounds. Data Analytics is a perfect entry point into the tech world." },
            { question: "What are KPIs and will I learn to track them?", answer: "Key Performance Indicators are vital for business monitoring. You'll learn how to define and track them using dashboards." }
        ]
    },
    {
        title: "Medical Coding",
        category: "pharma popular",
        price: "₹14,999",
        img: "/images/medicalcoding.jpg",
        desc: "Medical Coding is the process of translating healthcare diagnoses, procedures, and treatments into standardized codes for records and billing.",
        link: "/courses/medicalCoding",
        modules: [
            { title: 'Medical Terminology and Anatomy', tag: '#MedicalTerminology', content: 'Master medical terms and human anatomy essentials.' },
            { title: 'ICD-10-CM Coding Systems', tag: '#ICD10Coding', content: 'Learn compliant diagnosis coding using ICD-10-CM.' },
            { title: 'CPT and HCPCS Level II Coding', tag: '#CPTCoding', content: 'Apply CPT and HCPCS codes for procedures and supplies.' },
            { title: 'Healthcare Reimbursement Methodologies', tag: '#HealthcareBilling', content: 'Understand insurance billing and reimbursement cycles.' },
            { title: 'Medical Documentation Standards', tag: '#MedicalDocumentation', content: 'Ensure accuracy and compliance in medical records.' },
            { title: 'Compliance and Ethics in Coding', tag: '#ComplianceInHealthcare', content: 'Adhere to ethical standards and legal requirements in coding.' },
            { title: 'Practical Coding Applications', tag: '#PracticalCoding', content: 'Practice coding with real-world medical scenarios.' },
            { title: 'Certification Exam Preparation', tag: '#ExamPreparation', content: 'Prepare for professional medical coding certification exams.' }
        ],
        tools: [
            { name: 'ICD-10', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966334.png' },
            { name: 'CPT', img: 'https://cdn-icons-png.flaticon.com/512/822/822288.png' },
            { name: 'HCPCS', img: 'https://cdn-icons-png.flaticon.com/512/2721/2721262.png' },
            { name: '3M Encoder', img: 'https://cdn-icons-png.flaticon.com/512/2857/2857433.png' }
        ],
        reviews: [
            { name: "Neha Gupta", role: "Medical Coder", review: "Comprehensive training on ICD-10 and CPT coding. The certification exam preparation was extremely helpful.", img: "https://img.freepik.com/free-photo/beautiful-indian-woman-smiling-sunny-day_23-2149454179.jpg" },
            { name: "Vikas Kumar", role: "Healthcare Auditor", review: "The mentors are very knowledgeable and make complex medical terminology very easy to understand.", img: "https://img.freepik.com/free-photo/portrait-young-handsome-indian-man_114579-80864.jpg" }
        ],
        faqs: [
            { question: "What certifications are covered?", answer: "We prepare you for global certifications like AAPC (CPC) and AHIMA, which are highly recognized in the healthcare industry." },
            { question: "What is ICD-10 coding?", answer: "It's a global standard for coding medical diagnoses. Our course covers the latest ICD-10-CM guidelines in depth." },
            { question: "Is medical coding a good career for life sciences students?", answer: "Yes, it's one of the top career paths for life science graduates, offering stable growth in the healthcare IT sector." },
            { question: "Will I learn medical billing too?", answer: "Yes, the course includes fundamentals of healthcare reimbursement and the billing cycle to provide a complete overview." },
            { question: "Are there any specific coding tools taught?", answer: "Yes, you will get hands-on experience with 3M Encoder and other industry-standard coding software." },
            { question: "What is the duration of the AAPC exam prep?", answer: "Our dedicated exam prep module lasts for 4 weeks and includes over 10 mock exams and 500+ practice questions." },
            { question: "Do you provide placement in US-based healthcare companies?", answer: "Many of our hiring partners are US-based RCM (Revenue Cycle Management) giants with large operations in India." },
            { question: "Can I take this course online?", answer: "Yes, we offer both live interactive online sessions and self-paced modules with doubt-clearing support." }
        ]
    },
    {
        title: "Medical Scribing",
        category: "pharma",
        price: "₹14,999",
        img: "/images/medicalscribing.jpg",
        desc: "Medical Scribing involves documenting patient encounters and clinical information on behalf of healthcare providers.",
        link: "/courses/medicalscribing",
        modules: [
            { title: 'Electronic Health Records Management', tag: '#EHRManagement', content: 'Navigate and manage digital patient records efficiently.' },
            { title: 'Clinical Documentation Techniques', tag: '#ClinicalDocumentation', content: 'Accurately document patient history and examinations.' },
            { title: 'Medical Terminology Advanced', tag: '#MedicalTerminology', content: 'Deepen understanding of complex medical language.' },
            { title: 'Patient Encounter Documentation', tag: '#PatientDocumentation', content: 'Real-time documentation of doctor-patient interactions.' },
            { title: 'Healthcare Privacy and HIPAA', tag: '#HIPAACompliance', content: 'Ensure strict confidentiality and legal compliance.' },
            { title: 'Clinical Workflow Optimization', tag: '#ClinicalWorkflow', content: 'Streamline clinical operations and improve efficiency.' },
            { title: 'Emergency Department Protocols', tag: '#EmergencyScribing', content: 'Handle scribing effectively in high-pressure emergency settings.' },
            { title: 'Live Scribing Practice Sessions', tag: '#LiveScribing', content: 'Practice scribing skills in simulated clinical environments.' }
        ],
        tools: [
            { name: 'Epic EHR', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966486.png' },
            { name: 'Cerner', img: 'https://cdn-icons-png.flaticon.com/512/8815/8815112.png' },
            { name: 'Allscripts', img: 'https://cdn-icons-png.flaticon.com/512/5956/5956592.png' },
            { name: 'Athenahealth', img: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png' }
        ],
        reviews: [
            { name: "Rohit Mehta", role: "Clinical Researcher", review: "Foundational knowledge in clinical trials was explained very well. Excellent placement assistance provided.", img: "https://img.freepik.com/free-photo/portrait-handsome-young-indian-man_114579-91336.jpg" },
        ],
        faqs: [
            { question: "What exactly does a Medical Scribe do?", answer: "A scribe works alongside doctors to document patient encounters in real-time within the EHR system, freeing the physician to focus on care." },
            { question: "Is this a remote or on-site job?", answer: "Both. We train you for virtual scribing (remote) and in-person roles in clinics and hospitals." },
            { question: "What is the eligibility for this course?", answer: "Graduates with good listening and typing skills, along with a basic understanding of medical terminology, are ideal candidates." },
            { question: "Will I learn how to use EHR software?", answer: "Yes, you'll get hands-on experience with industry-leading EHR systems like Epic and Cerner." },
            { question: "Is US accent training included?", answer: "Yes, we provide specialized medical English and accent neutralization modules to help you excel in US healthcare settings." },
            { question: "What are the working hours for a virtual scribe?", answer: "Since you work with US doctors, the shifts generally coincide with US clinical hours (Indian night shifts)." },
            { question: "Do you offer typing speed improvement modules?", answer: "Yes, we provide typing drills and shortcuts to help you reach the industry standard of 60+ WPM." },
            { question: "Is there a demand for scribes in emergency departments?", answer: "Absolutely. Emergency and specialty clinics (Cardiology, Orthopedics) have the highest demand for specialized scribes." },
            { question: "What is HIPAA and why is it important?", answer: "HIPAA is the federal law for patient data privacy. Our course includes mandatory HIPAA certification training." }
        ]
    },
    {
        title: "Clinical Research",
        category: "pharma",
        price: "₹14,999",
        img: "/images/ClinicalResearch.png",
        desc: "Clinical Research involves studying medical treatments, drugs, and therapies to ensure safety and effectiveness.",
        link: "/courses/clinicalResearch",
        modules: [
            { title: 'Clinical Research Fundamentals', tag: '#Research', content: 'Understand the phases and principles of clinical trials.' },
            { title: 'Data Collection & Validation', tag: '#DataPrep', content: 'Gather and verify clinical trial data accurately.' },
            { title: 'Clinical Data Management & Automation', tag: '#Automation', content: 'Use technology to manage large datasets efficiently.' },
            { title: 'Statistical Analysis in Clinical Research', tag: '#Statistics', content: 'Apply statistical methods to interpret research findings.' },
            { title: 'Data Visualization & Reporting', tag: '#Visualization', content: 'Present research data clearly using visual tools.' },
            { title: 'Advanced SAS & Clinical Programming', tag: '#Programming', content: 'Utilize SAS for complex data analysis in research.' },
            { title: 'Clinical Databases & Integration', tag: '#Databases', content: 'Manage and integrate data from various clinical sources.' },
            { title: 'External Data & EDC Integration', tag: '#Integration', content: 'Incorporate external data streams into clinical studies.' },
            { title: 'Capstone Project', tag: '#Project', content: 'Design and execute a simulated clinical research study.' }
        ],
        tools: [
            { name: 'Oracle Clinical', img: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
            { name: 'Rave EDC', img: 'https://cdn-icons-png.flaticon.com/512/2857/2857433.png' },
            { name: 'SAS', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/SAS_logo_horiz.png' },
            { name: 'SPSS', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/SPSS_logo.png' }
        ],
        reviews: [
            { name: "Ritu Singh", role: "Clinical Researcher", review: "Foundational knowledge in clinical trials was explained very well. Excellent placement assistance provided.", img: "https://img.freepik.com/free-photo/young-woman-smiling-camera_23-2148952994.jpg" },
            { name: "Aditya Jain", role: "Drug Safety Analyst", review: "The regulatory guidelines module was a lifesaver for my interviews in the pharmaceutical sector.", img: "https://img.freepik.com/premium-photo/indian-man-portrait_115086-559.jpg" }
        ],
        faqs: [
            { question: "Who can enroll in a Clinical Research course?", answer: "Graduates in Life Sciences, Pharmacy, Medicine, and Nursing are highly eligible for this career path." },
            { question: "What are the job roles in Clinical Research?", answer: "Roles include Clinical Research Associate (CRA), Clinical Research Coordinator (CRC), and Clinical Data Manager (CDM)." },
            { question: "Do you cover regulatory guidelines?", answer: "Yes, we cover ICH-GCP guidelines, FDA regulations, and local regulatory requirements in detail." },
            { question: "Is there practical training on clinical software?", answer: "Absolutely. You'll master tools like Oracle Clinical and Rave EDC for real-world research management." },
            { question: "What are the phases of Clinical Trials?", answer: "Our course covers all four phases (I to IV) of clinical trials, explaining the objectives and regulatory requirements for each." },
            { question: "Is there an internship included?", answer: "Yes, we facilitate internship opportunities with CROs (Contract Research Organizations) to provide real-world project exposure." },
            { question: "Will I learn about Informed Consent processes?", answer: "Yes, ethical considerations and patient safety, including the informed consent process, are core parts of the curriculum." },
            { question: "Can I move from Clinical Research to Data Management?", answer: "Yes, the course provides a strong foundation in both, allowing you to transition into Clinical Data Management (CDM) roles easily." },
            { question: "What is the role of a CRA in a field site?", answer: "A CRA (Monitor) ensures that the trial is conducted according to the protocol and regulatory requirements at each site." }
        ]
    },
    {
        title: "Clinical SAS",
        category: "pharma",
        price: "₹14,999",
        img: "/images/ClinicalSAS.png",
        desc: "Clinical SAS uses statistical programming to analyze clinical trial data and generate regulatory-ready reports.",
        link: "/courses/clinicalSAS",
        modules: [
            { title: 'Clinical SAS Fundamentals', tag: '#SAS', content: 'Introduction to SAS programming in the clinical domain.' },
            { title: 'Data Cleaning & Validation', tag: '#DataPrep', content: 'Techniques for ensuring data integrity and quality.' },
            { title: 'Clinical Data Automation', tag: '#Automation', content: 'Automating data processing tasks for efficiency.' },
            { title: 'Statistical Analysis', tag: '#Statistics', content: 'Applying statistical methods to clinical trial data.' },
            { title: 'Data Visualization & Reporting', tag: '#Visualization', content: 'Creating reports and graphs for clinical study results.' },
            { title: 'Advanced SAS Programming', tag: '#Programming', content: 'Mastering advanced SAS macros and procedures.' },
            { title: 'Clinical Databases & Integration', tag: '#Databases', content: 'Working with clinical databases and data standards.' },
            { title: 'APIs & External Data Integration', tag: '#Integration', content: 'Integrating external data sources into SAS environments.' },
            { title: 'Capstone Project', tag: '#Project', content: 'End-to-end clinical data analysis project using SAS.' }
        ],
        tools: [
            { name: 'SAS System', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/SAS_logo_horiz.png' },
            { name: 'SAS Studio', img: 'https://cdn-icons-png.flaticon.com/512/4248/4248408.png' },
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'R', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png' }
        ],
        reviews: [
            { name: "Sneha Sharma", role: "SAS Programmer", review: "Mastering SAS through Gyantrix helped me land a role in one of the top global clinical research firms.", img: "https://img.freepik.com/free-photo/beautiful-indian-woman-smiling-sunny-day_23-2149454179.jpg" },
            { name: "Vishal Reddy", role: "Clinical Data Lead", review: "The clinical data standards (CDISC) training is exceptional and very thorough for professional growth.", img: "https://img.freepik.com/free-photo/portrait-young-handsome-indian-man_114579-80864.jpg" }
        ],
        faqs: [
            { question: "Why is SAS preferred in Clinical Research?", answer: "SAS is the industry standard for clinical data analysis due to its robustness, security, and acceptance by regulatory bodies like the FDA." },
            { question: "Do I need to be a programmer to learn Clinical SAS?", answer: "No prior programming experience is required. We start with SAS fundamentals and build your skills up to clinical standards." },
            { question: "What is CDISC?", answer: "CDISC is a set of data standards (SDTM, ADaM) for clinical trials. Our course provides specialized training on these must-know standards." },
            { question: "What projects are involved in Clinical SAS?", answer: "You will work on creating TLFs (Tables, Listings, Figures) and datasets following industry-standard protocols." },
            { question: "What is a TLF in Clinical SAS?", answer: "TLFs stand for Tables, Listings, and Figures. They are the final reports generated from clinical trial data for submission to regulatory authorities." },
            { question: "Will I learn SAS Macro and Proc SQL?", answer: "Yes, advanced SAS Macro and Proc SQL are essential for automation and efficient data handling, and are covered in depth." },
            { question: "Do you provide SAS software for practice?", answer: "We provide access to the SAS University Edition/OnDemand for Academic for students to practice throughout the course." },
            { question: "Can I get certified by SAS Institute after this?", answer: "Yes, our training is aligned with the SAS Global Certification program for Clinical Trials Programmers." },
            { question: "How is SAS different from R in clinical trials?", answer: "While R is growing, SAS remains the most trusted tool for final regulatory submissions due to its validated nature." }
        ]
    },
    {
        title: "Quality Assurance & Quality Control",
        category: "pharma",
        price: "₹14,999",
        img: "/images/QA&QC.png",
        desc: "QA & QC ensure products meet quality standards through systematic monitoring, testing, and process validation.",
        link: "/courses/qa_qc",
        modules: [
            { title: 'QA & QC Fundamentals', tag: '#QAQC', content: 'Foundational principles of quality assurance and control.' },
            { title: 'Data Accuracy & Validation', tag: '#Validation', content: 'Ensuring precision and reliability in quality data.' },
            { title: 'Process Audits & Inspections', tag: '#Audits', content: 'Conducting systematic reviews of operational processes.' },
            { title: 'Corrective & Preventive Actions (CAPA)', tag: '#CAPA', content: 'Implementing strategies to resolve and prevent issues.' },
            { title: 'Quality Metrics & Reporting', tag: '#Reporting', content: 'Tracking and reporting on key quality indicators.' },
            { title: 'Regulatory Compliance & Documentation', tag: '#Compliance', content: 'Meeting industry standards and maintaining records.' },
            { title: 'Risk Management & Quality Improvement', tag: '#Risk', content: 'Identifying risks and enhancing quality systems.' },
            { title: 'External Vendor & Supplier QA', tag: '#Vendors', content: 'Ensuring quality standards across the supply chain.' },
            { title: 'Capstone Project', tag: '#Project', content: 'Develop a comprehensive quality management plan.' }
        ],
        tools: [
            { name: 'TrackWise', img: 'https://cdn-icons-png.flaticon.com/512/2857/2857433.png' },
            { name: 'LIMS', img: 'https://cdn-icons-png.flaticon.com/512/4149/4149678.png' },
            { name: 'MasterControl', img: 'https://cdn-icons-png.flaticon.com/512/1680/1680252.png' },
            { name: 'SAP QM', img: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' }
        ],
        reviews: [
            { name: "Akshaya Patel", role: "QA Analyst", review: "Practical sessions on GMP and GLP were very insightful. Highly professional training environment.", img: "https://img.freepik.com/free-photo/young-woman-smiling-camera_23-2148952994.jpg" },
            { name: "Manish Rao", role: "Quality Control Lead", review: "I learned how to maintain high quality standards in real-world pharmaceutical manufacturing environments.", img: "https://img.freepik.com/premium-photo/indian-man-portrait_115086-559.jpg" }
        ],
        faqs: [
            { question: "What is the difference between QA and QC?", answer: "QA is process-oriented (prevention), while QC is product-oriented (detection). Our course covers both comprehensively." },
            { question: "What are GMP and GLP?", answer: "Good Manufacturing Practices (GMP) and Good Laboratory Practices (GLP) are essential regulatory standards for ensuring pharmaceutical quality." },
            { question: "Is this course relevant for the manufacturing industry?", answer: "Yes, the principles of QA/QC are fundamental to pharmaceutical and biotech manufacturing sectors." },
            { question: "Will I learn about quality audits?", answer: "Yes, the course includes training on how to conduct and prepare for quality audits and inspections." },
            { question: "What is a Deviation and CAPA?", answer: "You will learn how to document deviations and implement Corrective and Preventive Actions (CAPA) to maintain quality standards." },
            { question: "Do you use LIMS software during the course?", answer: "Yes, we provide an overview and practical walkthrough of Laboratory Information Management Systems (LIMS)." },
            { question: "Is this course suitable for chemical engineers?", answer: "Chemical and Process engineers often find this course helpful for roles in production quality and process validation." },
            { question: "What are the job prospects in Quality Control?", answer: "Roles include QC Analyst, Microbiologist, Quality Auditor, and Production Supervisor in leading pharma labs." },
            { question: "Will I learn about documentation for USFDA audits?", answer: "Yes, we emphasize documentation standards (ALCOA+) required for international regulatory audits." }
        ]
    },
    {
        title: "Bioinformatics",
        category: "pharma",
        price: "₹14,999",
        img: "/images/BioInformatics.png",
        desc: "Bioinformatics combines biology, data science, and computational tools to analyze and interpret biological data.",
        link: "/courses/bioInformatics",
        modules: [
            { title: 'Bioinformatics Fundamentals', tag: '#Genomics', content: 'Basics of biological data analysis and computational biology.' },
            { title: 'Sequence Analysis', tag: '#Analysis', content: 'Analyzing DNA, RNA, and protein sequences.' },
            { title: 'Genome & Proteome Automation', tag: '#Automation', content: 'Automating the analysis of genomic and proteomic data.' },
            { title: 'Structural Bioinformatics', tag: '#Modeling', content: 'Predicting and visualizing biomolecular structures.' },
            { title: 'Data Analysis & Visualization', tag: '#Analytics', content: 'Interpreting complex biological datasets visually.' },
            { title: 'Programming for Bioinformatics', tag: '#Development', content: 'Coding skills for custom bioinformatics solutions.' },
            { title: 'Database Management & Tools', tag: '#Databases', content: 'Managing biological databases efficiently.' },
            { title: 'Integrations & APIs', tag: '#Integration', content: 'Connecting various bioinformatics tools and resources.' },
            { title: 'Capstone Project', tag: '#Project', content: 'Solve a biological problem using bioinformatics tools.' }
        ],
        tools: [
            { name: 'BLAST', img: 'https://cdn-icons-png.flaticon.com/512/1005/1005141.png' },
            { name: 'PyMOL', img: 'https://cdn-icons-png.flaticon.com/512/2083/2083234.png' },
            { name: 'R', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png' },
            { name: 'Python', img: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' }
        ],
        reviews: [
            { name: "Kavya Nair", role: "Bioinformatician", review: "The combination of biology and data science was taught seamlessly. An excellent course for researchers!", img: "https://img.freepik.com/free-photo/portrait-young-woman-happy-with-her-work_1157-39906.jpg" },
            { name: "Deepak Yadav", role: "Computational Biologist", review: "The Biopython and molecular modeling modules were extremely helpful for my final research project.", img: "https://img.freepik.com/free-photo/portrait-handsome-young-indian-man_114579-91336.jpg" }
        ],
        faqs: [
            { question: "What is Bioinformatics exactly?", answer: "Bioinformatics is the application of computer science and statistics to analyze and interpret biological data, especially genomic data." },
            { question: "Do I need to be a programmer?", answer: "Basic coding in Python and R is taught as part of the course. You don't need a prior CS degree." },
            { question: "What tools are covered?", answer: "We cover BLAST for sequence alignment, PyMOL for molecular visualization, and various genomic analysis tools." },
            { question: "What are the career prospects?", answer: "Roles include Bioinformatician, Research Scientist, and Computational Biologist in biotech and pharma companies." },
            { question: "Will I learn about Next-Generation Sequencing (NGS)?", answer: "Yes, we have a specialized module on NGS data analysis and genome assembly techniques." },
            { question: "What is the role of R in Bioinformatics?", answer: "R is extensively used for statistical analysis of biological datasets and creating publication-quality graphics." },
            { question: "Do you cover Protein-Ligand docking?", answer: "Yes, structural bioinformatics modules cover molecular docking and drug design principles using tools like AutoDock." },
            { question: "Are there any research paper writing modules?", answer: "We provide guidance on how to interpret biological data for scientific publications and research posters." },
            { question: "Can I apply for a PhD after this course?", answer: "Absolutely. This course strengthens your computational foundation, making you a strong candidate for bioinformatics research programs." }
        ]
    },
    {
        title: "Pharmacovigilance",
        category: "pharma",
        price: "₹14,999",
        img: "/images/pharmaco-vigilance.jpg",
        desc: "Pharmacovigilance is the science of monitoring and ensuring the safety of medicines.",
        link: "/courses/pharmacovigilance",
        modules: [
            { title: 'Drug Safety and Pharmacovigilance Principles', tag: '#DrugSafety', content: 'Core concepts of monitoring drug safety.' },
            { title: 'Adverse Event Reporting Systems', tag: '#AdverseEventReporting', content: 'Systems for collecting safety data.' },
            { title: 'Regulatory Guidelines (FDA, EMA)', tag: '#RegulatoryCompliance', content: 'Global regulations governing drug safety.' },
            { title: 'Risk Management and Assessment', tag: '#RiskManagement', content: 'Evaluating and mitigating drug-related risks.' },
            { title: 'Signal Detection and Analysis', tag: '#SignalDetection', content: 'Identifying potential safety issues early.' },
            { title: 'Medical Case Processing', tag: '#CaseProcessing', content: 'Handling and processing safety cases.' },
            { title: 'Quality Assurance in Pharmacovigilance', tag: '#QualityAssurance', content: 'Ensuring accuracy in safety reporting.' },
            { title: 'Industry Case Studies and Projects', tag: '#PracticalLearning', content: 'Real-world examples and hands-on projects.' }
        ],
        tools: [
            { name: 'Argus Safety', img: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
            { name: 'ArisG', img: 'https://cdn-icons-png.flaticon.com/512/4248/4248408.png' },
            { name: 'MedDRA', img: 'https://cdn-icons-png.flaticon.com/512/2721/2721262.png' },
            { name: 'VigiBase', img: 'https://cdn-icons-png.flaticon.com/512/2857/2857433.png' }
        ],
        reviews: [
            { name: "Simran Kaur", role: "Drug Safety Associate", review: "Drug safety surveillance is a complex field, but Gyantrix made it very accessible and structured.", img: "https://img.freepik.com/free-photo/beautiful-indian-woman-smiling-sunny-day_23-2149454179.jpg" },
            { name: "Rajesh Pillai", role: "PV Specialist", review: "The MedDRA coding and adverse event reporting training was very detailed and highly practical.", img: "https://img.freepik.com/free-photo/portrait-young-handsome-indian-man_114579-80864.jpg" }
        ],
        faqs: [
            { question: "What is Pharmacovigilance (PV)?", answer: "PV is the science and activities relating to the detection, assessment, understanding, and prevention of adverse effects of medicines." },
            { question: "What tools are used in PV?", answer: "Industry-standard databases like Oracle Argus Safety and ArisG are used for case processing and reporting." },
            { question: "Is this course for pharmacy graduates?", answer: "Yes, B.Pharm, Pharm.D, and other life science graduates are perfectly suited for a career in PV." },
            { question: "What is MedDRA?", answer: "MedDRA is a rich and highly specific standardized medical terminology developed by ICH for sharing regulatory information." },
            { question: "What is a Serious Adverse Event (SAE)?", answer: "You will learn the criteria for SAEs and the strict timelines for reporting them to regulatory authorities like the FDA and EMA." },
            { question: "Will I learn about Signal Detection?", answer: "Yes, the course covers signal detection methods to identify new or changing safety profiles of drugs." },
            { question: "What is the role of a Drug Safety Associate?", answer: "They are responsible for triage, data entry, and narrative writing for adverse event cases." },
            { question: "Do you cover Periodic Safety Update Reports (PSUR)?", answer: "Yes, we teach you how to compile aggregate safety reports necessitated by regulatory bodies." },
            { question: "Can I transition from retail pharmacy to PV?", answer: "PV is an excellent office-based career path for pharmacists looking to move into the corporate pharma sector." }
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
            { title: 'Fundamentals of Nanotechnology', tag: '#Nanotechnology', content: 'Basic principles of working at the nanoscale.' },
            { title: 'Nano-Materials in Agriculture', tag: '#NanoMaterials', content: 'Using nanomaterials to enhance farming.' },
            { title: 'Precision Farming Applications', tag: '#PrecisionFarming', content: 'Targeted agricultural interventions using nanotech.' },
            { title: 'Nano-Fertilizer Development', tag: '#NanoFertilizers', content: 'Creating efficient, nano-scale plant nutrients.' },
            { title: 'Smart Delivery Systems', tag: '#SmartDelivery', content: 'Advanced delivery mechanisms for agrochemicals.' },
            { title: 'Environmental Impact Assessment', tag: '#EnvironmentalImpact', content: 'Evaluating the safety of nanotech in nature.' },
            { title: 'Quality Control in Nano-Products', tag: '#QualityControl', content: 'Ensuring standards in nanotech manufacturing.' },
            { title: 'Research Project in Agri-Nanotech', tag: '#AgriNanotech', content: 'Hands-on research in agricultural nanotechnology.' }
        ],
        tools: [
            { name: 'SEM', img: 'https://cdn-icons-png.flaticon.com/512/3201/3201246.png' },
            { name: 'TEM', img: 'https://cdn-icons-png.flaticon.com/512/5721/5721752.png' },
            { name: 'AFM', img: 'https://cdn-icons-png.flaticon.com/512/2555/2555577.png' },
            { name: 'XRD', img: 'https://cdn-icons-png.flaticon.com/512/2301/2301129.png' }
        ],
        reviews: [
            { name: "Krishna Swami", role: "Nanotech Specialist", review: "A very specialized course with great insights into nano-agriculture and nano-medicine applications.", img: "https://img.freepik.com/premium-photo/indian-man-portrait_115086-559.jpg" },
            { name: "Soumya", role: "Research Associate", review: "The characterization techniques (SEM, TEM) were explained with great clarity and professional depth.", img: "https://img.freepik.com/free-photo/young-woman-smiling-camera_23-2148952994.jpg" }
        ],
        faqs: [
            { question: "How is Nanotechnology used in Agriculture?", answer: "It's used for precision farming, smart delivery of fertilizers, and as sensors for detecting soil health and pathogens." },
            { question: "What characterization techniques will I learn?", answer: "We cover Scanning Electron Microscopy (SEM), Transmission Electron Microscopy (TEM), and Atomic Force Microscopy (AFM) in detail." },
            { question: "Is this course suitable for biotech students?", answer: "Definitely. Nanotech is a key enabling technology for modern biotechnology and life sciences." },
            { question: "What are Nano-Fertilizers?", answer: "They are nutrients delivered at a nanoscale to ensure better absorption by plants and minimal environmental waste." },
            { question: "Are there any safety regulations for Nanomaterials?", answer: "Yes, we have a dedicated module on the toxicity and environmental impact assessment of engineered nanoparticles." },
            { question: "What is Carbon Nanotube (CNT) application in agriculture?", answer: "CNTs are explored for improving seed germination and as delivery vehicles for genetic materials into plant cells." },
            { question: "Will I learn about Nano-Biosensors?", answer: "Yes, you'll learn how nano-sensors are developed for early detection of plant diseases and soil moisture levels." },
            { question: "Is there a lab component for material synthesis?", answer: "We cover various chemical and green synthesis methods for producing silver, gold, and zinc oxide nanoparticles." },
            { question: "What are the job opportunities in this field?", answer: "Opportunities exist in Agri-tech startups, Fertilizer industries, and research labs focusing on sustainable farming." }
        ]
    },
    {
        title: "Digital Marketing",
        category: "non-it-marketing popular",
        price: "₹14,999",
        img: "/images/digitalmarketing1.png",
        desc: "Empower brands to reach, engage, and grow through data-driven digital marketing strategies.",
        link: "/courses/digitalmarketing",
        modules: [
            { title: 'Search Engine Optimization (SEO)', tag: '#SEO', content: 'Master strategies to improve website ranking.' },
            { title: 'Social Media Marketing', tag: '#SocialMediaMarketing', content: 'Engage audiences on major social platforms.' },
            { title: 'Content Marketing Strategy', tag: '#ContentMarketing', content: 'Create compelling content that drives action.' },
            { title: 'Google Analytics & Data Interpretation', tag: '#Analytics', content: 'Analyze data to optimize marketing performance.' },
            { title: 'Email Marketing Automation', tag: '#EmailMarketing', content: 'Automate campaigns for better customer retention.' },
            { title: 'Pay-Per-Click Advertising', tag: '#PPC', content: 'Run effective paid ad campaigns.' },
            { title: 'Marketing Funnel Optimization', tag: '#MarketingFunnel', content: 'Convert leads into customers efficiently.' },
            { title: 'Digital Campaign Management', tag: '#CampaignManagement', content: 'Plan and execute successful digital campaigns.' }
        ],
        tools: [
            { name: 'Google Analytics', img: 'https://cdn.iconscout.com/icon/free/png-256/google-analytics-2038788-1721678.png' },
            { name: 'Google Ads', img: 'https://cdn.iconscout.com/icon/free/png-256/google-ads-2-1175204.png' },
            { name: 'Facebook Ads', img: 'https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png' },
            { name: 'SEMrush', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/SEMrush_logo.svg/1200px-SEMrush_logo.svg.png' },
            { name: 'WordPress', img: 'https://cdn.iconscout.com/icon/free/png-256/wordpress-22-1175168.png' },
            { name: 'Canva', img: 'https://cdn.iconscout.com/icon/free/png-256/canva-1-1175217.png' },
            { name: 'Mailchimp', img: 'https://cdn.iconscout.com/icon/free/png-256/mailchimp-3-1175056.png' },
            { name: 'Hootsuite', img: 'https://cdn-icons-png.flaticon.com/512/2504/2504910.png' }
        ],
        reviews: [
            { name: "Priya Sharma", role: "Digital Marketer", review: "The SEO and SMM strategies I learned here helped me double my client's organic traffic within months.", img: "https://img.freepik.com/free-photo/beautiful-indian-woman-smiling-sunny-day_23-2149454179.jpg" },
            { name: "Manish Rao", role: "Performance Marketer", review: "Google Ads and Analytics modules are very hands-on. It's the perfect course for career growth.", img: "https://img.freepik.com/free-photo/portrait-young-handsome-indian-man_114579-80864.jpg" }
        ],
        faqs: [
            { question: "What are the most in-demand skills in Digital Marketing?", answer: "SEO, Performance Marketing (Ads), Social Media Strategy, and Content Marketing are currently the top skills sought by employers." },
            { question: "Will I get certified by Google?", answer: "Yes, our course prepares you for various Google Ads and Analytics certifications, which you can earn alongside our academy certificate." },
            { question: "Is heavy coding required for SEO?", answer: "No, SEO is about optimization and content strategy. Basic understanding of HTML helps, but heavy coding is not required." },
            { question: "How do you provide practical training?", answer: "You will work on live campaigns, use tools like SEMrush and Google Ads, and manage a mock brand's social presence." },
            { question: "What is Performance Marketing?", answer: "It's a form of digital advertising where the advertiser pays only when a specific action (like a click or sale) is completed." },
            { question: "Will I learn about Influencer Marketing?", answer: "Yes, we cover how to identify, reach out to, and manage influencer partnerships to grow brand awareness." },
            { question: "How do you handle Email Marketing?", answer: "We teach you how to use tools like Mailchimp to build subscriber lists and design automated email funnels." },
            { question: "Is there a module on Video Marketing?", answer: "Yes, we cover YouTube SEO and how to create engaging video content strategies for platforms like Instagram and TikTok." },
            { question: "What kind of career support is provided for freelancers?", answer: "We provide guidance on how to set up your profile on Upwork/Fiverr and how to pitch to international clients." }
        ]
    },
    {
        title: "Finance",
        category: "non-it-marketing",
        price: "₹14,999",
        img: "/images/Finance.png",
        desc: "Finance involves managing money, investments, and financial planning to help individuals and businesses make informed decisions.",
        link: "/courses/finance",
        modules: [
            { title: 'Financial Accounting', tag: '#Accounts', content: 'Principles of accounting and financial statement analysis.' },
            { title: 'Investment Banking', tag: '#Investment', content: 'Valuation, mergers, and acquisitions.' },
            { title: 'Corporate Finance', tag: '#CorporateFinance', content: 'Managing capital structure and funding decisions.' },
            { title: 'Taxation & Auditing', tag: '#Tax', content: 'Compliance with tax laws and auditing standards.' },
            { title: 'Financial Modeling', tag: '#Modeling', content: 'Building robust models for financial forecasting.' },
            { title: 'Portfolio Management', tag: '#Portfolio', content: 'Strategies for managing investment portfolios.' },
            { title: 'Risk Management', tag: '#Risk', content: 'Identifying and mitigating financial risks.' },
            { title: 'Fintech Overview', tag: '#Fintech', content: 'Introduction to financial technology trends.' }
        ],
        tools: [
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'Tally', img: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Tally_Prime_Logo.png' },
            { name: 'QuickBooks', img: 'https://cdn.iconscout.com/icon/free/png-256/quickbooks-2-1175207.png' },
            { name: 'SAP FICO', img: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' }
        ],
        reviews: [
            { name: "Rahul Verma", role: "Financial Analyst", review: "Tally and SAP FICO training was very practical. It helped me get placed in a top accounting firm.", img: "https://img.freepik.com/free-photo/portrait-handsome-young-indian-man_114579-91336.jpg" },
            { name: "Sneha Reddy", role: "Investment Banker", review: "The financial modeling module is a must-have for anyone looking to enter the investment banking world.", img: "https://img.freepik.com/free-photo/young-woman-smiling-camera_23-2148952994.jpg" }
        ],
        faqs: [
            { question: "What finance tools are covered in this course?", answer: "We provide intensive training on Tally Prime, SAP FICO, Advanced Excel, and QuickBooks." },
            { question: "Can I switch to Finance from a non-finance background?", answer: "Yes, our course starts with Accounting Fundamentals (Golden Rules of Accounting) to build a strong base for anyone." },
            { question: "What is Financial Modeling?", answer: "It's the task of building an abstract representation of a real-world financial situation, used for decision making and analysis." },
            { question: "Are there placements in big accounting firms?", answer: "Yes, our graduates are frequently placed in top audit firms and corporate finance departments of MNCs." },
            { question: "What is SAP FICO?", answer: "SAP FICO (Financial Accounting and Controlling) is a core module in SAP ERP that manages financial transactions and reporting." },
            { question: "Will I learn about GST and Income Tax?", answer: "Yes, we have dedicated modules on direct and indirect taxation, including GST filing and payroll compliance." },
            { question: "Is Investment Banking covered in depth?", answer: "We cover the core aspects of investment banking including DCF valuation, M&A basics, and financial statement analysis." },
            { question: "Do you provide training on stock market basics?", answer: "Yes, we introduce fundamental and technical analysis for those interested in equity research and portfolio management." },
            { question: "How do I prepare for a finance interview?", answer: "We provide mock interviews focusing on accounting entries, balance sheet analysis, and financial problem-solving cases." }
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
            { title: 'Talent Acquisition & Recruitment', tag: '#TalentManagement', content: 'Effective hiring strategies and processes.' },
            { title: 'Employee Relations & Engagement', tag: '#PeopleManagement', content: 'Building a positive workplace culture.' },
            { title: 'Performance Management Systems', tag: '#PerformanceAnalytics', content: 'Evaluating and optimizing employee performance.' },
            { title: 'HR Compliance & Legal Aspects', tag: '#HRCompliance', content: 'Navigating employment laws and regulations.' },
            { title: 'Compensation & Benefits Administration', tag: '#PayrollManagement', content: 'Managing salaries and benefits packages.' },
            { title: 'Training & Development Strategies', tag: '#LearningAndDevelopment', content: 'Upskilling the workforce effectively.' },
            { title: 'HR Analytics & Reporting', tag: '#HRAnalytics', content: 'Using data to drive HR strategy.' },
            { title: 'Organizational Development', tag: '#ChangeManagement', content: 'Facilitating organizational change and growth.' }
        ],
        tools: [
            { name: 'Workday', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968762.png' },
            { name: 'BambooHR', img: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' },
            { name: 'LinkedIn Recruiter', img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' }
        ],
        reviews: [
            { name: "Kavya Nair", role: "HR Generalist", review: "Talent acquisition and payroll modules were very helpful. Excellent career guidance from the mentors.", img: "https://img.freepik.com/free-photo/portrait-young-woman-happy-with-her-work_1157-39906.jpg" },
            { name: "Amit Malhotra", role: "HR Analyst", review: "The HR Analytics training gave me a major competitive edge in the current job market. Highly recommended.", img: "https://img.freepik.com/premium-photo/indian-man-portrait_115086-559.jpg" }
        ],
        faqs: [
            { question: "What HR tools will I learn?", answer: "The course provides hands-on experience with Workday, BambooHR, and LinkedIn Recruiter for talent sourcing." },
            { question: "Is HR Analytics covered?", answer: "Yes, we have a dedicated module on using data and Excel to drive HR decisions and track employee performance metrics." },
            { question: "What are the common job roles after this course?", answer: "Roles include HR Generalist, Talent Acquisition Specialist, HR Analyst, and Payroll Manager." },
            { question: "Do you provide certification for HR compliance?", answer: "Yes, our completion certificate covers your mastery of HR compliance, labor laws, and employee relations." },
            { question: "What is the importance of Talent Management?", answer: "You'll learn how to attract, develop, and retain high-performing employees to meet organizational goals." },
            { question: "Do you cover Indian Labor Laws?", answer: "Yes, we cover essential Indian labor laws (PF, ESI, Gratuity) and their practical implementation in payroll." },
            { question: "Will I learn how to build an employee handbook?", answer: "Yes, creating HR policies and employee handbooks is a core part of the practical assignments." },
            { question: "What is HRBP and is it covered?", answer: "HR Business Partner roles are crucial for linking HR with business. We cover the core competencies required for HRBP roles." },
            { question: "Do you help with SHRM or PHR exam preparation?", answer: "While we provide our own certification, our curriculum is aligned with global standards like SHRM and PHR." }
        ]
    },
    {
        title: "Business Analyst",
        category: "non-it-marketing",
        price: "₹14,999",
        img: "/images/businessanalyst1.jpg",
        desc: "A Business Analyst identifies business needs and recommends effective solutions.",
        link: "/courses/businessanalyst",
        modules: [
            { title: 'Business Analysis Fundamentals', tag: '#BusinessAnalysis', content: 'Core concepts and role of a BA.' },
            { title: 'Requirements Engineering', tag: '#RequirementsManagement', content: 'Eliciting and documenting business requirements.' },
            { title: 'Data Analysis with SQL', tag: '#SQL', content: 'Querying databases for business insights.' },
            { title: 'Process Modeling', tag: '#ProcessModeling', content: 'Visualizing business processes.' },
            { title: 'Stakeholder Management', tag: '#StakeholderManagement', content: 'Managing communication and expectations.' },
            { title: 'Agile Methodologies', tag: '#Agile', content: 'Applying Agile principles in analysis.' },
            { title: 'Business Intelligence Tools', tag: '#BusinessIntelligence', content: 'Using tools to present data.' },
            { title: 'Real-world Case Studies', tag: '#PracticalLearning', content: 'Solving actual business problems.' }
        ],
        tools: [
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'SQL', img: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png' },
            { name: 'Tableau', img: 'https://cdn.iconscout.com/icon/free/png-256/tableau-software-1-1175069.png' },
            { name: 'Jira', img: 'https://cdn.iconscout.com/icon/free/png-256/jira-1-1175159.png' }
        ],
        reviews: [
            { name: "Ritu Singh", role: "Business Analyst", review: "Requirements gathering and Agile methodologies were taught with real-world scenarios and depth.", img: "https://img.freepik.com/free-photo/young-woman-wearing-sari_23-2149400847.jpg" },
            { name: "Vikas Kumar", role: "Data Consultant", review: "Data visualization with Tableau was a huge highlight for me. Very industry-oriented and practical.", img: "https://img.freepik.com/free-photo/portrait-handsome-young-indian-man_114579-91336.jpg" }
        ],
        faqs: [
            { question: "What is the primary role of a Business Analyst?", answer: "A BA acts as a bridge between business stakeholders and technical teams, translating business needs into technical requirements." },
            { question: "What tools are essential for a BA?", answer: "Key tools include Jira for project tracking, Tableau for visualization, SQL for data retrieval, and MS Visio for process modeling." },
            { question: "Is this course suitable for IT professionals moving to management?", answer: "Yes, it's one of the best paths for developers or testers wanting to transition into functional and leadership roles." },
            { question: "Will I learn Agile and Scrum?", answer: "Yes, the course covers Agile methodologies, Scrum frameworks, and how to write effective User Stories." },
            { question: "What is Requirement Elicitation?", answer: "It's the process of gathering requirements from stakeholders through interviews, surveys, and workshops, which we cover in detail." },
            { question: "Do you provide training on BRD and FRD documentation?", answer: "Yes, writing Business Requirement Documents (BRD) and Functional Requirement Documents (FRD) is a key skill taught." },
            { question: "Will I learn about Gap Analysis?", answer: "Yes, comparing the 'As-Is' state with the 'To-Be' state to identify business gaps is a core module." },
            { question: "Is there a focus on prototyping for BAs?", answer: "We teach you how to create low-fidelity wireframes using tools like Balsamiq to visualize solutions for stakeholders." },
            { question: "Do you help with IIBA (ECBA/CCBA) certification preparation?", answer: "Our curriculum aligns with the BABOK guide, providing a strong foundation for IIBA certifications." }
        ]
    },
    {
        title: "Sales Force",
        category: "non-it-marketing",
        price: "₹14,999",
        img: "/images/SalesForce.png",
        desc: "Salesforce is a powerful cloud-based CRM platform used to manage sales, customer data, and business workflows.",
        link: "/courses/salesForce",
        modules: [
            { title: 'Salesforce Fundamentals', tag: '#CRM', content: 'Introduction to the Salesforce platform.' },
            { title: 'Admin Configuration', tag: '#Admin', content: 'Setting up and managing Salesforce accounts.' },
            { title: 'Automation Tools (Flow Builder)', tag: '#Automation', content: 'Creating automated workflows.' },
            { title: 'Sales Cloud & Service Cloud', tag: '#Cloud', content: 'Managing sales and service operations.' },
            { title: 'Reports & Dashboards', tag: '#Analytics', content: 'Analyzing data within Salesforce.' },
            { title: 'Apex Programming', tag: '#Development', content: 'Customizing Salesforce with code.' },
            { title: 'Lightning Web Components (LWC)', tag: '#Frontend', content: 'Building modern user interfaces.' },
            { title: 'Integrations & APIs', tag: '#Integration', content: 'Connecting Salesforce with other systems.' },
            { title: 'Capstone Project', tag: '#Project', content: 'Implementing a full-scale CRM solution.' }
        ],
        tools: [
            { name: 'Salesforce', img: 'https://cdn.iconscout.com/icon/free/png-256/salesforce-2-1175067.png' },
            { name: 'Jira', img: 'https://cdn.iconscout.com/icon/free/png-256/jira-1-1175159.png' },
            { name: 'Slack', img: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png' }
        ],
        reviews: [
            { name: "Arjun Das", role: "Salesforce Admin", review: "Salesforce Admin and App Builder training was very comprehensive and easy to follow for beginners.", img: "https://img.freepik.com/free-photo/portrait-young-handsome-indian-man_114579-80864.jpg" },
            { name: "Akshaya Patel", role: "Salesforce Architect", review: "Apex and LWC modules were challenging, but the mentors made them easy to master through practice.", img: "https://img.freepik.com/free-photo/young-woman-smiling-camera_23-2148952994.jpg" }
        ],
        faqs: [
            { question: "Do I need to know coding for Salesforce?", answer: "Not initially. You can start as a Salesforce Administrator (No-Code). Coding (Apex) is needed for the Developer track, which we also cover." },
            { question: "What certifications can I take after this?", answer: "This course prepares you for Salesforce Certified Administrator (ADM 201) and Salesforce Certified Platform App Builder." },
            { question: "Is Salesforce only for sales professionals?", answer: "No, it's a complete business platform used for Service, Marketing, Commerce, and Analytics across all industries." },
            { question: "Will I get a hands-on developer org?", answer: "Yes, you will work on your OWN Salesforce Trailhead playground and developer orgs to build real-world applications." },
            { question: "What is Apex and is it similar to Java?", answer: "Apex is Salesforce's proprietary object-oriented language. It is very similar to Java in syntax, making it easy for Java developers to learn." },
            { question: "Will I learn about Salesforce Lightning?", answer: "Yes, we focus on the modern Salesforce Lightning Experience and building Lightning Web Components (LWC)." },
            { question: "Do you cover Process Automation in Salesforce?", answer: "Absolutely. We cover Flow Builder, which is the most powerful tool for no-code automation in Salesforce." },
            { question: "What is the role of a Salesforce Architect?", answer: "Archticects design the high-level structure of Salesforce environments for large enterprises. We introduce architectural principles in the advanced modules." },
            { question: "Is there support for the Salesforce Administrator exam?", answer: "Yes, we provide dumps, mock tests, and exam strategies specifically for the Administrator and App Builder exams." }
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
            { title: 'Molecular Biology Fundamentals', tag: '#MolecularBiology', content: 'Core concepts of molecular genetics.' },
            { title: 'CRISPR and Gene Editing Technologies', tag: '#GeneEditing', content: 'Advanced techniques for genome modification.' },
            { title: 'Recombinant DNA Technology', tag: '#RecombinantDNA', content: 'Methods for combining DNA from different sources.' },
            { title: 'Laboratory Techniques and Safety', tag: '#LabTechniques', content: 'Safe and effective lab practices.' },
            { title: 'Biotech Research Methodologies', tag: '#BiotechResearch', content: 'Approaches to scientific inquiry.' },
            { title: 'Genomics and Proteomics', tag: '#Genomics', content: 'Large-scale analysis of genes and proteins.' },
            { title: 'Ethical Considerations in Genetics', tag: '#BioEthics', content: 'Discussing the moral implications of genetic work.' },
            { title: 'Research Project Implementation', tag: '#ResearchProject', content: 'Conducting independent genetic research.' }
        ],
        tools: [
            { name: 'CRISPR', img: 'https://cdn-icons-png.flaticon.com/512/3208/3208726.png' },
            { name: 'PCR', img: 'https://cdn-icons-png.flaticon.com/512/2312/2312521.png' },
            { name: 'BLAST', img: 'https://cdn-icons-png.flaticon.com/512/1005/1005141.png' },
            { name: 'Vector NTI', img: 'https://cdn-icons-png.flaticon.com/512/3050/3050529.png' }
        ],
        reviews: [
            { name: "Simran Kaur", role: "Geneticist", review: "CRISPR and gene editing modules were fascinating. Great labs and research support provided here.", img: "https://img.freepik.com/free-photo/beautiful-indian-woman-smiling-sunny-day_23-2149454179.jpg" },
            { name: "Aditya Jain", role: "Molecular Biologist", review: "The molecular biology fundamentals were cleared up perfectly by the mentors. Very strong foundation.", img: "https://img.freepik.com/premium-photo/indian-man-portrait_115086-559.jpg" }
        ],
        faqs: [
            { question: "What is the focus of the Genetic Engineering course?", answer: "The course focuses on molecular biology, CRISPR/Cas9 gene editing, and recombinant DNA technology." },
            { question: "Are there lab facilities available?", answer: "Yes, we provide access to simulated labs and partnership facilities for hands-on CRISPR and PCR experiments." },
            { question: "What are the ethical modules about?", answer: "We discuss the bioethical implications of gene editing in humans, animals, and crops to ensure responsible research." },
            { question: "Can I enter the biotech industry after this?", answer: "Yes, this course is designed to prepare you for research roles in biotechnology, pharmaceuticals, and agricultural science." },
            { question: "What is CRISPR-Cas9?", answer: "It's a revolutionary gene-editing tool that allows scientists to precisely alter DNA sequences. It's a key part of our advanced curriculum." },
            { question: "Will I learn about Gene Therapy?", answer: "Yes, we cover how genetic engineering is used to treat or prevent diseases by inserting or replacing genes." },
            { question: "Is there a focus on GMOs in agriculture?", answer: "The course covers the development and regulation of Genetically Modified Organisms (GMOs) for improved crop yields." },
            { question: "What software is used for DNA sequence design?", answer: "We introduce tools like SnapGene and Vector NTI for designing and visualizing recombinant DNA molecules." },
            { question: "What are the safety levels (BSL) for genetic research?", answer: "You will learn about Biosafety Levels (BSL-1 to BSL-4) and the strict safety protocols required for genetic manipulation." }
        ]
    },
    {
        title: "Agriculture Data Analytics",
        category: "agriculture",
        price: "₹14,999",
        img: "/images/AgricultureDataAnalytics.png",
        desc: "Agriculture Data Analytics uses data, technology, and insights to improve crop productivity, farming efficiency, and decision-making.",
        link: "/courses/agricultureDataAnalytics",
        modules: [
            { title: 'Python for Agriculture', tag: '#Backend', content: 'Programming for agricultural applications.' },
            { title: 'SQL & Agricultural Databases', tag: '#Database', content: 'Managing farming data effectively.' },
            { title: 'Machine Learning for Agriculture', tag: '#AI', content: 'Predictive analytics for crop management.' },
            { title: 'Data Visualization', tag: '#Visualization', content: 'Mapping and plotting agricultural trends.' },
            { title: 'Statistical Analysis in Agriculture', tag: '#Analytics', content: 'Interpreting field trial data.' },
            { title: 'AI-driven Farm Automation', tag: '#AI', content: 'Implementing smart farming technologies.' },
            { title: 'Agricultural Business Intelligence', tag: '#BI', content: 'Strategic decision-making for agribusiness.' },
            { title: 'Capstone Project', tag: '#Project', content: 'Developing a data-driven agricultural solution.' }
        ],
        tools: [
            { name: 'Python', img: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' },
            { name: 'Excel', img: 'https://cdn.iconscout.com/icon/free/png-256/microsoft-excel-4-1175163.png' },
            { name: 'QGIS', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/QGIS_logo_new.svg/1200px-QGIS_logo_new.svg.png' },
            { name: 'R', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png' }
        ],
        reviews: [
            { name: "Rajesh Pillai", role: "Agri-Tech Lead", review: "Remote sensing and GIS modules are very unique. Highly specialized training for modern farming.", img: "https://img.freepik.com/free-photo/portrait-young-handsome-indian-man_114579-80864.jpg" },
            { name: "Soumya", role: "Precision Farmer", review: "Using data to improve crop yields was a great learning experience. Very practical and insightful.", img: "https://img.freepik.com/free-photo/young-woman-smiling-camera_23-2148952994.jpg" }
        ],
        faqs: [
            { question: "How does Data Analytics help in Agriculture?", answer: "By analyzing soil data, weather patterns, and crop health, analytics helps farmers make data-driven decisions to increase yield and reduce waste." },
            { question: "What is Precision Farming?", answer: "Precision farming uses GPS, sensors, and data analysis to provide exact amounts of water, fertilizer, and pesticides to specific areas of a field." },
            { question: "Do I need to be a farmer to take this course?", answer: "No, this course is ideal for data analysts, agronomists, and tech professionals looking to specialize in the Agri-Tech sector." },
            { question: "What tools are used in Agri-Analytics?", answer: "We use Python for data processing, QGIS for spatial analysis, and Machine Learning models for yield prediction." },
            { question: "What is the importance of Satellite Data?", answer: "Satellite imagery allows for large-scale monitoring of crop health (NDVI) and identifying irrigation needs without visiting the field." },
            { question: "Do you cover drone technology?", answer: "Yes, we have a specialized module on how to process and analyze high-resolution multispectral data collected by drones." },
            { question: "What are the job prospects in Agri-Tech?", answer: "Roles include Agri-Data Scientist, Farm Management Consultant, and Consultant for International Agri-Agencies." },
            { question: "Will I learn about crop yield forecasting?", answer: "Yes, yield forecasting using historical weather and production data is a core part of the machine learning module." },
            { question: "Is there a module on sustainable farming?", answer: "Yes, we emphasize how data analytics can reduce chemical footprint and support carbon sequestration and regenerative farming." }
        ]
    },
    // Trending Courses
    {
        title: "Certified Data Scientist Program (ML and DL) | CDSP",
        category: "trending it",
        price: "₹34,999",
        img: "/images/DS.webp",
        desc: "Advanced data science program covering Machine Learning and Deep Learning.",
        link: "/courses/certifiedDataScientist",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Fundamentals of Data Analysis (Basic and Advance) | FDABA",
        category: "trending it",
        price: "₹19,999",
        img: "/images/dataanalyst.png",
        desc: "Begin your journey into data science with foundational concepts and tools.",
        link: "/courses/elementaryDataScience",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Certified Web Developer | CWD",
        category: "trending it",
        price: "₹24,999",
        img: "/images/fullstackdev.png",
        desc: "Become a certified web developer mastering modern web technologies.",
        link: "/courses/certifiedWebDeveloper",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    // Placement Guarantee Courses
    {
        title: "Certification Digital Marketing Specialist Course | CDMSC",
        category: "placement non-it-marketing",
        price: "₹29,999",
        img: "/images/digitalmarketing1.png",
        desc: "Become a certified digital marketing specialist with 100% placement support.",
        link: "/courses/digitalMarketingSpecialist",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Certified Full Stack Development Mastery | CFSDM",
        category: "placement it",
        price: "₹39,999",
        img: "/images/fullstackdev.png",
        desc: "Master full stack development with a guarantee of job placement.",
        link: "/courses/fullStackMastery",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Certified Data Science and Analyst Program | CDSAP",
        category: "placement it",
        price: "₹39,999",
        img: "/images/datascience.png",
        desc: "Comprehensive data science and analytics program with placement guarantee.",
        link: "/courses/dataScienceAnalyst",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    // Artificial Intelligence
    {
        title: "Certified Artificial Intelligence Developer | CAID",
        category: "it",
        price: "₹29,999",
        img: "/images/AI.png",
        desc: "Become a certified AI developer and build intelligent systems.",
        link: "/courses/artificial-intelligence-developer",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Generative AI and Large Language Models with Python",
        category: "it",
        price: "₹24,999",
        img: "/images/AI.jpeg",
        desc: "Master Generative AI and LLMs using Python.",
        link: "/courses/generative-ai",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "AI Prompt Engineer | APE",
        category: "it",
        price: "₹19,999",
        img: "/images/aibgimg.png",
        desc: "Master the art of prompt engineering for AI models.",
        link: "/courses/prompt-engineer",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Certified AI-ML Engineer Course | CAME",
        category: "it",
        price: "₹34,999",
        img: "/images/AI.png",
        desc: "Comprehensive course to become a certified AI-ML Engineer.",
        link: "/courses/ai-ml-engineer",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    // Business Development
    {
        title: "Certified Meta Business Suite Professional | CMBSP",
        category: "non-it-marketing",
        price: "₹19,999",
        img: "/images/digital-marketing-png.png",
        desc: "Master Meta Business Suite for professional marketing.",
        link: "/courses/meta-business-suite",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Certified Advanced Digital Sales Navigator | CADSN",
        category: "non-it-marketing",
        price: "₹19,999",
        img: "/images/digitalmarketing1.png",
        desc: "Advanced strategies for digital sales navigation.",
        link: "/courses/digital-sales-navigator",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Certified Global Business Analyst Program | CGBAP",
        category: "non-it-marketing",
        price: "₹24,999",
        img: "/images/businessanalyst.png",
        desc: "Global program for aspiring Business Analysts.",
        link: "/courses/global-business-analyst",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    // Coding
    {
        title: "Certified Python Developer | CPD",
        category: "it",
        price: "₹19,999",
        img: "/images/python.jpeg",
        desc: "Become a certified Python Developer.",
        link: "/courses/python-developer",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Certified DevOps Engineer | CDE",
        category: "it",
        price: "₹29,999",
        img: "/images/DevOps.png",
        desc: "Master DevOps practices and tools.",
        link: "/courses/devops-engineer",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Pedestal C | Python | Java",
        category: "it",
        price: "₹19,999",
        img: "/images/codingproject.png",
        desc: "Comprehensive training in C, Python, and Java.",
        link: "/courses/c-python-java",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Flutter Development From Basic Advance",
        category: "it",
        price: "₹24,999",
        img: "/images/UI&UX.png",
        desc: "Learn Flutter development from basic to advance.",
        link: "/courses/flutter-development",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    },
    {
        title: "Certification In Java Using Jsp",
        category: "it",
        price: "₹19,999",
        img: "/images/javalogo.png",
        desc: "Certification course in Java using JSP.",
        link: "/courses/java-jsp",
        modules: [],
        tools: [],
        reviews: [],
        faqs: []
    }
];
