import React from 'react'
import { motion, Variants } from 'framer-motion'

import './hero.scss'


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
};

const sliderVariants: Variants = {
  initial: {
    x: "-50%",
  },
  animate: {
    x: "-1100%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20
    }
  }
};

const Hero = () => {
  return (
    <div className='hero'>

      <div className='wrapper'>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >

          <motion.h2 variants={textVariants}>JUBA ABDEL</motion.h2>
          <motion.h1 variants={textVariants}>Web developer fullstack</motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Découvrez nos récentes réalisations</motion.button>
            <motion.button variants={textVariants}>Contactez-moi</motion.button>
          </motion.div>

          <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="scroll" />
        </motion.div>
      </div>

      {/* <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Java Spring React  Angular JS TS Scss Git Jenkins Docker Scrum
      </motion.div> */}


      <div className="slidingTextContainer">
        <div className="slidingTextWrapper">
          Java Spring React JS TS Scss Rest Git Framer-Motion Jwt Angular Vue Jenkins Docker Scrum&nbsp;
        </div>

        <div className="slidingTextWrapper">
          Java Spring React JS TS Scss Rest Git Framer-Motion Jwt Angular Vue Jenkins Docker Scrum&nbsp;
        </div>
      </div>


      <div className="imageContainer">
        <img src="hero3.png" alt="hero" />
      </div>
    </div>

  );
};

export default Hero;