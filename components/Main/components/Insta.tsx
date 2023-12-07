import { FC } from 'react'

import Image from 'next/image'

export const Insta: FC = () => (
    <a title='instagram' href='https://www.instagram.com/narcotics_anonymous_russia/' className='px-10 flex items-center rounded-md border-solid border-2 border-indigo-400' target='_blank'>
        <Image className='m-8' src='/Insta.svg' width={69} height={69} alt='Instagram widget' />
        <span>Подписывайся на нас<br /> в <strong>Инстаграм</strong></span>
    </a>
);