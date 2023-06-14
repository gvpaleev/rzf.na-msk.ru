'use client'

import { $currentRegionName } from '@/store/currentDistrict'
import { useStore } from 'effector-react'
import { FC, ReactNode } from 'react'

import { MainFooter } from '@components/Layout/MainFooter'
import { MainHeader } from '@components/Layout/MainHeader'
import { MobileMenu } from '@components/Layout/MobileMenu'
import { TopBanner } from '@components/Layout/TopBanner'

import './styles.css'

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const currentRegion = useStore($currentRegionName)

  return (
    <div className='flex flex-col min-h-screen'>
      <MobileMenu />
      <TopBanner />
      <div className={`flex flex-col w-full lg:w-[1126px] mx-auto flex-grow`}>
        <MainHeader currentRegion={currentRegion} />
        <main className='flex-grow'>{children}</main>
      </div>
      <MainFooter />
    </div>
  )
}
