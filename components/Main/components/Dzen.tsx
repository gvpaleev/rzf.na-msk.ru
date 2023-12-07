import { FC } from 'react'

import Image from 'next/image'

export const Dzen: FC = () => (
    <a title='Yandex.Dzen' href='https://dzen.ru/narcotics_anonymous' className='px-10 flex items-center rounded-md border-solid border-2 border-indigo-400' target='_blank'>
        <Image className='m-8' src='/Dzen.svg' width={69} height={69} alt='Yandex.Dzen widget' />
        <span>Читай наши истории <br /> <strong>на Яндекс.Дзен</strong></span>
    </a>
);