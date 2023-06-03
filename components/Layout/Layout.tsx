import { FC } from 'react'

import { MainFooter } from '@components/Layout/MainFooter'
import { MainHeader } from '@components/Layout/MainHeader'
import { MobileMenu } from '@components/Layout/MobileMenu'
import { TopBanner } from '@components/Layout/TopBanner'

import './styles.css'

export const MainLayout: FC = ({ children }) => {
  const currentRegion = 'Большая Москва'
  return (
    <div className='flex flex-col min-h-screen'>
      <MobileMenu />
      <TopBanner />
      <div className='flex flex-col w-full lg:w-[1126px] mx-auto flex-grow'>
        <MainHeader currentRegion={currentRegion} />
        <main className='flex-grow'>{children}</main>
        <MainFooter />
      </div>
    </div>
  )
}
