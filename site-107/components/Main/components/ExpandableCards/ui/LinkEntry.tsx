import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FC } from 'react'

import { LinkEntryParams } from '../types'

export const LinkEntry: FC<Omit<LinkEntryParams, 'id'>> = ({ title, url }) => (
  <Link
    href={url}
    className='block border-2 border-l-0 p-4 border-white rounded-md rounded-bl-none border-spacing-4 -mt-0.5 first:mt-0 hover:underline text-white relative border-b-0 last:border-b-2 pl-10'
  >
    {/**
     * @todo: кривая верстка со стрелочками, надо бы исправить когда-нибудь
     */}
    <div className='absolute h-1/2 border-l-white border-l-2 rounded-tl-md w-full left-0 -top-0.5 border-t-0'>
      <ArrowRightIcon
        style={{ position: 'absolute', left: '-4px', top: '15px' }}
        color='white'
        width='25'
      />
    </div>
    {title}
  </Link>
)
