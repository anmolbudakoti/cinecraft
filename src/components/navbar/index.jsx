import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  
    const [showMenu, setShowMenu] = useState(false)

    function handleMenu(){
        setShowMenu(!showMenu)
    }
    function handleClose(){
        setShowMenu(false)
    }
  
    return (
    <div className='flex justify-between items-center text-white border-b border-gray-400 p-3 transition-all ease-in'>
        <div className='flex justify-center items-center gap-3 md:pl-8'>
            <img src="https://cdn-icons-png.flaticon.com/128/777/777242.png" alt="brand-logo" className='h-10 w-10' />
            <h1 className="font-bold text-2xl"><Link to={"/"} onClick={handleClose}>CineCrate</Link></h1>
        </div>
        <img onClick={handleClose} src="https://cdn-icons-png.flaticon.com/128/16020/16020063.png" alt="close-button" className={`${showMenu ? 'z-30 h-10 w-10 absolute top-3 right-3' : "hidden"} hover:opacity-75`} />
        <ul className={!showMenu ? "md:flex md:pr-10 justify-center items-center md:gap-10 translate-x-0 opacity-0 md:opacity-100 hidden transition-all text-lg font-semibold" : 'flex flex-col justify-center items-center gap-10 absolute top-0 right-0 -translate-x-0 opacity-100 bg-black text-white h-screen z-20 w-1/2 transition-all text-lg font-semibold'}>
            <li className='hover:border-b-2 border-gray-200 transition-all duration-75'><Link to={"/explore"} onClick={handleClose}>Explore</Link></li>
            <li className='hover:border-b-2 border-gray-200 transition-all duration-75'><Link to={"/about"} onClick={handleClose}>About</Link></li>
            <li className='hover:border-b-2 border-gray-200 transition-all duration-75'><Link to={"/contact"} onClick={handleClose}>Contact</Link></li>
        </ul>
        <div onClick={handleMenu} className='md:hidden hover:opacity-75'>
            <img src="https://cdn-icons-png.flaticon.com/128/3388/3388823.png" alt="" className='h-10 w-10 bg-white rounded-full border' />
        </div>
    </div>
  )
}
