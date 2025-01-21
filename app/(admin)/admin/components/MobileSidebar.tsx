'use client'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { closeSidebar, toggleSection } from '../store/sidebarSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { MdSpaceDashboard } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { BsBag } from 'react-icons/bs'
import { MdWidgets } from 'react-icons/md'
import Link from 'next/link'
import { FaXmark } from 'react-icons/fa6'



const MobileSidebar = () => {
  const sections = useAppSelector((state) => state.sidebar.sections)
  const dispatch = useAppDispatch()
  const sidebar = useAppSelector((state) => state.sidebar.mobileSidebar)

  const handleClick = (section: string) => {
    dispatch(toggleSection(section))
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
          className="bg-white w-[300px] xl:hidden flex-col flex absolute top-2 bottom-0 left-3 rounded-xl shadow-lg"
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
                href={'/admin'}
                className="flex flex-row items-center justify-between gap-8"
              >
                <MdSpaceDashboard className="h-[20px] w-[20px]" />
                <h1>Dashboard</h1>
              </Link>
            </div>
            <div className="flex items-center justify-between w-[230px]">
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
                  <IoIosArrowDown
                    onClick={() => handleClick('products')}
                    className="cursor-pointer"
                  />
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
                  <h1>Order History</h1>
                  <h1>Products</h1>
                  <h1>Customers</h1>
                  <h1>Add Product</h1>
                  <h1>Reviews</h1>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex items-center justify-between w-[230px]">
              <div className="flex flex-row items-center justify-between gap-8">
                <MdWidgets className="h-[20px] w-[20px]" />
                <h1>Widgets</h1>
              </div>
              <div className="">
                <motion.div
                  animate={{ rotate: sections.widgets ? 180 : 0 }}
                  initial={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown
                    onClick={() => handleClick('widgets')}
                    className="cursor-pointer"
                  />
                </motion.div>
              </div>
            </div>
            <AnimatePresence>
              {sections.widgets && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden flex flex-col gap-4 mt-2 ml-12"
                >
                  <h1>Widgets</h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileSidebar
