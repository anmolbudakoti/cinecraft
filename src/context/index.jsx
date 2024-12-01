import { createContext, useState } from "react";


export const MovieContext = createContext(null)

const MovieContextState = ({children})=>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [query, setQuery] = useState("")
    const [movieList, setMovieList] = useState([])
    const apiKey = import.meta.env.VITE_API_KEY
    const SlidesData = [
        {
            Title: "Kingsman: The Secret Service",
            Year: "2014",
            imdbID: "tt2802144",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BODk1MTYwNTAtYmI5Zi00OWYyLWE0MzQtOWE4NDIxZmU2MjMwXkEyXkFqcGc@._V1_SX300.jpg"
          },
          {
            Title: "Titanic",
            Year: "1997",
            imdbID: "tt0120338",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg"
          },
          {
            Title: "The Maze Runner",
            Year: "2014",
            imdbID: "tt1790864",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg"
          },
          {
            Poster: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg",
            Title: "Spider-Man: No Way Home",
            Type: "movie",
            Year: "2021",
            imdbID: "tt10872600"
          }

    ]
    const [movieItems, setMovieItems] = useState([])
    const [movieDetails, setMovieDetails] = useState([])

    async function fetchMovieList(){
        try{
            setLoading(true)

            const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
            const result = await response.json()
            const movieList = result.Search

            if(movieList){
                setMovieList(movieList)
                console.log(movieList)
                setLoading(false)
            }
            else{
                return <h1>No Results Found!</h1>
            }
        }
        catch(error){
            setError(error)
            setLoading(false)
        }
    }

    return <MovieContext.Provider value={{loading, setLoading, error, setError,
        movieList, setMovieList, query, setQuery, fetchMovieList, SlidesData,
        movieItems, setMovieItems, apiKey, movieDetails, setMovieDetails
    }}>{children}</MovieContext.Provider>
}

export default MovieContextState;