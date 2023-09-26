import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='h-[50vh] text-[14px] pb-20   bg-[#191A1E] text-white flex  flex-col sm:flex-row    text-center'>
        <div className='flex-1 px-[110px] py-[20px] sm:py-[80px] '>
            <h1 className='font-ph text-[24px]'>Tharusha</h1>
            <div className='flex flex-col gap-5 pt-3 font-normal text-left font-ro'>
                <div><EmailIcon/> td.jayadeera@gmail.com</div>
                <div><PhoneEnabledIcon/> +940765577610</div>
            </div>
            <div className='flex justify-center gap-5 pt-10 font-normal font-ro'>
                <GitHubIcon/>
                <LinkedInIcon/>
                <FacebookIcon/>
            </div>
        </div>
        <div className='flex-1 px-[110px] py-[20px] sm:py-[80px]  bg-[#191A1E] text-white'>
            <h1 className='font-ph text-[24px]'>Services</h1>
            <div className='flex flex-col items-center gap-5 pt-3 font-normal font-ro'>
                <p>Web Design</p>
                <p>IT Consulting</p>
                <p>Marketing</p>
                <p>Development</p>
            </div>
        </div>
        <div className='flex-1 px-[110px] py-[20px] sm:py-[80px]  bg-[#191A1E] text-white'>
            <h1 className='font-ph text-[24px]'>Photo Gallery</h1>
            <div className='grid grid-cols-2 '>
                <div className='bg-slate-300 min-h-[70px] min-w-[70px] m-[5px] rounded-lg '></div>
                <div className='bg-slate-300 min-h-[70px] min-w-[70px] m-[5px] rounded-lg '></div>
                <div className='bg-slate-300 min-h-[70px] min-w-[70px]  m-[5px] rounded-lg'></div>
                <div className='bg-slate-300 min-h-[70px] min-w-[70px]  m-[5px] rounded-lg'></div>
            </div>
        </div>
    </div>
  )
}

export default Footer