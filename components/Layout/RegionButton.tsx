import Image from 'next/image'
import { FC, MouseEventHandler } from 'react'

export const RegionButton: FC<{
  currentTown?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}> = ({ currentTown, onClick, className }) => (
  <div className={className}>
    <button onClick={onClick}>
      <Image
        className='animate-spin-slow inline'
        src={'/location.svg'}
        alt={'...'}
        height={23}
        width={23}
      />
      <span className='font-medium text-lg font-bold text-primary-blue pl-2'>
        {currentTown}
      </span>
    </button>
  </div>
)
