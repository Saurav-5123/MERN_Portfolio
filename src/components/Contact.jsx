import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/messages", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
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
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;


