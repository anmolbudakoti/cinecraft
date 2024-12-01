import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-custom-gray min-h-screen py-10 px-5">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-white">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-400 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col justify-center bg-gray-400 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Details</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Email:</span> support@cinecrate.com
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Phone:</span> +123 456 7890
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Address:</span> CineCrate HQ, 123 Movie Street, Filmland
          </p>
          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <img
                src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
                alt="Facebook"
                className="h-8 w-8"
              />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <img
                src="https://cdn-icons-png.flaticon.com/128/733/733558.png"
                alt="Twitter"
                className="h-8 w-8"
              />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <img
                src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
                alt="Instagram"
                className="h-8 w-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
