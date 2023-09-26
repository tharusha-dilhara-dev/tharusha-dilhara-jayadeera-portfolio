import React from 'react'
import { motion } from 'framer-motion';


const loaderVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

function LoaderAnimation() {
  return (
    <motion.div
      className="loader"
      variants={loaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="loader-circle">ad</div>
    </motion.div>
  )
}

export default LoaderAnimation