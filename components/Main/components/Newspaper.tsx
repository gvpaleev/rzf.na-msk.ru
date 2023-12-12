import { FC } from 'react'

import Image from 'next/image'

export const Newspaper: FC = () => (
    <div className='px-6 flex flex-col lg:flex-row lg:justify-around w-full lg:gap-10 lg:items-center bg-orange-50 rounded-md '>
        <Image className='m-8' src='logo_gazeta.svg' width={201} height={66} alt='newspaper logo' />
        <figure className='flex-1'>
            <a className='text-xl font-bold text-blue-700 hover:underline' title='газета NA' href="https://gazeta.na-msk.ru/" target='_blank'>gazeta.na-msk.ru</a>
            <figcaption className='my-2'>Газета сообщества Анонимные Наркоманы региона Большая Москва <br/>создана для того, чтобы вы были всегда в курсе последних событий.</figcaption>
        </figure>
            <p className='my-6 text-xl font-light lg:text-3xl'>Быть в курсе — легко,<br/> быть частью — просто!</p>
    </div>
);
