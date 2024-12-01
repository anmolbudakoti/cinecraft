import React from 'react'
import ImageSlider from '../image-slider'

export default function HeroSection() {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center p-10 gap-10 mb-16'>
        <div className='flex flex-col justify-center text-white order-2 gap-2 md:w-1/2'>
            <p className='font-bold text-sm lg:text-lg'>Discover. Watch. Share.</p>
            <h1 className='font-bold text-4xl lg:text-6xl lg:leading-tight'>UNLOCK THE WORLD OF MOVIES</h1>
            <h2 className='font-semibold text-xl lg:text-2xl'>Your journey into cinematic adventures begins here</h2>
            <div className='flex justify-start gap-2 mt-5 lg:mt-20'>
            <button className='font-bold bg-white hover:bg-transparent hover:text-white text-black border border-gray-400 p-2 lg:p-4 w-36 lg:w-56 lg:text-lg rounded-xl'>Get Started</button>
            <button className='font-bold hover:bg-white text-white hover:text-black border border-gray-400 p-2 lg:p-4 lg:text-lg rounded-xl'>
              <img src="https://cdn-icons-png.flaticon.com/128/17971/17971733.png" alt="bookmark" className='w-5 h-5 md:w-7 md:h-7' />
            </button>
            <button className='font-bold hover:bg-white text-white hover:text-black border border-gray-400 p-2 lg:p-4 lg:text-lg rounded-xl'>
              <img src="https://cdn-icons-png.flaticon.com/128/1828/1828874.png" alt="share" className='w-5 h-5 md:w-7 md:h-7' />
            </button>
            </div>
        </div>
        <ImageSlider/>
    </div>
  )
}
