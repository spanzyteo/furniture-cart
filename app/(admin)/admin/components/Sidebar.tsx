'use client'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { toggleCategory, toggleProducts } from '../store/sidebarSlice'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdSpaceDashboard } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { BsBag } from 'react-icons/bs'
import { MdWidgets } from 'react-icons/md'
import Link from 'next/link'


const Sidebar = () => {
  const sections = useAppSelector((state) => state.sidebar)
  const dispatch = useAppDispatch()

  const handleProductClick = () => {
    dispatch(toggleProducts())
  }

  const handleCategoryClick = () => {
    dispatch(toggleCategory())
  }

  return (
    <>
      <div className="bg-white fixed w-[300px] xl:flex flex-col hidden top-2 bottom-0 left-3 rounded-xl shadow-2xl z-50">
        <div className=" h-[120px] w-[300px] flex items-center justify-center">
          <h1 className="text-2xl font-semibold">PMFC</h1>
        </div>
        <div className="flex flex-col items-start ml-8 gap-4">
          <div className="flex items-center justify-between w-[230px]">
            <Link
              href={'/admin'}
              className="flex flex-row items-center justify-between gap-8"
            >
              <MdSpaceDashboard className="h-[20px] w-[20px]" />
              <h1>Dashboard</h1>
            </Link>
          </div>
          <div
            onClick={() => handleProductClick()}
            className="flex items-center justify-between w-[230px] cursor-pointer"
          >
            <div className="flex flex-row items-center justify-between gap-8">
              <BsBag className="h-[20px] w-[20px]" />
              <h1>Products</h1>
            </div>
            <div className="">
              <motion.div
                animate={{ rotate: sections.products ? 180 : 0 }}
                initial={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoIosArrowDown className="cursor-pointer" />
              </motion.div>
            </div>
          </div>
          <AnimatePresence>
            {sections.products && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden flex flex-col gap-4 mt-2 ml-12"
              >
                <Link href={'/admin/products'}>Products</Link>
                <Link href={'/admin/add-new-products'}>Add New Product</Link>
              </motion.div>
            )}
          </AnimatePresence>
          <div onClick={() => handleCategoryClick()} className="flex items-center justify-between w-[230px] cursor-pointer">
            <div className="flex flex-row items-center justify-between gap-8">
              <MdWidgets className="h-[20px] w-[20px]" />
              <h1>Category</h1>
            </div>
            <div className="">
              <motion.div
                animate={{ rotate: sections.category ? 180 : 0 }}
                initial={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoIosArrowDown
                  className="cursor-pointer"
                />
              </motion.div>
            </div>
          </div>
          <AnimatePresence>
            {sections.category && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden flex flex-col gap-4 mt-2 ml-12"
              >
                <Link href={'/admin/category'}>Category List</Link>
                <h1 href={'/admin/add-new-category'}>Add New Category</h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Sidebar
