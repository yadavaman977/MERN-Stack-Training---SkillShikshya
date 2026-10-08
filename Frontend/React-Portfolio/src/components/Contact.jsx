
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check empty fields
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    // Email validation
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email!");
      return;
    }

    // Success message
    toast.success("Message sent successfully!");

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-screen-md container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Contact <span className="text-red-600">Me</span>
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Feel free to contact me for any project or opportunity.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-red-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-red-500"
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-red-500"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
