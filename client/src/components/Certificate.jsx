import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom';

function Certificate() {


    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        // Replace 'your-api-endpoint-here' with your API endpoint
        axios.get('https://tdjayadeerav2.vercel.app/api/certificate')
            .then((response) => {
                setCertifications(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []);


    return (
        <div className='lg:px-[100px]'>
            <div className='flex items-center justify-between font-ph text-[28px]'>Latest certifications done recently <Link to='certification'><div className='text-[14px] text-slate-500'>more <ArrowForwardIosIcon style={{ fontSize: 14 }} />   </div> </Link>   </div>
            <div className="pt-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8  animate-infinite-scroll">
                    {certifications.map((cert, index) => (
                        <li className='p-3 rounded-lg certificateIuser bg-slate-100' key={index}>
                            {cert.name} <p className='certificateIuser'>{cert.organization}</p>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8  animate-infinite-scroll" aria-hidden="true">
                    {certifications.map((cert, index) => (
                        <li className='p-3 rounded-lg certificateIuser bg-slate-100' key={index}>
                            {cert.name} <p className='certificateIuser'>{cert.organization}</p>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}

export default Certificate