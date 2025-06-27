import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [f, setF] = useState({ name:"", email:"", message:"" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = e => setF({ ...f, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      const res = await axios.post("https://mern-backend-ofcu.onrender.com/api/messages", f);
      setMsg(res.data.success ? "✅ Message sent successfully!" : "❌ Failed to send message.");
      if (res.data.success) setF({ name:"", email:"", message:"" });
    } catch {
      setMsg("❌ Server error. Try again later.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-12 px-6 bg-gray-900 text-gray-100">
      <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        {["name","email"].map(field => (
          <input
            key={field}
            name={field}
            type={field==="email" ? "email" : "text"}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={f[field]}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded border border-gray-600"
            required
          />
        ))}
        <textarea
          name="message"
          placeholder="Message"
          value={f.message}
          onChange={handleChange}
          className="w-full p-3 bg-gray-700 rounded border border-gray-600"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-white transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {msg && <p className="text-center text-sm mt-2">{msg}</p>}
      </form>
    </section>
  );
};

export default Contact;
