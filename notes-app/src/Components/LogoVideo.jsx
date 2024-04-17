import React from 'react';
import logo from '../assets/logoVid.mp4'

const LogoVideo = () => {
  return (
    <video autoPlay muted className='w-48'>
      <source src={logo} type="video/mp4" />
    </video>
  );
};

export default LogoVideo;
