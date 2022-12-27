import React from 'react'
import { motion } from "framer-motion"


type Props = {}

function Vscode({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
         <motion.img className='h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full border border-gray-500 object-cover
         filter group-hover:grayscale transition duration-300 ease-in-out'
         initial={{
            y: 200,
            opacity: 0
        }}
        transition={{
            duration: 0.7,
        }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
         src="https://w7.pngwing.com/pngs/362/1/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png"
         /> 

         <div className='absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out 
         group-hover:bg-white  rounded-full z-0 h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>60%</p>
            </div>
         </div>
    </div>
  )
}

export default Vscode