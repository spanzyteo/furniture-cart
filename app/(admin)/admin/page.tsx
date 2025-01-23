'use client'
import { useState } from 'react'
import { GoDatabase } from 'react-icons/go'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { RiChat3Line } from 'react-icons/ri'
import { RiUserAddLine } from 'react-icons/ri'
import { IoBedOutline } from 'react-icons/io5'
import { BiCabinet } from 'react-icons/bi'
import { RiArmchairLine } from 'react-icons/ri'
import { PiDeskBold } from 'react-icons/pi'
import { RiSofaFill } from 'react-icons/ri'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { BiSolidDownArrow } from 'react-icons/bi'
import { bestSellingData, BestSellingItem } from './utils/bestSelling'

type Item = {
  Icon: React.ElementType // Correct TypeScript type for a component
  label: string
}

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  const items: Item[] = [
    { Icon: IoBedOutline, label: 'Bed' },
    { Icon: BiCabinet, label: 'Cabinet' },
    { Icon: RiArmchairLine, label: 'Chair' },
    { Icon: PiDeskBold, label: 'Desk' },
    { Icon: RiSofaFill, label: 'Sofa' },
    { Icon: MdOutlineMiscellaneousServices, label: 'Misc' },
  ]

  return (
    <div className="bg-white flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 xl:ml-[20rem] lg:gap-4 gap-4">
        <div className="lg:w-[501px] w-[90%] h-[140px] bg-[#F2F2F2] rounded-xl mx-auto flex items-center justify-between px-7">
          <div className="flex flex-row items-center">
            <div className="w-[4px] h-[95px] bg-black"></div>
            <div className="flex flex-col ml-4 ">
              <h1 className="text-[#9A9A9A]">Total Revenue</h1>
              <h1 className="text-[#4A5568] font-semibold text-2xl">$6654</h1>
            </div>
          </div>
          <div className="bg-gray-400 h-[40px] w-[40px] flex items-center justify-center rounded-[7px]">
            <GoDatabase className="h-[30px] w-[30px] " />
          </div>
        </div>
        <div className="lg:w-[501px] w-[90%] h-[140px] bg-[#F2F2F2] rounded-xl mx-auto flex items-center justify-between px-7">
          <div className="flex flex-row items-center">
            <div className="w-[4px] h-[95px] bg-[#747DC6]"></div>
            <div className="flex flex-col ml-4 ">
              <h1 className="text-[#9A9A9A]">Total Orders</h1>
              <h1 className="text-[#4A5568] font-semibold text-2xl">8573</h1>
            </div>
          </div>
          <div className="bg-[#747DC60D] h-[40px] w-[40px] flex items-center justify-center rounded-[7px]">
            <RiShoppingBag3Line className="h-[30px] w-[30px] text-[#747DC6]" />
          </div>
        </div>
        <div className="lg:w-[501px] w-[90%] h-[140px] bg-[#F2F2F2] rounded-xl mx-auto flex items-center justify-between px-7">
          <div className="flex flex-row items-center">
            <div className="w-[4px] h-[95px] bg-[#EF3F3E]"></div>
            <div className="flex flex-col ml-4 ">
              <h1 className="text-[#9A9A9A]">Total Products</h1>
              <h1 className="text-[#4A5568] font-semibold text-2xl">893</h1>
            </div>
          </div>
          <div className="bg-[#EF3F3E1A] h-[40px] w-[40px] flex items-center justify-center rounded-[7px]">
            <RiChat3Line className="h-[30px] w-[30px] text-[#EF3F3E]" />
          </div>
        </div>
        <div className="lg:w-[501px] w-[90%] h-[140px] bg-[#F2F2F2] rounded-xl mx-auto flex items-center justify-between px-7">
          <div className="flex flex-row items-center">
            <div className="w-[4px] h-[95px] bg-[#9E65C2]"></div>
            <div className="flex flex-col ml-4 ">
              <h1 className="text-[#9A9A9A]">Total Customers</h1>
              <h1 className="text-[#4A5568] font-semibold text-2xl">4.6K</h1>
            </div>
          </div>
          <div className="bg-[#9E65C21A] h-[40px] w-[40px] flex items-center justify-center rounded-[7px]">
            <RiUserAddLine className="h-[30px] w-[30px] text-[#9E65C2]" />
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] w-[90%] lg:w-[1014px] mt-8 xl:ml-[20.5rem] mx-auto rounded-xl pb-4 px-4 lg:px-0 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out">
        <h1 className="mt-6 text-lg text-[#4A5568] font-semibold lg:ml-[5%] sm:ml-[10%] ml-[3%]">
          Category
        </h1>
        <div className="grid lg:grid-cols-6 grid-cols-3 gap-4 mt-4 lg:ml-6 mx-auto">
          {items.map(({ Icon, label }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                onClick={() => handleClick(index)}
                className="bg-gray-200 h-[105px] rounded-xl lg:w-[105px] w-[93px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#fab702] group"
              >
                <Icon className="h-[50px] w-[50px] opacity-50 group-hover:text-black group-hover:opacity-100" />
              </div>
              <h1
                className={`mt-1 ${
                  activeIndex === index ? 'text-[#333333]' : 'text-[#333333]'
                }`}
              >
                {label}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F2F2F2] w-[90%] lg:w-[1014px] mt-8 xl:ml-[20.5rem] mx-auto rounded-xl flex flex-col px-7">
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-lg font-semibold text-[#4A5568]">
            Best Selling Product
          </h1>
          <div className="lg:flex hidden items-center gap-2">
            <h1 className="font-semibold">Sort By:</h1>
            <h1 className="text-[#4A5568]">Today</h1>
            <BiSolidDownArrow className="h-[9px] w-[9px] text-[#4A5568] cursor-pointer" />
          </div>
        </div>
        <div className="w-full h-[1px] mt-3 bg-gray-300 mb-8"></div>
        <div className="overflow-x-auto relative">
          <table className="min-w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Orders</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {bestSellingData.map((item) => (
                <tr key={item.id} className="border-b last:border-b-0">
                  {/* Image */}
                  <td className="px-4 py-3">
                    <div className="w-[80px] h-[80px] bg-gray-200 flex items-center justify-center rounded-xl">
                      <img
                        src={item.image}
                        alt="img"
                        className="h-[60px] w-[60px] object-contain"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <h1 className="text-lg font-medium">{item.name}</h1>
                  </td>
                  <td className="px-4 py-3 text-[#4A5568]">${item.price}</td>
                  <td className="px-4 py-3 text-[#4A5568]">{item.orders}</td>
                  <td className="px-4 py-3 text-[#4A5568]">{item.stock}</td>
                  <td className="px-4 py-3 text-[#4A5568]">${item.amount}</td>
                  <td className="px-4 py-3 text-[#4A5568] whitespace-nowrap">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
