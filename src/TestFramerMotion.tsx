import { motion } from "framer-motion";
import { useState } from "react";

const TestFramerMotion = () => {

  const [open, setOpen] = useState(false);

  const variatns = {
    visible: (i: number) => ({
      opacity: 1,
      x: 100,
      // transition: { type: "spring", stiffness: 1000, damping: 15 }
      transition: { delay: i * 0.5 }
    }),
    hidden: { opacity: 0 }
  };

  const items = [
    "item1", "item2", "item3", "item4",
  ]


  return (
    // <div className="course">
    //   <div className="box"></div>
    // </div >

    // <div className="course">
    //   <motion.div
    //     className="box"
    //     initial={{ opacity: 0.4, scale: 0.5 }}
    //     transition={{ duration: 2 }}
    //     whileInView={{ opacity: 1, scale: 2 }}
    //     drag
    //   ></motion.div>
    // </div >

    // <div className="course">
    //   <motion.div
    //     className="box"
    //     variants={variatns}
    //     // initial="hidden"
    //     // animate="visible"
    //     // transition={{ duration: 2 }}
    //     animate={open ? "visible" : "hidden"}
    //   ></motion.div>
    //   <button onClick={() => setOpen(prev => !prev)}>Click</button>
    // </div >

    <div className="course">
      <motion.ul
        variants={variatns}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, i) => (
          <motion.li
            key={item}
            variants={variatns}
            custom={i}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div >

  )
}

export default TestFramerMotion