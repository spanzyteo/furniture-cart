'use client'

import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import { Provider } from 'react-redux'
import { store } from '../store'
import Header from './Header'

export default function ClientProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <Provider store={store}>
      <div className="bg-[#F2F2F2]">
        <Sidebar />
        <Header />
        {children}
      </div>
    </Provider>
  )
}
