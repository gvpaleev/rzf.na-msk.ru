import Image from 'next/image'
import { FC, MouseEventHandler } from 'react'

export const RegionButton: FC<{
  currentRegion: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}> = ({ currentRegion, onClick }) => (
  <button onClick={onClick}>
    <Image
      className='animate-spin-slow inline'
      src={'/location.svg'}
      alt={'...'}
      height={23}
      width={23}
    />
    <span className='font-medium text-lg font-bold text-primary-blue pl-2'>
      {currentRegion}
    </span>
  </button>
)
