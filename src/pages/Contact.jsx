import React from 'react';

const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp,gif}', { eager: true });
const getAssetUrl = (name) => {
    if (!name || name.startsWith('http')) return name;
    const fileName = name.split('/').pop();
    const path = Object.keys(images).find(key => key.endsWith(fileName));
    return path ? images[path].default : name;
};

const Contact = () => {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.source = "contact_page";

        if (!data.name || !data.email || !data.mobileNumber) {
            alert("⚠ Please fill all required fields before submitting!");
            return;
        }

        try {
            const response = await fetch("https://gyantrix-academy-backend-1.onrender.com/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("✅ Your details were submitted successfully!");
                e.target.reset();
            } else {
                alert("❌ Failed to submit your details. Please try again later.");
            }
        } catch (error) {
            alert("⚠ Unable to connect to the server. Please check your network connection.");
        }
    };

    return (
        <section className="connectplan">
            <h1>Contact Us</h1>

            <div className="connectform-container">
                <div className="connectform">
                    <form className="lead-table" id="universalForm" onSubmit={handleFormSubmit}>
                        <label htmlFor="name">Your Name<span className="star">*</span>:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email Address<span className="star">*</span>:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="number">Mobile Number<span className="star">*</span>:</label>
                        <input type="tel" id="number" name="mobileNumber" required />

                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="connectform">
                    <img src={getAssetUrl("/images/contact.png")} alt="Career Guidance" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
