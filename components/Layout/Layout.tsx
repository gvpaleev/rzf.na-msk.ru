'use client'

import { useStore } from 'effector-react'
import { useEvent } from 'effector-react/effector-react.umd'
import { FC, ReactNode, useEffect } from 'react'

import { $currentTownName } from '@store/currentTown'

import { MainHeader } from '@components/Layout/MainHeader'
import { MobileMenu } from '@components/Layout/MobileMenu'
import { TopBanner } from '@components/Layout/TopBanner'
import { MainFooter } from '@components/MainFooter'
import { SelectTownModal } from '@components/SelectTownModal'
import { selectTownModal } from '@components/SelectTownModal/store'

import './styles.css'

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const currentTown = useStore($currentTownName)
  const openModal = useEvent(selectTownModal.openModalEvent)

  useEffect(() => {
    if (currentTown) return
    openModal()
  }, [currentTown])

  return (
    <>
      <SelectTownModal />
      <div className='flex flex-col min-h-screen'>
        <MobileMenu />
        <TopBanner />
        <div className={`flex flex-col w-full lg:w-[1126px] mx-auto flex-grow`}>
          <MainHeader currentTown={currentTown} />
          <main className='flex-grow'>{children}</main>
        </div>
        <MainFooter />
      </div>
    </>
  )
}
