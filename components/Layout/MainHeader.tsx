'use client'

import { FC } from 'react'

import { HeaderDescription } from '@components/Layout/HeaderDescription'
import { RegionButton } from '@components/Layout/RegionButton'
import { NaLogo } from '@components/NaLogo'
import { PhoneBlock } from '@components/PhoneBlock'
import { useEvent } from 'effector-react'
import { selectTownModal } from '../SelectTownModal/store'

export const MainHeader: FC<{ currentTown?: string }> = ({ currentTown }) => {
  const openModal = useEvent(selectTownModal.openModalEvent)
  return (
    <header>
      <div className='flex justify-between -mt-5'>
        <NaLogo className='relative z-0 hidden sm:block' />
        <div className='sm:block hidden w-[734px] pt-7'>
          <HeaderDescription currentTown={currentTown} />
        </div>
        <div className='flex flex-col items-center sm:items-start justify-around pt-7'>
          <RegionButton
            className='hidden sm:block'
            currentTown={currentTown}
            onClick={openModal}
          />
          <PhoneBlock />
        </div>
      </div>
    </header>
  )
}
