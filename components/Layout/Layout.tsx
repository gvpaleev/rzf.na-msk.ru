'use client'

import { FC } from 'react'

import { TopBanner } from './TopBanner'
import './styles.css'

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <div className='wrapper flex flex-col min-h-screen'>
        <header>
          <TopBanner />
        </header>
        <main className='flex-grow'>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  )
}
