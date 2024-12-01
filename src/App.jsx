import React from "react"
import HomePage from "./pages/Homepage"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import ExplorePage from "./pages/explore"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import MovieDetails from "./pages/movie-details"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path={"/"} element={<HomePage/>}/>
      <Route exact path={"/explore"} element={<ExplorePage/>}/>
      <Route exact path={"/about"} element={<AboutPage/>}/>
      <Route exact path={"/contact"} element={<ContactPage/>}/>  
      <Route exact path={"/movie-details/:id"} element={<MovieDetails/>}/>    
    </Routes>
    <Footer/>
    </>
  )
}

export default App
