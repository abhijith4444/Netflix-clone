import React from 'react'
import './Banner.css'
import Vdo from '../../Assets/video.mp4'
import logo from '../../Assets/logo.png'


function Banner() {
  return (
    <div className='banner'>
      
      
      <div className='content'>
      <video className='BannerVdo' src={Vdo} autoPlay loop muted></video>
      <div className="logoDiv">
        <img className='logo' src={logo} alt="" /> 
        </div>
        <div className='banner-buttons'>
          <button className='button1'>Play</button>
          <button className='button2'>My list</button>
        </div>
        <div className="fade-bottom">

        </div>
        
      </div>
    </div>
  )
}


export default Banner
