'use client'

import { useEvent, useStore } from 'effector-react'
import { FC, ReactNode, useEffect } from 'react'

import { MainHeader } from '@components/Layout/MainHeader'
import { MobileMenu } from '@components/Layout/MobileMenu'
import { TopBanner } from '@components/Layout/TopBanner'
import { MainFooter } from '@components/MainFooter'
import SelectTownModal from '@components/SelectTownModal'

import { $currentTown } from '../SelectTownModal/store/currentTown'
import { checkTownIsSelectedEvent } from '../SelectTownModal/store/selectTownFromLocalStorage'
import TownsListModal from '../TownsListModal'
import './styles.css'

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const currentTown = useStore($currentTown)

  const checkTownSelected = useEvent(checkTownIsSelectedEvent)

  useEffect(() => {
    if (currentTown) return
    checkTownSelected()
  }, [])

  return (
    <>
      <SelectTownModal />
      <TownsListModal />
      <div className='flex flex-col min-h-screen'>
        <MobileMenu />
        <TopBanner />
        <div className={`flex flex-col w-full lg:w-128 mx-auto flex-grow`}>
          <MainHeader currentTown={currentTown?.name} />
          <main className='flex-grow'>{children}</main>
        </div>
        <MainFooter />
      </div>
    </>
  )
}
