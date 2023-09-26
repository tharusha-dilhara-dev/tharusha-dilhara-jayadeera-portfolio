import React from 'react'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import p1 from '../assets/p1_pc.png'

function ProjectCard2(props) {
    const {name,state}=props;
  return (
    <div className='w-screen mt-3 bg-[#dddddd] rounded-lg min-h-[100px]  flex justify-between items-center font-ro text-sm  '>
        <div className='relative top-0 left-0 bg-purple-300 w-[80px] h-[100px]'><img src={p1} alt="" /></div>
        <div>{name}</div>
        <ExpandCircleDownIcon/>
    </div>
  )
}

export default ProjectCard2