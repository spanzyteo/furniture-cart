import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closeSidebar } from '../store/mobileSidebarSlice'

const CategoryDropdown = () => {
  const sections = useAppSelector((state) => state.sidebar)
  const dispatch = useAppDispatch()

  const handleCloseSidebar = () => {
    dispatch(closeSidebar())
  }
  return (
    <AnimatePresence>
      {sections.category && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden flex flex-col gap-4 mt-2 ml-12"
        >
          <h1>Category List</h1>
          <h1>Add New Category</h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CategoryDropdown
