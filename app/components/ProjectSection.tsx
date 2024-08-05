'use client'
import React, { useState } from 'react'
import { imageData } from '../data/imageData'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { RiArrowRightSLine } from 'react-icons/ri'

const ProjectSection: React.FC = () => {
  const [currentSet, setCurrentSet] = useState(imageData)
  const [activeSection, setActiveSection] = useState<string>('all')


  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, x: -50, transition: { duration: 0.5 } },
  }

  const hoverEffect = {
    rest: { opacity: 1, scale: 1 },
    hover: { opacity: 0.7, scale: 1.1 },
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 w-full">
        <AnimatePresence>
          {currentSet.map((item) => (
            <motion.div
              key={item.id}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative h-[200px] w-full overflow-hidden" // Corrected className
            >
              <motion.div
                className="relative w-full h-full"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={hoverEffect}
              >
                <Image
                  src={item.image}
                  alt="image"
                  layout="fill" // Added layout="fill"
                  objectFit="cover" // Added objectFit="cover"
                  className="w-full h-full cursor-pointer"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 cursor-pointer"
                  initial="rest"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <span className="text-[#fab702] text-lg">{item.title}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default ProjectSection
