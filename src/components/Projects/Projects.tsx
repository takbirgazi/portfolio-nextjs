"use client"
import Image from 'next/image';
import SectionHeading from '../SectionHeading/SectionHeading';
import meetUpProject from "../../../public/images/projects/meetUpProject.png";
import gesosmartpalnning from "../../../public/images/projects/geosmartplanning.png";
import taskmanagement from "../../../public/images/projects/taskManager.png";
import { FaRegEye } from "react-icons/fa";
import { IoIosGitMerge, IoIosGitBranch } from "react-icons/io";
import { useState } from 'react';

const Projects = () => {
    const [showDetails, setShowDetails] = useState(true);
    const allProjects = [
        {
            _id: 1,
            projectName: `MeetUp`,
            projectDescription: `A Video Calling Web Application.`,
            projectImage: meetUpProject,
            projectLiveLink: `https://meetup-d48c4.web.app`,
            projectClient: `https://github.com/takbirgazi/meetup-client`,
            projectServer: `https://github.com/takbirgazi/meetup-server`
        },
        {
            _id: 2,
            projectName: `Task Manager`,
            projectDescription: `A Task Management Application`,
            projectImage: taskmanagement,
            projectLiveLink: `https://task-manager-puce-pi.vercel.app`,
            projectClient: `https://github.com/takbirgazi/taskManager`,
        },
        {
            _id: 3,
            projectName: `Geo Smart Planning`,
            projectDescription: `A Consultancy Firm`,
            projectImage: gesosmartpalnning,
            projectLiveLink: `https://geosmartplanning.com.bd`,
        }
    ]
    return (
        <div className="p-5 w-11/12 mx-auto" id="projects">
            <SectionHeading description="Showcasing some of my best work" title="Projects" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:pb-5 pb-0 place-items-center'>
                {
                    allProjects?.map(projects => <div key={projects._id} onMouseOver={() => setShowDetails(false)} onMouseLeave={() => setShowDetails(true)} className='cursor-pointer rounded-md border border-[#929292] border-opacity-50 shadow-md overflow-hidden border-[#0a0a0ae0] w-full h-full relative'>
                        <figure className='w-full h-56'>
                            <Image className="w-full h-full" src={projects?.projectImage} alt="Project Name" />
                        </figure>
                        <div className={`${showDetails ? "-bottom-[150px]" : "bottom-[0px]"} absolute ease-in-out transition-all duration-700 left-0 backdrop-blur-lg w-full border-t border-opacity-50 border-gray-500`}>
                            <div className='h-full p-5 bg-opacity-20'>
                                <h2 className='font-semibold text-[#19af7a]'>{projects?.projectName}</h2>
                                <p className='text-sm text-[#919191]'>{projects?.projectDescription}</p>
                                <div className='w-full flex justify-center items-center pt-4 gap-3'>
                                    {
                                        projects?.projectLiveLink && <a href={projects?.projectLiveLink} target='_blank' className='text-[#19af7a] text-xl font-semibold p-3 backdrop-blur-lg' title='View Live'> <FaRegEye /></a>
                                    }
                                    {
                                        projects?.projectClient && <a href={projects?.projectClient} target='_blank' className='text-[#19af7a] text-xl font-semibold p-3 backdrop-blur-lg' title='Goto GitHub Client'> <IoIosGitMerge /> </a>
                                    }
                                    {
                                        projects?.projectServer && <a href={projects?.projectServer} target='_blank' className='text-[#19af7a] text-xl font-semibold p-3 backdrop-blur-lg' title='Goto GitHub Server'> <IoIosGitBranch /> </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;

