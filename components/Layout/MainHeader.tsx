'use client'

import { HeaderTitle } from '@/components/Layout/HeaderTitle'
import { useUnit } from 'effector-react'
import { FC } from 'react'

import { RegionButton } from '@components/Layout/RegionButton'
import { NaLogo } from '@components/NaLogo'
import { PhoneBlock } from '@components/PhoneBlock'

import { ConfirmTownModal } from '@/Widgets/ConfirmTownModal'
import { SelectTwonModal } from '@/Widgets/SelectTownModal'
import { opendModalEvent } from '@/Widgets/ConfirmTownModal/model'

export const MainHeader: FC<{ currentTown?: string }> = ({ currentTown }) => {
  const openModal = useUnit(opendModalEvent);
  return (
    <header>
      <div className='flex flex-col lg:flex-row lg:justify-around lg:-mt-5 content-end lg:items-end'>
        <div className='flex flex-row items-end content-end'>
          <NaLogo className='relative' />
          <div className='p-1'>
            <HeaderTitle currentTown={currentTown} />
          </div>
        </div>

        <ConfirmTownModal />
        <SelectTwonModal />
        <RegionButton
          className='lg:hidden flex justify-center m-4'
          currentTown={currentTown}
          onClick={openModal} />

        <div className='flex flex-col items-end hidden lg:block'>
          <RegionButton
            className=''
            currentTown={currentTown}
            onClick={openModal}
          />
          <PhoneBlock />
        </div>
      </div>
      <div className='hidden lg:block my-8'>
        Анонимные Наркоманы (АН) — это некоммерческое, непрофессиональное и
        нерелигиозное сообщество выздоравливающих зависимых, которые бескорыстно
        помогают друг другу прекратить употреблять наркотики и научиться жить
        без них. Единственная цель сообщества АН — сделать доступной информацию
        о возможности выздоровления тем, кто еще употребляет наркотики и
        стра дает от наркомании. Единственное условие для членства - желание
        прекратить употребление.
      </div>
    </header>
  )
}
