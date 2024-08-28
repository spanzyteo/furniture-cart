'use client' // Mark this as a client component

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const pathname = usePathname()

  const isAdminPage = pathname.startsWith('/admin')

  return (
    <>
      {!isAdminPage && <Navbar />}
      <main>{children}</main>
      {!isAdminPage && <Footer />}
    </>
  )
}
