'use client'

import { FC } from 'react'

import { HeaderTitle } from '@/components/Layout/HeaderTitle'
import { RegionButton } from '@components/Layout/RegionButton'
import { NaLogo } from '@components/NaLogo'
import { PhoneBlock } from '@components/PhoneBlock'
import { useEvent } from 'effector-react'
import { selectTownModal } from '../SelectTownModal/store'

export const MainHeader: FC<{ currentTown?: string }> = ({ currentTown }) => {
  const openModal = useEvent(selectTownModal.openModalEvent)
  return (
    <header>
      <div className='flex justify-around lg:-mt-5 content-end items-end'>
        <NaLogo className='relative z-0' />
        <div className=''>
          <HeaderTitle currentTown={currentTown} />
        </div>
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
        страдает от наркомании. Единственное условие для членства - желание
        прекратить употребление.
      </div>
    </header>
  )
}
