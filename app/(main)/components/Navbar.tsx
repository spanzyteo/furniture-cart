'use client'
import { RiArrowRightSLine } from 'react-icons/ri'
import { IoMenuSharp } from 'react-icons/io5'
import { VscCircleFilled } from 'react-icons/vsc'
import { FaXmark } from 'react-icons/fa6'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closeMenu, toggleSwitch } from '../store/menubarSlice'
import { motion } from 'framer-motion'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const menubarOpen = useAppSelector((state) => state.menubar.menubarOpen)

  const handleSwitch = () => {
    dispatch(toggleSwitch())
  }

  const closeMenubar = () => {
    dispatch(closeMenu())
  }

  const sidebarVariants = {
    hidden: {
      opacity: 0,
      x: '-100%',
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <div className="bg-[rgb(24, 25, 27)] flex flex-col">
      <div className="flex flex-row h-[90px] items-center lg:px-20 px-10 lg:justify-around justify-between">
        <div className="">
          <h1 className="text-white text-2xl">PMFC</h1>
        </div>
        <div className="lg:flex hidden text-white text-xs uppercase gap-6 font-semibold items-center">
          <Link href={'/'}>
          <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
            Home
          </h1>
          </Link>
          <VscCircleFilled className="text-[#fab702]" />
          <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
            Pages
          </h1>
          <VscCircleFilled className="text-[#fab702]" />
          <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
            Projects
          </h1>
          <VscCircleFilled className="text-[#fab702]" />
          <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
            Services
          </h1>
          <VscCircleFilled className="text-[#fab702]" />
          <Link href={'/training'}>
            <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
              Training
            </h1>
          </Link>
          <VscCircleFilled className="text-[#fab702]" />
          <Link href={'/shop'}>
            <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
              Shop
            </h1>
          </Link>
          <VscCircleFilled className="text-[#fab702]" />
          <Link href={'/contact'}>
          <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
            Contact
          </h1>
          </Link>
        </div>
        <div className="hidden lg:block hover:bg-[#fab702]">
          <button className="flex items-center justify-center w-[150px] h-[35px] text-white border border-white text-sm gap-1 hover:text-black hover:font-semibold hover:border-black transition-all duration-300 ease group">
            <h1 className="">Get Quote</h1>
            <RiArrowRightSLine className="h-[25px] w-[25px] text-[#fab702] font-bold transition-all duration-300 ease group-hover:text-black group-hover:ml-4" />
          </button>
        </div>
        <div className="block lg:hidden">
          {menubarOpen ? (
            <FaXmark
              onClick={() => handleSwitch()}
              className="text-white h-[40px] w-[40px] hover:bg-[#fab702] hover:text-black transition-all duration-300 ease cursor-pointer"
            />
          ) : (
            <IoMenuSharp
              onClick={() => handleSwitch()}
              className="text-white h-[40px] w-[40px] hover:bg-[#fab702] hover:text-black transition-all duration-300 ease cursor-pointer"
            />
          )}
        </div>
      </div>
      {/* {menubarOPen && ( */}
      <motion.div
        initial="hidden"
        animate={menubarOpen ? 'visible' : 'hidden'}
        variants={sidebarVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`flex flex-col items-start text-white text-xs uppercase gap-6 font-semibold px-10 overflow-hidden transition-all duration-500 ease-in-out ${
          menubarOpen
            ? 'max-h-[500px] opacity-100 pb-20 mt-8'
            : 'max-h-0 opacity-0'
        }`}
      >
        <Link href={'/'} onClick={() => closeMenubar()}>
          <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
            Home
          </h1>
        </Link>
        <div className="w-full h-[1px] border-t border-t-[#333333]"></div>
        <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
          Pages
        </h1>
        <div className="w-full h-[1px] border-t border-t-[#333333]"></div>
        <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
          Projects
        </h1>
        <div className="w-full h-[1px] border-t border-t-[#333333]"></div>
        <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
          Services
        </h1>
        <div className="w-full h-[1px] border-t border-t-[#333333]"></div>
        <Link href={'/training'} onClick={() => closeMenubar()}>
          <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
            Training
          </h1>
        </Link>
        <div className="w-full h-[1px] border-t border-t-[#333333]"></div>
        <Link href={'/shop'} onClick={() => closeMenubar()}>
          <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
            Shop
          </h1>
        </Link>
        <div className="w-full h-[1px] border-t border-t-[#333333]"></div>
        <Link href={'/contact'} onClick={() => closeMenubar()}>
          <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
            Contact
          </h1>
        </Link>
        <div className="w-full h-[1px] border-t border-t-[#333333]"></div>
      </motion.div>
      {/* )} */}
    </div>
  )
}

export default Navbar
