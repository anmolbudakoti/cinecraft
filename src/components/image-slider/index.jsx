import React, { useContext, useState, useEffect } from 'react';
import { MovieContext } from '../../context';
import { useNavigate } from 'react-router-dom';

export default function ImageSlider() {
  const { SlidesData } = useContext(MovieContext);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate()

  function handlePrevious() {
    setIndex((prevIndex) => (prevIndex === 0 ? SlidesData.length - 1 : prevIndex - 1));
  }

  function handleNext() {
    setIndex((prevIndex) => (prevIndex === SlidesData.length - 1 ? 0 : prevIndex + 1));
  }

  function handleGoToDetails(id){
    navigate(`/movie-details/${id}`)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === SlidesData.length - 1 ? 0 : prevIndex + 1));
    }, 5000); 

    return () => clearInterval(interval); 
  }, [SlidesData.length]);


  return (
    <div className="flex flex-col items-center justify-center relative mt-2">
      <div className="relative group flex items-center justify-center shadow-black shadow-xl hover:bg-black hover:text-white transition-all duration-500">
        <button
          onClick={handlePrevious}
          className="absolute left-2 bg-gray-300 opacity-70 text-white p-2 rounded-full hover:bg-gray-500 transition-all z-10"
          aria-label="Previous Slide"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
            alt="Previous"
            className="w-6 h-6"
          />
        </button>

        <img
          src={SlidesData[index].Poster}
          alt={`Slide ${index + 1}`}
          className="cursor-pointer group-hover:opacity-30 w-80 h-80 lg:w-[400px] lg:h-[400px] rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
        />

        <div className="duration-500 hidden group-hover:flex h-52 flex-col justify-center items-center text-center group-hover:absolute group-hover:z-10 group-hover:text-white group-hover:bottom-12 group-hover:w-1/4">
                <img onClick={()=> handleGoToDetails(SlidesData[index].imdbID)} className="hidden group-hover:block bg-white rounded-full mb-3 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/10257/10257610.png" alt="view-details" height={"60px"} width={"60px"} />
                <h1 className="text-lg font-bold">{SlidesData[index].Title}</h1>
                <h3 className="font-semibold">{SlidesData[index].Year}</h3>
              </div>

        <button
          onClick={handleNext}
          className="absolute right-2 bg-gray-300 opacity-70 text-white p-2 rounded-full hover:bg-gray-500 transition-all z-10"
          aria-label="Next Slide"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="Next"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Dot Indicator */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {SlidesData.map((_, dotIndex) => (
          <div
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              dotIndex === index ? 'bg-black' : 'bg-gray-400'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
}
