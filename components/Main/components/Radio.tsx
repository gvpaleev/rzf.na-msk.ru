import { FC } from 'react'

import Image from 'next/image'

export const Radio: FC = () => (
    <div className='px-6 flex flex flex-col lg:flex-row lg:justify-around w-full lg:gap-10 items-center bg-purple-100 rounded-md '>
        <Image className='m-8' src='/radiona.svg' width={201} height={66} alt='radioNA logo'/>
        <figure  className='flex-1'>
            <a className='text-lg text-blue-700 my-8' title='сайт Radio NA' href="https://radio-na.ru/" target='_blank'>radio-na.ru</a>
            <figcaption>Проект RADIO NA создан, чтобы вы могли услышать истории других людей, их опыт, открыть для себя что-то новое или вспомнить вашу собственную историю.</figcaption>
        </figure>
        <audio className='m-8' controls src='https://c2.radioboss.fm:18543/stream' />
    </div>

);
