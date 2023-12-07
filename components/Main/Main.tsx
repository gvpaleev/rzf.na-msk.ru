import React, { FC } from 'react'

import { ANInComunity, ForNewcomer, ForParticipant, Radio } from './components'
import { Meditation } from './components/Meditation'
import { News } from './components/News'
import { Youtube } from './components/Youtube'
import { Insta } from './components/Insta'
import { Dzen } from './components/Dzen'


export const Main: FC = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-10">
      <div className='flex flex-col lg:flex-row lg:justify-around w-full lg:gap-10'>
        <ForNewcomer />
        <ForParticipant />
        <ANInComunity />
      </div>
      <div className='w-full lg:gap-10 grid grid-cols-3'>
        <Meditation />
        <News />
      </div>
      <Radio/>
      <div className='flex flex-col lg:flex-row lg:justify-around w-full lg:gap-25'>
        <Youtube />
        <Insta />
        <Dzen />
      </div>
    </div>
  )
}