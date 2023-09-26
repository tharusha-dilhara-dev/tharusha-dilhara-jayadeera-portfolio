import React, { useState } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import { scroll } from "framer-motion"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function Header() {
  scroll(progress => {
    setscrollery(progress);
  })

  const[scrollery,setscrollery]=useState(0);

  const backgroundColorClass=scrollery<=0 ? 'bg-white/10 text-white' : 'bg-black text-white' ;

  
  return (
    <>
    <div className={`fixed z-50 flex items-center justify-between w-screen h-12 px-5 font-normal shadow-sm sm:px-10 font-ro ${backgroundColorClass}`}>
      <div className='font-bold cursor-pointer'>Tharusha</div>
      <div className='items-center hidden gap-16 sm:flex'>
        <p className='cursor-pointer '>About</p>
        <p className='cursor-pointer '>Project</p>
        <p className='cursor-pointer '>Contact</p>
      </div>
      <div className='flex items-center gap-3'>
        <MenuIcon className='visible sm:invisible'  />
        <Brightness4Icon  className='cursor-pointer  hover:text-[#254536] ' />
      </div>
    </div>
    {scrollery<=0 ?   null : <ArrowCircleUpIcon className='fixed bottom-5 right-5'/>}
    </>
  )
}

export default Header