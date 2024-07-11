'use client'

import { useUnit } from 'effector-react'
import { FC, ReactNode, useEffect } from 'react'

import { MainHeader } from '@/shared/components/Layout/MainHeader'
import { TopBanner } from '@/shared/components/Layout/TopBanner'
import { MainFooter } from '@/shared/components/MainFooter'
import { SelectTownModal } from '@/shared/components/SelectTownModal'

import { $currentTown, loadTownsEvent } from '../SelectTownModal/store/currentTown'
import { checkTownIsSelectedEvent } from '../SelectTownModal/store/selectTownFromLocalStorage'
import TownsListModal from '../TownsListModal'
import { loadMeetingTypesEvent } from '../Main/store/meetings'
import { AuthModal } from '../AuthModal'

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const loadTowns = useUnit(loadTownsEvent);
  const loadMeetingTypes = useUnit(loadMeetingTypesEvent);
  const currentTown = useUnit($currentTown)

  const checkTownSelected = useUnit(checkTownIsSelectedEvent)

  useEffect(() => {
    loadTowns();
    loadMeetingTypes();
    /**
     * @todo: сейчас модалка вызывается всегда-всегда,
     * хотя, например, на 404 ей не следует появляться.
     * Вероятно следует пересмотреть логику появления модалки
     */
    if (currentTown) return
    checkTownSelected()
  }, [])

  return (
    <>
      <TownsListModal />
      <AuthModal />
      <TopBanner />
      <div className='container mx-auto flex flex-col min-h-screen'>
        <div className={`flex flex-col mx-auto flex-grow`}>
          <MainHeader currentTown={currentTown?.name} />
          <main className='flex-grow'>{children}</main>
        </div>
      </div>
      <MainFooter />
    </>
  )
}
