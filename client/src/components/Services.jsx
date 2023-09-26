import React from 'react'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

function Services() {
  return (
    <div className='sm:px-[100px] font-ph text-[20px]  sm:text-[35px] text-center   '>
        I Provide Best Solutions<br/>
        For Your Agency
        <div className=' font-ph text-[15px] flex gap-3 sm:gap-0     flex-col sm:flex-row  justify-between mt-5 sm:mt-10    sm:px-[10vw]'>
            <p data-aos="flip-left"  ><DesignServicesIcon/>  Web Design</p>
            <p data-aos="flip-left"><IntegrationInstructionsIcon/> Development</p>
            <p data-aos="flip-left"><AdsClickIcon/> Marketing</p>
            <p data-aos="flip-left"><PsychologyAltIcon/>IT Consulting</p>
        </div>
    </div>
  )
}

export default Services