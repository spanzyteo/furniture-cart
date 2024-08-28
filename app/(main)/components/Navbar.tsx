import { RiArrowRightSLine } from 'react-icons/ri'
import { IoMenuSharp } from 'react-icons/io5'
import { VscCircleFilled } from 'react-icons/vsc'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className="flex flex-row bg-[rgb(24, 25, 27)] h-[90px] items-center px-20 lg:justify-around justify-between">
      <div className="">
        <h1 className="text-white text-2xl">PMFC</h1>
      </div>
      <div className="lg:flex hidden text-white text-xs uppercase gap-6 font-semibold items-center">
        <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
          Home
        </h1>
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
        <h1 className="cursor-pointer hover:text-[#fab702] transition-all duration-300 ease">
          Contact
        </h1>
      </div>
      <div className="hidden lg:block hover:bg-[#fab702]">
        <button className="flex items-center justify-center w-[150px] h-[35px] text-white border border-white text-sm gap-1 hover:text-black hover:font-semibold hover:border-black transition-all duration-300 ease group">
          <h1 className="">Get Quote</h1>
          <RiArrowRightSLine className="h-[25px] w-[25px] text-[#fab702] font-bold transition-all duration-300 ease group-hover:text-black group-hover:ml-4" />
        </button>
      </div>
      <div className="block lg:hidden">
        <IoMenuSharp className="text-white h-[40px] w-[40px] hover:bg-[#fab702] hover:text-black transition-all duration-300 ease cursor-pointer" />
      </div>
    </div>
  )
}

export default Navbar
