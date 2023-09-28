import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {
    Link,
    Routes,
    Route,
    useNavigate,
  } from 'react-router-dom';
  import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

function Pagesnavbar() {

    const navigate = useNavigate();
      
  return (
    <div className={`fixed z-50 flex items-center justify-between w-screen h-12 px-5 font-normal shadow-sm sm:px-10 font-ro `}>
        <div className='font-normal cursor-pointer'>Tharusha</div>
        <div className='items-center hidden gap-16 sm:flex'>
                <div onClick={() => navigate(-1)}><ArrowLeftIcon style={{ fontSize: '2rem',cursor:'pointer' }} /></div>
        </div>
      </div>
  )
}

export default Pagesnavbar