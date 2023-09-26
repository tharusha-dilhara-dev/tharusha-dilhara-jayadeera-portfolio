import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCard2 from './ProjectCard2'
import { useState, useEffect } from 'react';


function Project() {

    const [projectData, setProjectData] = useState([]);

    // useEffect(() => {
    //     // Fetch the data from the API
    //     fetch('https://tdjayadeera-backend.vercel.app/api/project') // Replace with your API endpoint
    //         .then((response) => response.json())
    //         .then((data) => setProjectData(data))
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);

    // console.log(projectData);
    
    return (
        <div className='lg:px-[100px] flex flex-col items-center lg:block   '>
            <p className=' font-ph text-[28px]'>
                Latest Project That Recently Done
            </p>
            <div className='flex text-[12px] font-ro  gap-5 pt-5 ml-[20px]'>
                <div className='px-3 py-1 border border-black rounded-[14px] border-[1px] bg-[#0C2634] text-white'>All Project</div>
                <div className='px-3 py-1 border border-black rounded-[14px] border-[1px] '>Self Project</div>
                <div className='px-3 py-1 border border-black rounded-[14px] border-[1px] '>Client Project</div>
            </div>
            <div className='flex flex-col items-center justify-center pt-10 sm:items-center sm:justify-around sm:flex-row sm:flex-wrap gap-y-5 sm:gap-y-6'>
                
                <ProjectCard/>
                

            </div>
        </div>
    )
}

export default Project