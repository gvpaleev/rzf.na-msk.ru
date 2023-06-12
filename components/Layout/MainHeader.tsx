'use client'

import { FC } from 'react'

import { HeaderDescription } from '@components/Layout/HeaderDescription'
import { RegionButton } from '@components/Layout/RegionButton'
import { NaLogo } from '@components/NaLogo'

export const MainHeader: FC<{ currentRegion: string }> = ({
  currentRegion,
}) => {
  return (
    <header>
      <div className='flex justify-between -mt-5'>
        <NaLogo className='relative z-0' />
        <div className='sm:block hidden w-[734px] pt-7'>
          <HeaderDescription currentRegion={currentRegion} />
        </div>
        <div className='flex items-center justify-between pt-7'>
          <RegionButton
            currentRegion={currentRegion}
            onClick={() => {
              console.log('>>>>>>>>>>>>>>>> current_region', currentRegion)
            }}
          />
        </div>
      </div>
    </header>
  )
}
