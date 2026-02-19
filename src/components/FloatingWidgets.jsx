import React, { useState, useEffect, useRef } from 'react';
import { generateAIResponse } from '../utils/aiService';
import './FloatingWidgets.css';

const FloatingWidgets = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'ai', text: 'Hello! I am your Gyantrix AI virtual assistant. I am here to provide clear and detailed answers to all your career and course-related questions. How can I help you today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const toggleChat = () => setIsOpen(!isOpen);


    const handleSend = async (e) => {
        e.preventDefault();
        const userMsg = inputValue.trim();
        if (!userMsg) return;

        // Reset input and show user message
        setInputValue('');
        const updatedMessages = [...messages, { type: 'user', text: userMsg }];
        setMessages(updatedMessages);
        setIsTyping(true);

        try {
            // Get response from the real AI service
            const aiResponse = await generateAIResponse(userMsg, updatedMessages.slice(1));

            setIsTyping(false);
            setMessages(prev => [...prev, { type: 'ai', text: aiResponse }]);
        } catch (error) {
            console.error("Chat Error:", error);
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, {
                    type: 'ai',
                    text: "I'm having trouble connecting to my knowledge base. Please try again or check your configuration."
                }]);
            }, 1000);
        }
    };

    return (
        <div className="floating-widgets-container">
            {/* WhatsApp Widget */}
            <a
                href="https://wa.me/917386879818?text=Hi%20Gyantrix%2C%20I%20have%20a%20query%20about%20your%20courses."
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
                <span style={{ display: 'none' }}>WhatsApp</span>
            </a>

            {/* AI Chat Widget */}
            <div className="ai-chat-wrapper">
                {isOpen && (
                    <div className="ai-chat-box">
                        <div className="chat-header">
                            <div className="header-info">
                                <span className="online-indicator"></span>
                                <div>
                                    <h3>Gyantrix AI</h3>
                                    <span style={{ fontSize: '10px', opacity: 0.8 }}>Professional Virtual Assistant</span>
                                </div>
                            </div>
                            <button className="close-chat" onClick={toggleChat}>&times;</button>
                        </div>
                        <div className="chat-messages" ref={scrollRef}>
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`message ${msg.type}`}>
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="message ai typing">
                                    <span></span><span></span><span></span>
                                </div>
                            )}
                        </div>
                        <form className="chat-input-area" onSubmit={handleSend}>
                            <input
                                type="text"
                                placeholder="Type your question properly..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button type="submit" className="send-msg">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                )}

                <button
                    className="ai-chat-float"
                    onClick={toggleChat}
                    title="Open AI Chat"
                >
                    {isOpen ? (
                        <i className="fas fa-times"></i>
                    ) : (
                        <i className="fas fa-robot"></i>
                    )}
                </button>
            </div>
        </div>
    );
};

export default FloatingWidgets;
