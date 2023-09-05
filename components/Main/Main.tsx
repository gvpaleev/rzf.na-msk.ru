import React, { FC } from 'react'

import { ANInComunity, ForNewcomer, ForParticipant } from './components'

export const Main: FC = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-around w-full lg:gap-10'>
      <ForNewcomer />
      <ForParticipant />
      <ANInComunity />
    </div>
  )
}
