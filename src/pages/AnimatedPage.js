import React from 'react'
import { motion } from 'framer-motion'
import PC from "../resources/computer.png"

// controls the animation state when a single child component is mounted to the DOM
const animations = {
    initial: {opacity: 0, x: 0},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: 0},
    transition: {duration: 2, delay: 0.5}
}

const AnimatedPage = ({children}) => {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition="transition">
        {children}
    </motion.div>
  )
}

export const AnimatedPC = () => {
  return (
    <motion.div animate={{rotate: [null, -30, 30, 0]}} transition={{duration: 3, delay: 1}} style={{alignSelf: "center"}}>
      <img src={PC} alt="Pc" height="120vh" width="120vh" style={{borderRadius: "100px", opacity: 0.76}}/>
    </motion.div>
  )
}

export default AnimatedPage