'use client'

import { FC } from 'react'

import { HeaderDescription } from '@components/Layout/HeaderDescription'
import { RegionButton } from '@components/Layout/RegionButton'
import { NaLogo } from '@components/NaLogo'
import { PhoneBlock } from '@components/PhoneBlock/PhoneBlock'

export const MainHeader: FC<{ currentRegion: string }> = ({
  currentRegion,
}) => (
  <header>
    <div className='flex justify-between -mt-5'>
      <NaLogo className='relative z-0' />
      <div className='sm:block hidden w-[734px] pt-7'>
        <HeaderDescription currentRegion={currentRegion} />
      </div>
      <div className='flex flex-col items-center justify-around pt-7'>
        <RegionButton
          className='hidden sm:block'
          currentRegion={currentRegion}
          onClick={() => {
            console.log('>>>>>>>>>>>>>>>> current_region', currentRegion)
          }}
        />
        <PhoneBlock />
      </div>
    </div>
  </header>
)
