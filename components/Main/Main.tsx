import React, { FC } from 'react'

import { ANInComunity, ForNewcomer, ForParticipant } from './components'
import { Meditation } from './components/Meditation'
import { News } from './components/News'

export const Main: FC = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-20">
      <div className='flex flex-col lg:flex-row lg:justify-around w-full lg:gap-10'>
        <ForNewcomer />
        <ForParticipant />
        <ANInComunity />
      </div>

      <div className='w-full lg:gap-10 grid grid-cols-3'>
        <Meditation />
        <News />
      </div>
    </div>
  )
}
