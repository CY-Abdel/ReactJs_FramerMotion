import React, { useRef } from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax: React.FC<{ type: string }> = ({ type }) => {

  // const ref = useRef();
  const ref = useRef<HTMLDivElement>(null); // Définissez le type de référence

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className='parallax'
      ref={ref}
      style={{
        background:
          type === "service"
            ? "linear-gradient(180deg, #111132, #0c0C1D)"
            : "linear-gradient(180deg, #111132, #505064)"
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "service" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "service" ? "/mn6.png" : "/sun1.png"
            })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className='stars'></motion.div>
    </div >
  )
}

export default Parallax