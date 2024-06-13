import React from 'react'
import './Footer.css'
import youtube_icon from '../../Assets/youtube_icon.png'
import twitter_icon from '../../Assets/twitter_icon.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import facebook_icon from '../../Assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preference</li>
        <li>Coorporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>@ 1997-2024 Netflix, Inc</p>
      
    </div>
  )
}

export default Footer
