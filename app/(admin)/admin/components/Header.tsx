import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoIosSearch, IoMdMenu, IoMdNotificationsOutline } from 'react-icons/io'

const Header = () => {
  return (
    <div className="flex items-center justify-between pt-7 pb-7 lg:ml-[20rem] text-black">
      <div className="flex items-center">
        <IoMdMenu className="lg:hidden block h-[30px] w-[30px] ml-4" />
        <h1 className="text-2xl ml-2 lg:hidden block font-semibold">PMFC</h1>
        <div className="w-[408px] relative ml-7 h-[46px]">
          <input
            type="text"
            placeholder="Search..."
            className="py-[6px] pl-[30px] w-full h-full rounded-xl"
          />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#fab702] h-full w-[50px] rounded-r-xl flex items-center justify-center">
            <IoIosSearch className="h-[25px] w-[25px] text-white" />
          </div>
        </div>
      </div>
      <div className="flex items-center mr-4 gap-4">
        <IoIosSearch className="h-[30px] w-[30px] md:hidden" />
        <IoMdNotificationsOutline className="h-[30px] w-[30px]" />
        <FaUser className="h-[30px] w-[30px]" />
      </div>
    </div>
  )
}

export default Header