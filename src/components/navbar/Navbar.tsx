import React from 'react'

import './navbar.scss'
import { motion } from "framer-motion";
import Sidebar from '../sidebar/Sidebar';


const Navbar = () => {
  return (
    <div className='navbar'>

      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Juba
        </motion.span>

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