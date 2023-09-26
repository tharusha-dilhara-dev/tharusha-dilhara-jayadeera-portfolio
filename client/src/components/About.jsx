import React from 'react'
import SelfieDoodle from '../assets/SelfieDoodle.svg'

function About() {
    return (
        <div className='sm:px-[100px] flex  flex-col sm:flex-row'>
            <div className='flex items-center justify-center flex-1'>
               <img src={SelfieDoodle} className='w-1/2 rounded-full' alt="" />
            </div>
            <div className='flex-1 p-10' data-aos="zoom-in-left"> 
                <p className='font-ph text-[28px]'>Let’s Something Know About Myself</p>
                <p className='mt-5 font-ro'>Since starting my journey as a freelance designer 5 years ago, I've worked remotely for agencies, consulted for startups, and collaborated with talented people to create digital products for business and consumer use. I am already a student studying software engineering degree in a private university</p>
            </div>
        </div>
    )
}

export default About