import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../../globals.css'
import ClientProvider from './components/ClientProvider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PMFC Furniture | Admin',
  description: 'The admin panel for managing furniture backend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClientProvider>
      <main>{children}</main>
    </ClientProvider>
  )
}
