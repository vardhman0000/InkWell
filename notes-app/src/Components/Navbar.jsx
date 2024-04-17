import React from 'react'
import logo  from "../assets/logo.gif";
import { Link } from 'react-router-dom'
import LogoVideo from './LogoVideo';

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10 bg-white'>
      <nav className='flex flex-row justify-around items-center shadow-lg'>
        <div className="logo">
            <LogoVideo/>
            {/* <img className='w-48' src={logo} alt="" /> */}
        </div>
        <div className=''>
            <ul className='flex flex-row gap-x-5'>
                <Link className='font-semibold px-5 py-4 text-lg' to="/">Home</Link>
                <Link className='font-semibold px-5 py-4 text-lg' to="/Notes">Notes</Link>
                <Link className='font-semibold px-5 py-4 text-lg' to="/">About Us</Link>
                <Link className='font-semibold px-5 py-4 text-lg' to="/">Contact</Link>
            </ul>
        </div>
        <div className='w-48 flex justify-center'>
            <button className='font-semibold text-lg px-6 py-3 rounded-full border-2 border-black hover:bg-black hover:text-white hover:scale-110'>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
