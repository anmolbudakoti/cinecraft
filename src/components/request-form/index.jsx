import React, { useState } from "react";

const MovieRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.suggestion) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const onSubmit = (data) => {
        console.log("Received suggestion:", data);
        alert(`Thank you, ${data.name}! Your request has been submitted.`);
      };

    if (onSubmit) {
      onSubmit(formData);
    }

    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", suggestion: "" });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-3 p-6  bg-custom-gray text-white rounded-lg shadow-md text-center">
      <div className="md:w-1/2">
      <h2 className="text-2xl font-semibold mb-2">
        Didn’t find what you were looking for?
      </h2>
      <p className="mb-4">
        Request a movie or give us your suggestion. We’d love to hear from you!
      </p>

      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-4 rounded-lg shadow text-white"
      >
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="mt-1 p-2 w-full border bg-transparent border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-1 p-2 w-full border bg-transparent border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="suggestion"
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
            placeholder="Let us know what you’re looking for"
            className="mt-1 p-2 w-full border bg-transparent border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit Request
        </button>
      </form>
      {submitted && (
        <p className="mt-4 text-green-600 font-semibold">
          Thank you for your suggestion! We’ll look into it.
        </p>
      )}
    </div>
  );
};

export default MovieRequestForm;
