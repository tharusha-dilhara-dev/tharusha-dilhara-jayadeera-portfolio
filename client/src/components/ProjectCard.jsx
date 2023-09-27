import React, { useState } from 'react'
import p1 from '../assets/p1_pc.png'
import { Rating } from '@smastrom/react-rating';
import GitHubIcon from '@mui/icons-material/GitHub';


function ProjectCard(props) {
  const {time,angle,name,status,rating}=props;
  return (
    <div  data-aos="zoom-in-up"  data-aos-offset="100" data-aos-easing="ease" data-aos-duration="200" className=' w-4/6   sm:w-5/12 md:w-3/12 border border-[0.1px]  rounded-r-xl rounded-bl-xl  m-3 relative flex flex-col justify-center p-3 border-[#264736]/30 ' >
        <img src={p1} className='' alt="" />
        <div className={`absolute py-[1px] -left-[1px] px-5 text-[10px] ${status === 'dev' ? 'bg-[#264736]' : 'bg-[#1a1856]'} text-white -top-[18px] font-ro rounded-t-md`}>Production {status}</div>
        <div className='relative flex flex-col pt-3'>
          <div className='font-bold font-ro text-[12px] pb-3'>{name}</div>
          <div className='flex items-center justify-between w-full '>
            <GitHubIcon style={{fontSize:14}}/>
            <Rating readOnly='true' style={{ maxWidth: 80 }} value={rating}  />
            </div>
        </div>
    </div>
  )
}

export default ProjectCard