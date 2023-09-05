import { Bars3Icon } from '@heroicons/react/20/solid'
import { FC, ReactNode } from 'react'

import { CONTENT, HEADER } from '../constants'
import { Colors } from '../types'

export const MainBlock: FC<{
  title: string
  color: Colors
  children: ReactNode
}> = ({ title, children, color }) => {
  return (
    <div className='flex flex-col w-full'>
      <div className={HEADER[color]}>
        <div className='text-white text-3xl font-bold'>{title}</div>
        <Bars3Icon className='text-white w-8' />
      </div>
      <div className={CONTENT[color]}>{children}</div>
    </div>
  )
}
