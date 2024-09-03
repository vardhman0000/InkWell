import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoVideo from './LogoVideo';
import { useAuth0 } from "@auth0/auth0-react";
import './navbar.css'
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import ProfileCard from './ProfileCard/ProfileCard';

const Navbar = ({userInfo}) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const [showMenu, setShowMenu] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [rotate, setRotate] = useState(false);

  // function handleMenuClick(){
  //   setShowMenu(!showMenu);
  //   setHideMenu(!hideMenu);
  // }

  function handleMenuClick() {
    if (showMenu) {
      setAnimate(true);  // Start backToTop animation
      setTimeout(() => {
        setShowMenu(false);  // Hide menu after animation completes
        setAnimate(false);   // Reset animation state
      }, 500);  // Duration of animation
    } else {
      setShowMenu(true);
    }

    setRotate(true);
    setTimeout(() => setRotate(false), 500); // Reset rotation state after animation

  }


  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  }

  return (

    <>
      <div className='navMain --fromTop sticky top-0 z-50 bg-white'>
        <nav className='flex flex-row justify-around items-center shadow-lg'>
          <div className="logo">
              <LogoVideo/>
              {/* <img className='w-48' src={logo} alt="" /> */}
          </div>
          <div className='navPages'>
              <ul className='hidden md:flex md:flex-row md:gap-x-5'>
                  <Link className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/">Home</Link>
                  <Link className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/notes-updated">Notes</Link>
                  <Link className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/AboutUs">About Us</Link>
                  <Link className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/Contact">Contact</Link>
              </ul>
          </div>

          {/* Login Button Here */}
          {/* <div className='pfpic flex flex-row items-center gap-x-2'>

            <div className="userDetails hidden  gap-x-0 sm:gap-x-2 md:flex items-center">
              {isAuthenticated && (<img className='pf border-2 border-orange-600 p-[1px] rounded-full w-10' src={user.picture} alt ="pf"/>)}
              {isAuthenticated && (<p className='userName hidden lg:block'>{user.nickname}</p>)}
            </div>

            <div className='w-[10rem] md:w-36 h-12 md:h-[64px] hidden sm:w-48 md:flex flex-row justify-center items-center gap-x-2'>
                {isAuthenticated ? (
                  <button className='flex items-center justify-center w-fullfont-semibold text-lg px-4 md:px-4 py-3 rounded-full border-[2.3px] border-black hover:bg-black hover:text-white hover:scale-110 w-[150px] md:w-[8rem] h-12 md:h-14 font-bold' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                ) : (
                  <button className='flex items-center justify-center w-fullfont-semibold text-lg px-4 md:px-4 py-3 rounded-full border-[2.3px] border-black hover:bg-black hover:text-white hover:scale-110 w-[150px] md:w-[8rem] h-12 md:h-14 font-bold' onClick={() => loginWithRedirect()}>Log In</button>
                )}

            </div>

          </div> */}


          {/* <div className="flex menuCont md:hidden items-center justify-center h-12 w-20 rounded-full">
            { !showMenu ? (
              <MdMenu onClick={() => handleMenuClick()} className={`h-8 w-8 ${rotate ? 'rotate' : ''}`} />
            ) : (
              <RxCross2 onClick={() => handleMenuClick()} className={`h-8 w-8 ${rotate ? 'rotate' : ''}`} />
            )}
          </div> */}

          <ProfileCard userInfo={userInfo} onLogout={onLogout}/>
            
        </nav>
      </div>

      {showMenu && (<div className={`burgerCard fixed ${animate ? '--backToTop' : '--fromTop'} --animation-duration-0-5 z-20  bg-white shadow-md w-screen h-40 top-[83px] right-0 flex flex-col justify-center items-center gap-y-2`}>

        <div className="upper">

          <ul className='flex flex-row flex-wrap'>
              <Link onClick={() => handleMenuClick()} className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/">Home</Link>
              <Link onClick={() => handleMenuClick()} className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/Notes">Notes</Link>
              <Link onClick={() => handleMenuClick()} className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/AboutUs">About Us</Link>
              <Link onClick={() => handleMenuClick()} className='font-semibold px-5 py-4 text-lg hover:text-orange-500 hover:scale-110' to="/Contact">Contact</Link>
          </ul>

        </div>

        <div className="lower flex flex-row items-center justify-center gap-x-8">

            <div className="userDetails gap-x-0 sm:gap-x-2 flex items-center">
              {isAuthenticated && (<img className='pf border-2 border-orange-600 p-[1px] rounded-full w-12' src={user.picture} alt ="pf"/>)}
              {isAuthenticated && (<p className='userName hidden sm:block'>{user.nickname}</p>)}
            </div>

            {isAuthenticated ? (
              <button className='flex items-center justify-center w-fullfont-semibold text-lg px-4 md:px-4 py-3 rounded-full border-[2.3px] border-black hover:bg-black hover:text-white hover:scale-110 w-[150px] md:w-[8rem] h-12 md:h-14 font-bold' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            ) : (
              <button className='flex items-center justify-center w-fullfont-semibold text-lg px-4 md:px-4 py-3 rounded-full border-[2.3px] border-black hover:bg-black hover:text-white hover:scale-110 w-[150px] md:w-[8rem] h-12 md:h-14 font-bold' onClick={() => loginWithRedirect()}>Log In</button>
            )}

        </div>

      </div>)}
    </>
  )
}

export default Navbar
