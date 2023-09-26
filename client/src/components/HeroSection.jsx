import React from 'react'
import tharusha from '../assets/tharusha.png'
import backcrop from '../assets/backcrop.png'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { motion } from "framer-motion"

function HeroSection() {
  return (
      <div  className='bg-[#191A1E] h-[90vh]  lg:h-[80vh]  relative top-0 flex  flex-col  lg:flex-row items-center justify-around overflow-hidden '>
      <motion.img  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}  className='absolute top-12 left-10 blur-[220px] lg:blur-[230px]  w-[40vh] z-30  lg:w-[30vw]' src={backcrop} alt="" />
      <div className='pt-[23vh] lg:p-10'>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className='text-white font-ph  text-[58px] lg:text-[95px]  relative'>Hello</motion.h1>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 6 }} className='text-white font-ph text-[58px] lg:text-[95px]  relative'>I'm Tharusha</motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }} className='flex pt-5 font-medium text-white font-ro '>
          <HorizontalRuleIcon className='rotate-90 ' style={{ fontSize: '3rem', fontWeight: 40, color: '#B7B7C4' }} />
          <div>
            Sed ut perspiciatis unde omnis iste natus error<br />
            sit voluptatem accusantium dolore
          </div>
        </motion.div>
      </div>
      <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='h-[50vh] z-40    lg:h-[80vh] ' src={tharusha} alt="" />
      <motion.div initial={{ opacity: 0,bottom:-30 }} animate={{ opacity: 1,bottom:30 }} transition={{ duration: 3 }} className='absolute z-40 flex gap-3 p-1 mt-10 bg-white border rounded-full font-ph bottom-10 border-1'>
        <div className='text-white w-[130px] py-2 flex gap-x-2 items-center justify-center  rounded-full  bg-[#0C2634]'>Portfolio <NorthEastIcon /></div>
        <div className='border borser-1 text-black border-black w-[120px] py-2 flex items-center justify-center px-4 rounded-full '>Hire Me</div>
      </motion.div>
    </div>
  )
}

export default HeroSection