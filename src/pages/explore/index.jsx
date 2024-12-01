import React, { useContext, useState } from "react";
import { MovieContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function ExplorePage() {
  
  const {SlidesData} = useContext(MovieContext)
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    year: "",
    comments: "",
  });
  const navigate = useNavigate()

  function handleGoToDetails(id){
    navigate(`/movie-details/${id}`)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User's Movie Request: ", formData);
    alert("Thank you for your suggestion! We'll look into it.");
    setFormData({ title: "", genre: "", year: "", comments: "" });
  };

  return (
    <div className="explore-page bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="hero bg-black py-10 text-center">
        <h1 className="text-4xl font-bold">Explore the World of Movies & Entertainment</h1>
        <p className="text-gray-400 mt-4 text-lg">
          Discover trending movies, must-watch collections, and more!
        </p>
      </section>

      {/* Trending Movies Section */}
      <section className="trending-movies py-10">
        <h2 className="text-3xl font-bold text-center">Trending Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-6">
          {SlidesData.map((item) => (
            <div
              onClick={()=> handleGoToDetails(item.imdbID)}
              key={item.imdbID}
              className="movie-card cursor-pointer bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition"
            >
              <img
                src={item.Poster}
                alt={item.Title}
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-semibold text-center">
                {item.Title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Genres Section */}
      <section className="genres py-10 bg-gray-800">
        <h2 className="text-3xl font-bold text-center">Genres to Explore</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["Drama", "Comedy", "Action", "Horror", "Romance", "Sci-Fi"].map(
            (genre) => (
              <button
                key={genre}
                className="genre-btn bg-gray-700 py-2 px-6 rounded-lg hover:bg-gray-600 transition"
              >
                {genre}
              </button>
            )
          )}
        </div>
      </section>

      {/* Must-Watch Collections */}
      <section className="collections py-10">
        <h2 className="text-3xl font-bold text-center">Must-Watch Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-6">
          {["Classics", "Mysteries", "Musicals", "Horror"].map((collection) => (
            <div
              key={collection}
              className="collection-card bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-center">{collection}</h3>
              <p className="text-gray-400 text-center mt-2">
                Dive into the best of {collection.toLowerCase()} movies.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Didn't Find What You Were Looking For Section */}
      <section className="request-form py-10 px-3 bg-gray-700">
        <h2 className="text-3xl font-bold text-center">
          Didn’t Find What You’re Looking For?
        </h2>
        <p className="text-center text-gray-400 mt-2">
          Let us know your request or suggestion!
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto mt-6 bg-gray-800 p-6 rounded-lg"
        >
          <div className="mb-4">
            <label className="block text-sm font-semibold">Movie Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter the movie title"
              className="w-full p-2 mt-2 bg-gray-700 rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Genre</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="w-full p-2 mt-2 bg-gray-700 rounded-lg focus:outline-none"
              required
            >
              <option value="">Select a genre</option>
              {["Drama", "Comedy", "Action", "Horror", "Romance", "Sci-Fi"].map(
                (genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Release Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Enter release year (optional)"
              className="w-full p-2 mt-2 bg-gray-700 rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Additional Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Any additional suggestions or requests?"
              className="w-full p-2 mt-2 bg-gray-700 rounded-lg focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 py-2 mt-4 rounded-lg hover:bg-blue-500 transition"
          >
            Submit Request
          </button>
        </form>
      </section>
    </div>
  );
}
