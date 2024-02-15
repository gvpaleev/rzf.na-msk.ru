import { FC, ReactNode } from 'react'
import { useState } from 'react'

import { Hamburger } from '@components/Main/components/Hanmburger'

import { CONTENT, HEADER } from '../constants'
import { Colors } from '../types'

export const MainBlock: FC<{
  title: string
  color: Colors
  children: ReactNode
}> = ({ title, children, color }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className='flex flex-col w-full'>
      <div className={HEADER[color]}>
        <div className='text-white text-3xl font-bold'>{title}</div>
        <Hamburger onChange={setIsNavOpen}></Hamburger>
      </div>
      <div className={CONTENT[color]}>{children}</div>
    </div>
  )
}
