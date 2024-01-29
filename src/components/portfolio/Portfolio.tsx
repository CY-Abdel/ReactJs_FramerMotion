import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

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
    img: "https://images.pexels.com/photos/8904071/pexels-photo-8904071.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    img: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=600",
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

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "- 300%"]);

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className="container">
        <div className='wrapper'>

          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="itemImg" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Demo</button>
          </motion.div>

        </div>
      </div>
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