import React, { useEffect, useRef } from 'react'
import './NavBar.css'
import caret from '../../Assets/caret_icon.svg'
import { logout } from '../../firebase'

function Navbar() {

  //navbar designing
const navRef = useRef()
useEffect(()=>{
  window.addEventListener('scroll',()=>{
  if(window.scrollY >= 540){
    navRef.current.classList.add("nav-dark")
  }else{
    navRef.current.classList.remove("nav-dark")
  }
})
},[])

  return (
    <div ref={navRef} className='navbar'>
        <div className='navbar-left' >
            <img className='netflix-logo' src="/netflix-logo.png" alt="" />
            <ul > 
              <li>Home</li>
              <li>Tv Show</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My list</li>
            </ul>
        </div>
        <div className='navbar-right' >
          <img className='icon' src="public/search-icon.png" alt="" />
          <p>children</p>
          <img className='icon' src="public/bell-icon.png" alt="" />
          
          <div className='navbar-profile'>
          <img className='profile-img' src="/netflix-avatar.png" alt="" />
          <img className='caret-image' src={caret} alt="img" />
          <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign out of Netflix</p>
        </div>
        </div>
        </div>
        
      
    </div>
  )
}

export default Navbar
