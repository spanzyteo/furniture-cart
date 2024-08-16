'use client'
import React from 'react'
import Image from 'next/image'
import { Parallax } from 'react-parallax'
import { Product } from '../data/product'
import { RiArrowRightSLine } from 'react-icons/ri'
import bgProduct from '../../public/bg-product.jpg'

const page: React.FC = () => {
  return (
    <>
      <div className="flex flex-col ">
        <Parallax
          strength={300}
          className="h-[230px] w-[100%] bg-cover bg-center flex items-center"
          bgImage={bgProduct.src}
        >
          <h1 className="font-bold text-3xl text-white ml-20">Our Products</h1>
        </Parallax>
        <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {Product.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-around w-[85%] lg:w-[240px] lg:h-[380px] h-[480px] mx-auto rounded-xl shadow-custom"
            >
              <div className="w-[90%] h-[180px] mt-[-1rem] mx-auto">
                <Image
                  src={item.image}
                  alt="image"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col text-left ml-4 mt-6 lg:mt-2">
                <h1 className="text-white font-semibold">{item.name}</h1>
                <h1 className="text-[#fab702] mt-2 font-semibold">
                  ${item.price}
                </h1>
              </div>
              <button className="mx-auto text-white font-semibold border sm:p-2 p-0 flex w-[90%] items-center justify-center relative hover:bg-[#fab702] hover:border-none group">
                <p>Add To Cart</p>
                <RiArrowRightSLine className="absolute text-[#fab702] right-6 h-[25px] w-[25px] font-bold transition-all duration-300 ease  group-hover:right-3 group-hover:text-black" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page
