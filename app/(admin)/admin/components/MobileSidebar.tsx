'use client'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { toggleCategory, toggleProducts } from '../store/sidebarSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { MdSpaceDashboard } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { BsBag } from 'react-icons/bs'
import { MdWidgets } from 'react-icons/md'
import Link from 'next/link'
import { FaXmark } from 'react-icons/fa6'
import { closeSidebar } from '../store/mobileSidebarSlice'
import ProductDropdown from './ProductDropdown'
import CategoryDropdown from './CategoryDropdown'

const MobileSidebar = () => {
  const products = useAppSelector((state) => state.sidebar.products)
  const sections = useAppSelector((state) => state.sidebar)
  const dispatch = useAppDispatch()
  const sidebar = useAppSelector((state) => state.mobileSidebar.mobileSidebar)

  const handleProductClick = () => {
    dispatch(toggleProducts())
  }

  const handleCategoryClick = () => {
    dispatch(toggleCategory())
  }

  const handleCloseSidebar = () => {
    dispatch(closeSidebar())
  }

  return (
    <AnimatePresence>
      {sidebar && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="bg-white w-[300px] xl:hidden flex-col flex absolute top-2 bottom-0 left-3 rounded-xl shadow-lg z-10"
        >
          <div className="fixed h-[120px] w-[300px] flex items-center justify-between px-8">
            <h1 className="text-2xl font-semibold">PMFC</h1>
            <FaXmark
              onClick={() => handleCloseSidebar()}
              className="h-[30px] w-[30px]"
            />
          </div>
          <div className="flex flex-col items-start ml-8 mt-[130px] gap-4">
            <div className="flex items-center justify-between w-[230px]">
              <Link
                onClick={() => handleCloseSidebar()}
                href={'/admin'}
                className="flex flex-row items-center justify-between gap-8"
              >
                <MdSpaceDashboard className="h-[20px] w-[20px]" />
                <h1>Dashboard</h1>
              </Link>
            </div>
            <div
              onClick={() => handleProductClick()}
              className="flex items-center justify-between w-[230px]"
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
            <ProductDropdown />
            <div
              onClick={() => handleCategoryClick()}
              className="flex items-center justify-between w-[230px]"
            >
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
                  <IoIosArrowDown className="cursor-pointer" />
                </motion.div>
              </div>
            </div>
            <CategoryDropdown />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileSidebar
