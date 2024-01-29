import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      // staggerChildren creer des animations synchronisées sur plusieurs éléments enfants.
      // Lorsqu'elle est utilisée, la propriété staggerChildren spécifie 
      // ****** un délai entre le début de l'animation de chaque enfant successif.  *****
    }
  },
  closed: {
    transition: {
      // staggerChildren: 0.05,
      staggerChildren: 0.09,
      staggerDirection: -1, // sens inverse 
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,

  }
}

const Links = () => {
  const items: string[] = [
    "Home",
    "About",
    "Portfolio",
    "Service",
    "Contact",
  ];

  return (
    <motion.div className='links' variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`} key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;