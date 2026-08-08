"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("Submitting...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Thank you! We'll contact you soon.");

        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
        });
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to submit the form.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-blue-600 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Talk to Our Learning Experts
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-10">
          Tell us about your learning requirements and our experts
          will get in touch with you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
          >
            Submit
          </button>
        </form>

        {message && (
          <p className="text-center mt-6 font-medium text-gray-700">
            {message}
          </p>
        )}

      </div>
    </section>
  );
}