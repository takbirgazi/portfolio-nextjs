"use client"
import Image from 'next/image';
import { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import meetUpProject from "@/public/assets/images/projects/meetUpProject.png"
import gesosmartpalnning from "@/public/assets/images/projects/geosmartplanning.png"
import taskmanagement from "@/public/assets/images/projects/taskManager.png"

const Projects = () => {
    const [notOver, setNotOver] = useState(true)
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
                    allProjects?.map(projects => <div key={projects._id} className='cursor-pointer rounded-md border border-[#929292] overflow-hidden border-[#0a0a0ae0] w-full h-full relative'>
                        <figure onClick={()=>{setNotOver(!notOver)}} className='w-full h-56'>
                            <Image className="w-full h-full" src={projects?.projectImage} alt="Project Name" />
                        </figure>
                        <div onClick={()=>{setNotOver(!notOver)}} className={`absolute ${notOver && "hidden"} flex top-0 left-0 w-full h-full bg-[#0a0a0ae0] bg-opacity-80 items-end justify-center py-5`}>
                            <div className='flex items-end justify-center w-full h-full p-2 flex-col gap-3'>
                                <h2 className='w-full text-white font-bold text-2xl text-center'>{projects?.projectName}</h2>
                                <p className='w-full text-white text-center'>{projects?.projectDescription}</p>
                                <div className='w-full flex items-center justify-center'>
                                    <a href={projects?.projectLiveLink} target="_blank" className="px-3 py-1 rounded-3xl bg-[#00844e] text-white text-sm my-3">View Live Project</a>
                                </div>
                                {
                                    (projects?.projectClient || projects?.projectServer) && <div className='w-full flex gap-2 sm:flex-row flex-col items-center justify-center'>
                                        <h2 className='font-bold md:text-xl'>Source Code: </h2>
                                        <div className='flex gap-2'>
                                            {
                                                projects?.projectClient && <a href={projects?.projectClient} target="_blank" className="px-3 py-1 rounded-3xl bg-[#00844e] text-white text-xs">Client</a>
                                            }
                                            {
                                                projects?.projectServer && <a href={projects?.projectServer} target="_blank" className="px-3 py-1 rounded-3xl bg-[#00844e] text-white text-xs">Server</a>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;