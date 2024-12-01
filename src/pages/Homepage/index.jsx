import React, { useContext } from 'react'
import Search from '../../components/search'
import Navbar from '../../components/navbar'
import HeroSection from '../../components/hero-section'
import MovieRequestForm from '../../components/request-form'

export default function HomePage() {

    return (
    <div className=''>
        <HeroSection/>
        <Search/>
        <MovieRequestForm/>
    </div>
  )
}
