import React, { FC } from 'react'

import { MainBlock } from './components'
import { Colors } from './types'

export const Main: FC = () => {
  return (
    <div className='flex justify-around h-[1510px] w-full gap-10'>
      <MainBlock title='Новичку' color={Colors.GREEN}>
        Content
      </MainBlock>
      <MainBlock title='Участнику' color={Colors.BLUE}>
        Content
      </MainBlock>
      <MainBlock title='АН в обществе' color={Colors.RED}>
        Content
      </MainBlock>
    </div>
  )
}
