import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCard2 from './ProjectCard2'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Project() {

    const [projectData, setProjectData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    // State to track the active button
    const [activeButton, setActiveButton] = useState('');

    useEffect(() => {
        axios.get('https://tdjayadeerav2.vercel.app/api/project')
            .then((response) => {
                setProjectData(response.data);
                setFilteredData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    useEffect(() => {
        // Filter the projectData based on the selectedCategory
        if (selectedCategory === '') {
            setFilteredData(projectData);
        } else {
            const filteredProjects = projectData.filter((project) => project.category === selectedCategory);
            setFilteredData(filteredProjects);
        }
    }, [selectedCategory, projectData]);

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        // Update the active button state
        setActiveButton(category);
    };


 

    return (
        <section  id="project" className='lg:px-[100px] flex flex-col items-center lg:block   '>
            <p className=' font-ph text-[28px]'>
                Latest Project That Recently Done
            </p>
            <div className='flex text-[12px] font-ro  gap-5 pt-5 ml-[20px]'>
                <div className={`px-3 py-1 border cursor-pointer border-black rounded-[14px] border-[1px] ${activeButton === '' ? 'bg-[#0C2634] text-white' : 'text-black'} `} onClick={() => handleCategoryFilter('')}>All Project</div>
                <div className={`px-3 py-1 border cursor-pointer border-black rounded-[14px] border-[1px] ${activeButton === 'self' ? 'bg-[#0C2634] text-white' : 'text-black'} `} onClick={() => handleCategoryFilter('self')}>Self Project</div>
                <div className={`px-3 py-1 border cursor-pointer border-black rounded-[14px] border-[1px] ${activeButton === 'client' ? 'bg-[#0C2634] text-white' : 'text-black'} `} onClick={() => handleCategoryFilter('client')}>Client Project</div>
            </div>
            <div className='flex flex-col items-center justify-center pt-10 sm:items-center sm:justify-around sm:flex-row sm:flex-wrap gap-y-5 sm:gap-y-6'>

                {filteredData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        status={project.status}
                        description={project.des}
                        gitlink={project.gitlink}
                        rating={project.rating}
                        time={project.time} // Make sure 'time' exists in your API response
                    />
                ))}


            </div>
        </section>
    )
}

export default Project