import { GoogleGenerativeAI } from "@google/generative-ai";
import { coursesData } from "../data/courses";

// To use real AI, add VITE_GEMINI_API_KEY to your .env file
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;
const model = genAI ? genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are the Gyantrix AI Assistant. Provide helpful, natural, and accurate information about Gyantrix Academy.
    
    STRICT RULES:
    1. Answer ONLY what the user asks.
    2. If a user asks something completely unrelated to Gyantrix Academy or its courses, politely suggest they contact support on WhatsApp at +91 73868 79818.
    3. Zero meta-talk: Never mention you are an AI, never discuss API keys, technical logs, or internal configuration.
    4. Use the following context for factual accuracy:
    General Course Fee: ₹14,999.
    Placement: Assistance and hiring partner interview opportunities with over 999+ partners.
    14 Core Courses: AI & Data Science, Full Stack, Medical Coding, Medical Scribing, Genetic Engineering, Pharmacovigilance, Business Analyst, Digital Marketing, Salesforce, Nano Science, Product Management, etc.
    
    DATA SOURCE:
    ${JSON.stringify(coursesData, null, 2)}`
}) : null;

/**
 * Generates an AI response based on user input.
 * Falls back to high-quality simulated responses if API key is missing.
 */
export const generateAIResponse = async (userInput, chatHistory = []) => {
    if (!model) {
        return simulateAI(userInput);
    }

    try {
        const chat = model.startChat({
            history: chatHistory.map(msg => ({
                role: msg.type === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            })),
        });

        const result = await chat.sendMessage(userInput);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("AI Error:", error);
        return "I apologize, I'm unable to retrieve that information right now. Please try asking again shortly.";
    }
};

/**
 * Clean, direct simulated response logic for demo.
 * Focused strictly on user queries without technical logs.
 */
function simulateAI(input) {
    const query = input.toLowerCase().trim();

    // 1. Search for a matching course first (Surgical Matching)
    const matchedCourse = coursesData.find(c => {
        const title = c.title.toLowerCase();
        const words = query.split(/\s+/);

        // Exact Title Match (Highest Precision)
        if (query.includes(title)) return true;

        // Track-Specific Keyword Detection (No-Overlap Logic)
        if (title.includes("digital marketing") && words.includes("marketing")) return true;
        if (title.includes("full stack") && words.includes("stack")) return true;
        if (title.includes("artificial intelligence") && (words.includes("ai") || query.includes("artificial intelligence"))) return true;
        if (title.includes("data science") && (words.includes("science") || words.includes("ds"))) return true;
        if (title.includes("business analyst") && (words.includes("business") || words.includes("ba"))) return true;
        if (title.includes("data analyst") && (words.includes("analyst") && !words.includes("business") && !words.includes("ai"))) return true;
        if (title.includes("medical coding") && words.includes("coding")) return true;
        if (title.includes("medical scribing") && words.includes("scribing")) return true;
        if (title.includes("genetic engineering") && words.includes("genetic")) return true;
        if (title.includes("pharmacovigilance") && (words.includes("pharmacovigilance") || words.includes("pv"))) return true;
        if (title.includes("human resources") && (words.includes("hr") || words.includes("human"))) return true;
        if (title.includes("nano science") && (words.includes("nano") || words.includes("nanotech"))) return true;
        if (title.includes("product management") && (words.includes("product") || words.includes("pm"))) return true;
        if (title.includes("salesforce") && words.includes("salesforce")) return true;

        return false;
    });

    if (matchedCourse) {
        // Handle "What will I learn" / "meaning" / "about"
        if (query.includes('learn') || query.includes('meaning') || query.includes('what is') || query.includes('about') || query.includes('explain') || query.includes('define')) {
            const modulesList = matchedCourse.modules ? matchedCourse.modules.slice(0, 3).map(m => m.title).join(', ') : 'core industry concepts';
            return `In the **${matchedCourse.title}** program, you will learn comprehensive skills including ${modulesList}, and much more. ${matchedCourse.desc} This course is designed to take you from a ${matchedCourse.level || 'foundational'} to professional level.`;
        }

        // Handle "Which technologies" / "tools" / "software"
        if (query.includes('tool') || query.includes('software') || query.includes('technology') || query.includes('stack') || query.includes('technologies')) {
            const toolExplanations = {
                'python': 'an essential language for data automation and backend logic.',
                'react': 'a powerful library for building interactive, lightning-fast user interfaces.',
                'sql': 'the industry standard for managing and querying large-scale databases.',
                'tensorflow': 'a leading framework for building and training advanced AI models.',
                'node.js': 'a runtime environment used to build scalable server-side applications.',
                'power bi': 'a business analytics tool used to create stunning data visualizations.',
                'tableau': 'a visual analytics platform for transforming data into actionable insights.',
                'excel': 'a fundamental tool for organized data calculation and entry-level analysis.',
                'docker': 'used for containerizing applications to ensure they run anywhere consistently.',
                'aws': 'the world\'s most comprehensive cloud platform for hosting global applications.',
                'javascript': 'the core language of the web, used for adding interactivity to sites.',
                'html': 'the fundamental structure of every web page on the internet.',
                'css': 'the styling language used to create beautiful, modern web designs.'
            };

            const toolsList = matchedCourse.tools ? matchedCourse.tools.map(t => {
                const nameLower = t.name.toLowerCase();
                const explanation = toolExplanations[nameLower] || 'an industry-standard tool used for professional projects.';
                return `• **${t.name}**: ${explanation}`;
            }).join('\n') : 'industry-standard technologies';

            return `In the **${matchedCourse.title}** program, you will master these powerful technologies:\n\n${toolsList}\n\nOur curriculum ensures you gain practical, job-ready skills with each of these technologies.`;
        }

        // Handle "How long is the course"
        if (query.includes('long') || query.includes('duration') || query.includes('time') || query.includes('period')) {
            return `The **${matchedCourse.title}** program typically spans **${matchedCourse.duration || '6-8 months'}**. We offer flexible batches (weekday and weekend) to accommodate student and working professional schedules.`;
        }

        // Handle "Will I receive a certificate" / "recognized"
        if (query.includes('certificate') || query.includes('certification') || query.includes('recognize') || query.includes('valid')) {
            return `Yes! Upon successful completion of the **${matchedCourse.title}** course, you will receive an **Industry-Recognized Professional Certification** from Gyantrix Academy. This certificate is globally valid and highly valued by our 999+ hiring partners.`;
        }

        // Handle "job roles" / "careers"
        if (query.includes('role') || query.includes('job') || query.includes('career') || query.includes('position')) {
            return `Graduates of our **${matchedCourse.title}** program are eligible for various high-paying roles such as Specialists, Analysts, and Developers in their respective fields. We offer placement assistance and hiring partner interview opportunities to help you land these positions.`;
        }

        // Handle "Who can join" / "experience" / "prior"
        if (query.includes('who') || query.includes('join') || query.includes('experience') || query.includes('prior') || query.includes('eligible')) {
            return `The **${matchedCourse.title}** course is open to students, graduates, and working professionals. **No prior experience is required** as we start from the absolute fundamentals and gradually move to advanced industry concepts.`;
        }

        // Handle fee/price request
        if (query.includes('fee') || query.includes('price') || query.includes('cost')) {
            return `The investment for the ${matchedCourse.title} program is ${matchedCourse.price}. This covers all training materials, projects, and placement assistance with hiring partner interviews.`;
        }

        // Handle placement specifically
        if (query.includes('placement') || query.includes('assistance') || query.includes('support')) {
            return `We provide **Placement Assistance and hiring partner interview opportunities** for the ${matchedCourse.title} course. This includes resume building, mock interviews with industry experts, and direct referrals to our network of 999+ corporate partners.`;
        }

        // Default course info (Comprehensive summary)
        return `**${matchedCourse.title}**: ${matchedCourse.desc}\n\nAt Gyantrix, this program offers hands-on training using professional tools with full placement support. What specific details (like duration, fees, or certification) can I help you with?`;
    }

    // 2. Generic administrative queries
    if (query.includes('placement') || query.includes('job')) {
        return "We offer placement assistance and hiring partner interview opportunities across all 14 courses, including resume building and mock interviews with experts. Our students have secured positions at top firms like TCS and Wipro.";
    }

    if (query.includes('fee') || query.includes('price')) {
        return "Professional certification programs at Gyantrix are generally priced at ₹14,999, which includes all materials, projects, and career support.";
    }

    if (query.includes('list') || query.includes('courses')) {
        const titles = coursesData.map(c => c.title).join(', ');
        return `We offer 14 core programs including ${titles}. Which field interests you most?`;
    }

    if (query.includes('certificate') || query.includes('certification')) {
        return "All our courses include a professional certification recognized by industry leaders. We have over 999+ hiring partners who value Gyantrix certifications.";
    }

    return "For other queries or specialized assistance, please contact us directly on WhatsApp at +91 73868 79818. We're happy to help!";
}
