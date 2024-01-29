import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import './services.scss'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
};

const Services = () => {

  // Définir le type de référence pour un élément HTML
  const ref = useRef<HTMLDivElement>(null);

  // trigger the animation( a l'endroit ou l'on le souhaite)
  const isInView = useInView(ref, { margin: "-100px" })


  return (

    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      // animate='animate'
      // pour declencher l'animation quand on arrive sur la div
      // whileInView="animate"
      // declencher l'anime apres une certaine marge
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants} >
        <p>Portez votre attention sur l'évolution et le développement <br />de votre marque</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            Concepts <motion.b whileHover={{ color: "orange" }}>Uniques</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Propulser</motion.b> Votre Business.
          </h1>
          <button>WHAT WE DO ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>titre</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quia saepe, dolores veniam expedita ullam pariatur tenetur eaque a maxime ex enim suscipit?</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>titre</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quia saepe, dolores veniam expedita ullam pariatur tenetur eaque a maxime ex enim suscipit?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>titre</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quia saepe, dolores veniam expedita ullam pariatur tenetur eaque a maxime ex enim suscipit?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>titre</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quia saepe, dolores veniam expedita ullam pariatur tenetur eaque a maxime ex enim suscipit?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services