import React from 'react'

import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      
      {/* Sidebar */}
      <div className="wrapper">
        <span>Juba</span>
        
        <div className="social">
          <a href="#"><img src="/facebook.png" alt="fb" /></a>
          <a href="#"><img src="/public/instagram.png" alt="in" /></a>
          <a href="#"><img src="/public/YouTube-icon.png" alt="yt" /></a>
          <a href="#"><img src="/public/linkedin.png" alt="in" /></a>
     
        </div>
      </div>

    </div>
  )
}

export default Navbar