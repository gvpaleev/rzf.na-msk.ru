import { FC } from 'react'

import { MainFooter } from '@components/MainFooter'
import { MainHeader } from '@components/MainHeader'
import { TopBanner } from '@components/TopBanner'

import './styles.css'

export const MainLayout: FC = ({ children }) => {
  const currentRegion = 'Большая Москва'

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-primary h-20 sm:hidden flex justify-between'></div>
      <TopBanner />
      <div className='flex flex-col w-full lg:w-[1126px] mx-auto flex-grow'>
        <MainHeader currentRegion={currentRegion} />
        <main className='flex-grow'>{children}</main>
        <MainFooter />
      </div>
    </div>
  )
}
