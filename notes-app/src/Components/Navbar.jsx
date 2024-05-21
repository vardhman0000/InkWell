import React from 'react'
import logo  from "../assets/logo.gif";
import { Link } from 'react-router-dom'
import LogoVideo from './LogoVideo';
import { useAuth0 } from "@auth0/auth0-react";
import './navbar.css'

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div className='navMain sticky top-0 z-50 bg-white'>
      <nav className='flex flex-row justify-around items-center shadow-lg'>
        <div className="logo">
            <LogoVideo/>
            {/* <img className='w-48' src={logo} alt="" /> */}
        </div>
        <div className=''>
            <ul className='hidden md:flex md:flex-row md:gap-x-5'>
                <Link className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/">Home</Link>
                <Link className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/Notes">Notes</Link>
                <Link className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/AboutUs">About Us</Link>
                <Link className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/Contact">Contact</Link>
            </ul>
        </div>


        <div className='flex flex-row items-center gap-x-2'>
          <div className="userDetails gap-x-0 sm:gap-x-2 flex items-center">
            {isAuthenticated && (<img className='rounded-full w-10' src={user.picture} alt ="pf"/>)}
            {isAuthenticated && (<p className='hidden sm:block'>{user.nickname}</p>)}
          </div>

          <div className=' w-42 sm:w-48 flex flex-row justify-center items-center gap-x-10'>
              {isAuthenticated ? (
                <button className='font-semibold text-lg px-6 py-3 rounded-full border-2 border-black hover:bg-black hover:text-white hover:scale-110' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </button>
              ) : (
                <button className='font-semibold text-lg px-6 py-3 rounded-full border-2 border-black hover:bg-black hover:text-white hover:scale-110' onClick={() => loginWithRedirect()}>Log In</button>
              )}
          </div>
        </div>
          
      </nav>
    </div>
  )
}

export default Navbar
