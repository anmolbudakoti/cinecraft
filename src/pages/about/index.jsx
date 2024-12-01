import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-custom-gray min-h-screen py-10 px-5">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          About CineCrate
        </h1>
        <p className="text-lg text-white">
          Your one-stop platform for discovering, exploring, and sharing your love for movies!
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="max-w-4xl mx-auto mt-10 grid gap-8 md:grid-cols-2">
        {/* Mission */}
        <div className="bg-gray-400 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            At CineCrate, our mission is to create a platform that connects movie enthusiasts worldwide. We aim to provide the best tools to explore, track, and discuss movies you love while fostering a vibrant community.
          </p>
        </div>
        {/* Vision */}
        <div className="bg-gray-400 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To be the go-to platform for movie lovers, empowering individuals to discover new films, revisit classics, and share insights with like-minded fans.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Meet the Team</h2>
        <p className="text-white mb-10">
          CineCrate is brought to life by a passionate team of developers and movie enthusiasts.
        </p>
        <div className="flex justify-center items-center gap-8">
          {/* Team Member */}
          <div className="bg-gray-400 rounded-lg shadow-md p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
              alt="Team Member"
              className="h-24 w-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Anmol Budakoti
            </h3>
            <p className="text-gray-600 text-sm">Founder & Lead Developer</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-500 py-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Become a part of our growing community of movie lovers. Share your favorite movies, explore new ones, and discuss with like-minded individuals.
          </p>
          <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
