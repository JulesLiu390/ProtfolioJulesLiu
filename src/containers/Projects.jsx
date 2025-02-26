import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { about, Leaf1, Leaf2 } from '../assets';
import { ProjectsData } from '../utils/helper';
import { FaGithub } from 'react-icons/fa6';

export const Projects = () => {
  return (
    <section id='projects'
    className='flex items-center justify-center flex-col gap-12 relative'>
        {/* title */}
        <div className='w-full flex items-center justify-center py-24'>
            <motion.div className='flex items-center justify-around w-52'
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:200}}
            exit={{opacity:0, width:0}}
            transition={{delay:0.4}}
            >
                <img src={Leaf1} className='w-6 h-auto object-contain' alt='' />
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500'>Projects</p>
                <img src={Leaf2} className='w-6 h-auto object-contain' alt='' />
            </motion.div>
        </div>

        {/* main content */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full'>
           <AnimatePresence>
            {ProjectsData && ProjectsData.map((project, index) => (
                <ProjectCard 
                key={project.id} project={project}
                />
            ))}
           </AnimatePresence>
        </div>
    </section>
  )
}

const ProjectCard = ({project}) => {

    const [isHoverred, setIsHoverred] = useState(false)
    const [imgScale, setImgScale] = useState(1.0)

    return (
        <motion.div
        className='overflow-hidden cursor-pointer relative rounded-md'
        key={project.id}
        onMouseEnter={() => {
            setIsHoverred(true)
            setImgScale(1.1)
        }}
        onMouseLeave={() => {
            setIsHoverred(false)
            setImgScale(1.0)
        }}
        >
            <motion.img className='w-full h-full object-contain rounded-lg' src={project.imgSrc}
                style={{
                    transform: `scale(${imgScale})`,
                    transition: "transform 0.1s ease-in-out",
                }}
            >
            </motion.img>

            {isHoverred && (<motion.div className='absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6) flex items-center justify-center flex-col gap-2]'>
                <p className="text-xl text-green-300">{project.name}</p>
                <a href={project.gitUrl} className=''>
                    <FaGithub className='text-3xl text-white hover:text-green-300' />
                </a>
            </motion.div>)}
        </motion.div>
    )
}

export default Projects;