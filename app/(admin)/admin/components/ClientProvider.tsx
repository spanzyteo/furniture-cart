'use client'

import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import { Provider } from 'react-redux'
import { store } from '../store'

export default function ClientProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <Provider store={store}>
      <Sidebar />
      {children}
    </Provider>
  )
}
