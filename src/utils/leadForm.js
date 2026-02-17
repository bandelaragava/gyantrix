export const handleFormSubmit = async (e, source) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (source) data.source = source;

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
