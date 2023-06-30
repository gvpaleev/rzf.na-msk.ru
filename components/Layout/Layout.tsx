'use client'

import { $currentTownName } from '@/store/currentDistrict'
import { useStore } from 'effector-react'
import { FC, ReactNode } from 'react'

import { MainHeader } from '@components/Layout/MainHeader'
import { MobileMenu } from '@components/Layout/MobileMenu'
import { TopBanner } from '@components/Layout/TopBanner'
import { MainFooter } from '@components/MainFooter'

import './styles.css'

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const currentTown = useStore($currentTownName)

  return (
    <div className='flex flex-col min-h-screen'>
      <MobileMenu />
      <TopBanner />
      <div className={`flex flex-col w-full lg:w-[1126px] mx-auto flex-grow`}>
        <MainHeader currentTown={currentTown} />
        <main className='flex-grow'>{children}</main>
      </div>
      <MainFooter />
    </div>
  )
}
