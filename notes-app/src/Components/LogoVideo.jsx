import React from 'react';
import logo from '../assets/logoVid.mp4'
import { Link } from 'react-router-dom'


const LogoVideo = () => {
  return (
    <Link to="/">
      <video autoPlay muted className='w-48'>
        <source src={logo} type="video/mp4" />
      </video>
    </Link>
  );
};

export default LogoVideo;
