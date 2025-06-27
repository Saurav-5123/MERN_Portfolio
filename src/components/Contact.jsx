import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");
    try {
      const res = await axios.post(
        "https://mern-backend-ofcu.onrender.com/api/messages",
        formData
      );
      if (res.data.success) {
        setFeedback("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFeedback("❌ Failed to send message.");
      }
    } catch (err) {
      setFeedback("❌ Server error. Try again later.");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-bold">Contact Me</h2>

        <input
          className="w-full p-2 border rounded"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {feedback && (
          <p
            className={`text-sm text-center ${
              feedback.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
