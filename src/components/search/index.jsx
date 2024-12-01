import React, { useContext, useState } from "react";
import { MovieContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const { query, setQuery, fetchMovieList, loading, error, movieList } =
    useContext(MovieContext);
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()

  function handleOnChange(e) {
    setQuery(e.target.value);
  }

  function handleSearch() {
    if (query.trim()) {
      fetchMovieList();
      setSearchQuery(query)
      setQuery("")
    } else {
        alert("Please Enter Movie Title/Name");
    }
  }

  function handleGoToDetails(id){
    navigate(`/movie-details/${id}`)
  }

  if (error) {
    return(
    <div className="text-center">
      <h1 className="font-bold">An Error Occurred: {error}</h1>
      <button
        className="bg-red-500 text-white p-2 rounded-lg mt-2"
        onClick={fetchMovieList}
      >
        Retry
      </button>
    </div>
  )}

  return (
    <div className="bg-[#9005b5] bg-opacity-50 border-t border-b py-14">
      <h1 className="text-white text-center p-3 text-lg md:text-2xl font-semibold">Find your favorite movies by title or name!</h1>
      <div className="flex justify-center items-center">
      <div className="m-3 border border-gray-400 px-3 py-1 flex justify-around items-center gap-2 rounded-3xl w-fit">
        <input
          className="p-2 text-white md:text-lg bg-transparent outline-none"
          aria-label="Search Movie Name"
          type="text"
          name="title"
          id="title"
          placeholder="Search Movie name.."
          onChange={(e) => handleOnChange(e)}
          value={query}
        />
        <button
          className="font-semibold md:text-lg"
          onClick={handleSearch}
        >
          <img src="https://cdn-icons-png.flaticon.com/128/13705/13705355.png" alt="search" className="hover:opacity-80 active:opacity-100" height={"40px"} width={"40px"}/>
        </button>
      </div>
      </div>
      { searchQuery && (
      <div className="flex justify-center items-center text-center p-2">
        <h1 className="text-white text-lg font-bold">Search Results for: <span className="text-blue-600">"{searchQuery}"</span></h1>
      </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 place-items-center transition-all">
        {loading ? (
          <h1 className="col-span-full font-bold text-white text-center text-xl">Searching in All Movies..</h1>
        ) : movieList?.length ? (
          movieList.map((movie) => (
            <div
               className="relative w-56 lg:w-64 h-[400px] flex flex-col justify-center items-center m-3 border border-gray-400 p-4 gap-2 rounded-xl 
               hover:bg-black hover:text-white transition-all duration-500 group bg-white"
              key={movie.imdbID}
            >
              <img
                src={movie.Poster != "N/A" ? movie.Poster : "https://img.freepik.com/free-vector/product-hunt-concept-illustration_114360-594.jpg?semt=ais_hybrid"}
                alt={movie.Title}
                className="duration-1000 rounded-xl group-hover:opacity-30 object-cover h-64 w-52"
              />
              <div className="duration-500 flex h-52 flex-col justify-center items-center text-center group-hover:absolute group-hover:z-10 group-hover:text-white group-hover:bottom-12 group-hover:w-1/4">
                <img onClick={()=> handleGoToDetails(movie.imdbID)} className="hidden group-hover:block bg-white rounded-full mb-3 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/10257/10257610.png" alt="view-details" height={"60px"} width={"60px"} />
                <h1 className="text-lg font-bold">{movie.Title}</h1>
                <h3 className="font-semibold">{movie.Year}</h3>
              </div>
            </div>
          ))
        ) : searchQuery ? ( <h1 className="text-white font-bold text-center text-xl col-span-full">No movies found!</h1>) : null}
          </div>
    </div>
  );
}
