import Image from 'next/image'
import { FC } from 'react'

import { NaLogo } from '@components/NaLogo'

export const MainHeader: FC<{ currentRegion: string }> = ({
  currentRegion,
}) => (
  <header>
    <div className='flex justify-between -mt-5'>
      <NaLogo className='relative z-0' />
      <div className='sm:block hidden w-[734px] pt-7'>
        <h1 className='font-bold md:font-black md:text-6xl text-2xl mb-2 mt-2'>
          Анонимные Наркоманы
        </h1>
        <h2 className='font-normal md:font-medium md:text-lg text-base mb-2 mt-2'>
          Официальный сайт Региона <span>{currentRegion}</span>
        </h2>
        <div className='hidden md:block'>
          Анонимные Наркоманы (АН) — это некоммерческое, непрофессиональное и
          нерелигиозное сообщество выздоравливающих зависимых, которые
          бескорыстно помогают друг другу прекратить употреблять наркотики и
          научиться жить без них. Единственная цель сообщества АН — сделать
          доступной информацию о возможности выздоровления тем, кто еще
          употребляет наркотики и страдает от наркомании. Единственное условие
          для членства - желание прекратить употребление.
        </div>
      </div>
      <button className='flex items-center justify-between w-48 hidden lg:block pt-7'>
        <Image
          className='animate-spin-slow'
          src={'/location.svg'}
          alt={'...'}
          height={23}
          width={23}
        />
        <div className='font-medium text-lg font-bold text-primary'>
          {currentRegion}
        </div>
      </button>
    </div>
  </header>
)
