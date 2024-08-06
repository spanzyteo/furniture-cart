'use client'
import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax'
import Image from 'next/image'
import wide from '../../public/wide1.jpg'
import { DataReview, reviewData } from '../data/reviews'
import { RiDoubleQuotesL } from 'react-icons/ri'

const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const nextReview = () => {
    if (isLargeScreen) {
      setCurrentIndex((currentIndex + 2) % reviewData.length)
    } else {
      setCurrentIndex((currentIndex + 1) % reviewData.length)
    }
  }

  const prevReview = () => {
    if (isLargeScreen) {
      setCurrentIndex(
        (currentIndex - 2 + reviewData.length) % reviewData.length
      )
    } else {
      setCurrentIndex(
        (currentIndex - 1 + reviewData.length) % reviewData.length
      )
    }
  }

  return (
    <>
      <Parallax
        strength={300}
        className="lg:h-[613px] md:h-[635px] sm:h-[692px] h-[750px] w-full relative"
        bgImage={wide.src}
      >
        <div className="flex flex-col items-center">
          <div className="mt-20">
            <h1 className="uppercase text-white text-[26px] font-thin text2">
              Customer Says
            </h1>
          </div>
          <div className="flex mt-10 mx-auto gap-5 items-center">
            <div className="w-[150px] sm:w-[200px] md:w-[300px] border-b-[rgb(248, 249, 250)] border-b"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-[#fab702]"></div>
            <div className="w-[150px] sm:w-[200px] md:w-[300px] border-b-[rgb(248, 249, 250)] border-b"></div>
          </div>
        </div>
        <div className="mt-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {reviewData
              .slice(currentIndex, currentIndex + (isLargeScreen ? 2 : 1))
              .map((review: DataReview) => (
                <div
                  key={review.id}
                  className="h-[386px] md:h-[242px] lg:h-[271px] w-[70%] lg:w-[542px] bg-black mx-auto opacity-75"
                >
                  <div className="w-[70px] h-[60px] bg-[#fab702] align-top text-left z-10 flex items-center justify-center">
                    <RiDoubleQuotesL className="text-black h-[40px] w-[40px]" />
                  </div>
                  <div className="w-[80%] mx-auto">
                    <p className="text-white w-full ml-8">{review.review}</p>
                    <p className="text-[#fab702] ml-8 mt-8 text-[12px]">{review.name}</p>
                  </div>
                  {/* <div className="mt-10">
                    <p className="text-[#fab702]">{review.name}</p>
                  </div> */}
                </div>
              ))}
          </div>
        </div>
      </Parallax>
    </>
  )
}

export default CustomerReviews
