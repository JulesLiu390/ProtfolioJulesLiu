import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'

export const SkillCard = ({skill, percentage, color, move}) => {
  return (
    <div className={`border border-[rgba(255,255,255,0.4)] rounded-md px-8 py-3 cursor-pointer group w-full flex items-center justify-between relative gap-2`}
    style={{
        boxShadow:"inset 0 0 10px rgba(255,255,255,0.3)",
        marginLeft : move ? -30 : 20,
    }}
    >
        {/* name section */}
        <div className='flex-1 flex-col items-center justify-start flex gap-2'>
            <p className='text-base text-white'>
                {skill}
            </p>
            <div className='w-full h-1 rounded-md overflow-hidden bg-[rgba(255,255,255,0.2)] relative'>
                <motion.div className='h-full absolute top-0 left-0'
                style={{backgroundColor: color}}
                initial={{width:0}}
                animate={{width:percentage}}
                transition={{duration:1.5}}
                >

                </motion.div>
            </div>
        </div>
        {/* percentage */}
        <div className='w-16 h-12 rounded-md relative overflow-hidden flex items-center justify-center'
        style={{border:`1px solid ${color}`}}
        >
            <motion.div className='w-full absolute bottom-0 left-0 flex items-center justify-center'
                style={{backgroundColor: color}}
                initial={{height:0}}
                animate={{height:percentage}}
                transition={{duration:1.5}}
            >
                <p className='text-gray-800 z-10 font-sans font-bold tracking-wider'>{percentage}</p>
            </motion.div>
        </div>
    </div>
  )
}

export default SkillCard