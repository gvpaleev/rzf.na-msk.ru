'use client'

import { Carousel } from 'flowbite-react'
import { FC } from 'react'

import './styles.css'

export const MainLayout: FC = ({ children }) => {
  return (
    <div className='wrapper flex flex-col min-h-screen'>
      <header className='page-header'>
        <Carousel className='h-60'>
          <img
            alt='...'
            src='https://flowbite.com/docs/images/carousel/carousel-1.svg'
          />
          <img
            alt='...'
            src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
          />
          <img
            alt='...'
            src='https://flowbite.com/docs/images/carousel/carousel-3.svg'
          />
          <img
            alt='...'
            src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
          />
          <img
            alt='...'
            src='https://flowbite.com/docs/images/carousel/carousel-5.svg'
          />
        </Carousel>
      </header>
      <main className='page-main flex-grow'>{children}</main>
      <footer className='page-footer'>Footer</footer>
    </div>
  )
}
