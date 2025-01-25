import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import Link from 'next/link'
import { closeSidebar } from '../store/mobileSidebarSlice'

const ProductDropdown = () => {
  const products = useAppSelector((state) => state.sidebar.products)
    const dispatch = useAppDispatch()
  
  const handleCloseSidebar = () => {
    dispatch(closeSidebar())
  }

  return (
    <AnimatePresence>
      {products && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden flex flex-col gap-4 mt-2 ml-12"
        >
          <Link href={'/admin/products'} onClick={() => handleCloseSidebar()}>
            Products
          </Link>
          <h1>Add New Product</h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProductDropdown
