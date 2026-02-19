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
    2. Zero meta-talk: Never mention you are an AI, never discuss API keys, technical logs, or internal configuration.
    3. Use the following context for factual accuracy:
    General Course Fee: ₹14,999.
    Placement: 100% assistance with over 999+ partners.
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
        // Handle curriculum/modules request
        if (query.includes('curriculum') || query.includes('module') || query.includes('syllabus') || query.includes('what do you teach') || query.includes('subjects')) {
            const modulesList = matchedCourse.modules.map((m, i) => `${i + 1}. ${m.title}`).join(', ');
            return `The curriculum for ${matchedCourse.title} includes: ${modulesList}. Each module is designed to give you hands-on experience with industry-standard tools.`;
        }

        // Handle fee/price request
        if (query.includes('fee') || query.includes('price') || query.includes('cost')) {
            return `The investment for the ${matchedCourse.title} program is ${matchedCourse.price}. This covers all training materials, projects, and 100% placement assistance.`;
        }

        // Handle job/career/placement request
        if (query.includes('placement') || query.includes('job') || query.includes('career') || query.includes('salary')) {
            return `For ${matchedCourse.title}, we offer 100% placement assistance. Our graduates land roles at top companies with starting packages up to 6.5 LPA. We help with resume building and mock interviews.`;
        }

        // Default course info
        return `${matchedCourse.title}: ${matchedCourse.desc} It is a comprehensive program with a fee of ${matchedCourse.price} and full placement support. What specific details would you like to know?`;
    }

    // 2. Generic administrative queries
    if (query.includes('placement') || query.includes('job')) {
        return "We offer 100% placement assistance across all 14 courses, including resume building and mock interviews with experts. Our students have secured positions at top firms like TCS and Wipro.";
    }

    if (query.includes('fee') || query.includes('price')) {
        return "Professional certification programs at Gyantrix are generally priced at ₹14,999, which includes all materials, projects, and career support.";
    }

    if (query.includes('list') || query.includes('courses')) {
        const titles = coursesData.map(c => c.title).join(', ');
        return `We offer 14 core programs including ${titles}. Which field interests you most?`;
    }

    return "I am here to help you with information about our career tracks and training at Gyantrix Academy. Could you please specify which course or career domain you would like to know about?";
}
