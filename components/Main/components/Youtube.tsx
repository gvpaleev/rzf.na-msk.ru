import { FC } from 'react'

import Image from 'next/image'

export const Youtube: FC = () => (
    <a title='Youtube' href='https://www.youtube.com/channel/UCMD2eYn1t6Tz6eb4ShQMxYw' className='px-10 flex items-center rounded-md border-solid border-2 border-indigo-400'>
        <Image className='m-8' src='/Youtube.svg' width={69} height={69} alt='YouTube widget' />
        <span>Смотри личные истории<br/> и интервью на нашем<br/> канале в <strong>YouTube</strong></span>
    </a>
);