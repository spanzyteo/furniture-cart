'use client'
import React, { useState } from 'react'
import { imageData } from '../data/imageData'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectSection: React.FC = () => {
  const [currentSet, setCurrentSet] = useState(imageData)
  const [activeSection, setActiveSection] = useState<string>('all')

  const handleButtonClick = (section: string) => {
    setActiveSection(section)
    if (section === "all") {
      setCurrentSet(imageData)
    }else {
        setCurrentSet(imageData.filter((item) => item.section === section))
    }
  }

  const buttonClass = (section: string) => {
    return ` ${
      activeSection === section
        ? 'bg-[#fab702] p-[0.5rem] sm:p-[0.2rem] text-[#000000] uppercase'
        : 'hover:bg-black p-[0.5rem] sm:p-[0.2rem] text-[#888888] uppercase'
    }`
  }

   const containerVariants = {
     hidden: { opacity: 0, scale: 0.8, x: 50 },
     visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
     exit: { opacity: 0, scale: 0.8, x: -50, transition: { duration: 0.5 } },
   }

   const buttonVariants = {
     initial: { scale: 1 },
     tap: { scale: 0.9 },
   }

  return (
    <>
      <div className="flex flex-col mt-10 items-center h-[50px] md:h-[30px] justify-center gap-6 text-[13px]">
        <div className="flex flex-row gap-6">
          <motion.button
            className={buttonClass('all')}
            onClick={() => handleButtonClick('all')}
            whileTap="tap"
            variants={buttonVariants}
          >
            All Projects
          </motion.button>
          <motion.button
            className={buttonClass('residential')}
            onClick={() => handleButtonClick('residential')}
            whileTap="tap"
            variants={buttonVariants}
          >
            Residential
          </motion.button>
          <motion.button
            className={buttonClass('hospitality')}
            onClick={() => handleButtonClick('hospitality')}
            whileTap="tap"
            variants={buttonVariants}
          >
            Hospitality
          </motion.button>
          <motion.button
            className={`${buttonClass('office')} hidden lg:block`} 
            onClick={() => handleButtonClick('office')}
            whileTap="tap"
            variants={buttonVariants}
          >
            Office
          </motion.button>
          <motion.button
            className={`${buttonClass('commercial')} hidden lg:block`}
            onClick={() => handleButtonClick('commercial')}
            whileTap="tap"
            variants={buttonVariants}
          >
            Commercial
          </motion.button>
        </div>
        <div className="flex flex-row lg:hidden gap-10">
          <motion.button
            className={buttonClass('office')}
            onClick={() => handleButtonClick('office')}
            whileTap="tap"
            variants={buttonVariants}
          >
            Office
          </motion.button>
          <motion.button
            className={buttonClass('commercial')}
            onClick={() => handleButtonClick('commercial')}
            whileTap="tap"
            variants={buttonVariants}
          >
            Commercial
          </motion.button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 w-full">
        <AnimatePresence>
          {currentSet.map((item) => (
            <motion.div
              key={item.id}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="h-[200px] sm:w-[450px]w-[100%]"
            >
              <Image
                src={item.image}
                alt="image"
                objectFit="cover"
                className="w-full h-full cursor-pointer"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default ProjectSection