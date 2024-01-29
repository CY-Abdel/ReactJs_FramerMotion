import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion'

import './portfolio.scss'

const items = [
  {
    id: 1,
    title: "React.Js",
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, omnis aut explicabo dolor assumenda fugiat voluptatum molestiae, doloremque, facilis architecto tempora velit dolorem sapiente quos consectetur. Est, doloribus tenetur? Quas?"
  },
  {
    id: 2,
    title: "Typescript",
    img: "https://images.pexels.com/photos/14936124/pexels-photo-14936124.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, omnis aut explicabo dolor assumenda fugiat voluptatum molestiae, doloremque, facilis architecto tempora velit dolorem sapiente quos consectetur. Est, doloribus tenetur? Quas?"
  },
  {
    id: 3,
    title: "Framer Motion",
    img: "https://images.pexels.com/photos/5691866/pexels-photo-5691866.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, omnis aut explicabo dolor assumenda fugiat voluptatum molestiae, doloremque, facilis architecto tempora velit dolorem sapiente quos consectetur. Est, doloribus tenetur? Quas?"
  },
  {
    id: 4,
    title: "Java Spring",
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, omnis aut explicabo dolor assumenda fugiat voluptatum molestiae, doloremque, facilis architecto tempora velit dolorem sapiente quos consectetur. Est, doloribus tenetur? Quas?"
  },
]

interface Item {
  id: number;
  title: string;
  img: string;
  desc: string;
}

interface SingleProps {
  item: Item;
}

// const Single = ({ item }) => {
const Single: React.FC<SingleProps> = ({ item }) => {
  return (
    <section>
      {item.title}
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 25,
  })

  return (
    <div className='portfolio' ref={ref}>

      <div className="progress">
        <h1>Projets phares</h1>

        <motion.div
          className="progressBar"
          style={{ scaleX }}
        >

        </motion.div>
      </div>

      {items.map(item => (
        <Single item={item} key={item.id} />
      ))
      }
    </div>
  )
}

export default Portfolio