import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../../context";

export default function MovieDetails() {
  const { id } = useParams();
  const { apiKey, movieDetails, setMovieDetails } = useContext(MovieContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchDetails() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
      );
      const result = await response.json();
      if (result) {
        setMovieDetails(result);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  if (loading) {
    return (
      <h1 className="text-2xl font-bold text-white text-center my-10">
        Loading Details... Please wait!
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-2xl font-bold text-red-500 text-center my-10">
        An error occurred! {error}
      </h1>
    );
  }

  return (
    <div className="flex flex-col p-5 md:my-8">
      {/* Movie Poster and Title */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:mb-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            className="w-64 md:w-80 rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center md:text-left">
            {movieDetails.Title}
          </h1>
          <div className="flex items-center justify-center md:justify-start mt-4 gap-2">
            <span className="text-lg md:text-xl font-bold text-white">
              {movieDetails.imdbRating}
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
              alt="rating"
              className="w-6 h-6"
            />
          </div>
          <p className="text-gray-300 text-sm md:text-lg mt-4 text-center md:text-left">
            {movieDetails.Year} • {movieDetails.Runtime} • {movieDetails.Rated}
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mt-8 px-4 md:px-20">
        <h2 className="text-3xl md:text-3xl font-bold text-white border-b-2 border-white inline-block">
          Overview
        </h2>
        <p className="text-gray-300 text-lg mt-4">{movieDetails.Plot}</p>
      </div>

      {/* Additional Details */}
      <div className="my-8 px-4 md:px-20 space-y-4">
        <p className="text-gray-400">
          <strong className="text-white">Starring:</strong> {movieDetails.Actors}
        </p>
        <p className="text-gray-400">
          <strong className="text-white">Director:</strong> {movieDetails.Director}
        </p>
        <p className="text-gray-400">
          <strong className="text-white">Genre:</strong> {movieDetails.Genre}
        </p>
        <p className="text-gray-400">
          <strong className="text-white">Released:</strong> {movieDetails.Released}
        </p>
      </div>

      {/* Box Office and Awards */}
      <div className="flex justify-center items-center bg-gray-900 text-white rounded-lg p-1">
            <div className="my-8 text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white border-b-2 border-white inline-block">
                Details
                </h2>
                <p className="text-gray-400">
                <strong className="text-white">Box Office:</strong>{" "}
                {movieDetails.BoxOffice || "N/A"}
                </p>
                <p className="text-gray-400">
                <strong className="text-white">Awards:</strong> {movieDetails.Awards}
                </p>
                {movieDetails.Ratings &&
                movieDetails.Ratings.map((rating, index) => (
                    <p key={index} className="text-gray-400">
                    <strong className="text-white">{rating.Source}:</strong>{" "}
                    {rating.Value}
                    </p>
                ))}
                <p className="text-gray-400">
                <strong className="text-white">Writer:</strong> {movieDetails.Writer}
                </p>
            </div>
      </div>
    </div>
  );
}
