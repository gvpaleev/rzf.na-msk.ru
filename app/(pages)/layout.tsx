'use client'

import { EffectorNext } from '@effector/next'
import React, { useEffect } from 'react'

import '../globals.css'
import { SelectTownModal } from '@/shared/components/SelectTownModal';
// import TownsListModal from '@/shared/components/TownsListModal';
import { TopBanner } from '@/shared/components/Layout/TopBanner';
import { MainFooter, MainHeader } from '@/shared/components/Layout';
import { useUnit } from 'effector-react';
import { $currentTown, loadTownsEvent } from '@/shared/components/SelectTownModal/store/currentTown';
import { checkTownIsSelectedEvent } from '@/shared/components/SelectTownModal/store/selectTownFromLocalStorage';
import SideMenu from '@/shared/components/Layout/SideMenu';
import { loadMeetingTypesEvent } from '@/shared/components/Main/store/meetings';
import { AuthModal } from '@/shared/components/AuthModal';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-theme='light'>
      <body>
        <EffectorNext>
          <Main>
            {children}
          </Main>
        </EffectorNext>
      </body>
    </html>
  )
}

function Main({
  children,
}: {
  children: React.ReactNode
}) {
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
  }, [checkTownSelected, currentTown, loadTowns]);

  return (
    <>
      {/* <SelectTownModal /> */}
      {/* <TownsListModal /> */}
      <AuthModal />
      <TopBanner />
      <div className='container mx-auto flex flex-col min-h-screen'>
        <div className={`flex flex-col mx-auto flex-grow`}>
          <MainHeader currentTown={currentTown?.name} />
          <main className='flex flex-grow flex-row w-full'>
            <SideMenu />
            <div className='flex flex-col w-2/3 ml-4'>
              {children}
            </div>
          </main>
        </div>
      </div>
      <MainFooter />
    </>
  );
}
