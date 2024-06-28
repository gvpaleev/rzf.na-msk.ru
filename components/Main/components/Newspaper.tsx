import { FC } from 'react'

import Image from 'next/image'

export const Newspaper = ({
  small,
}: {
  small?: boolean,
}) => {
  if (small) {
    return (
      <div className='flex flex-col'>
        <Image className='m-8' src='logo_gazeta.svg' width={201} height={66} alt='Газета' />
        <p className='my-6 text-2xl font-light'>Быть в курсе — легко,<br/> быть частью — просто!</p>
        <figure className='flex-1'>
          <figcaption className='my-2 text-xs'>Газета сообщества Анонимные Наркоманы региона Большая Москва <br/>создана для того, чтобы вы были всегда в курсе последних событий.</figcaption>
          <a className='text-xl font-bold text-blue-700 my-8 hover:underline' title='сайт газеты NA' href="https://gazeta.na-msk.ru/" target='_blank'>gazeta.na-msk.ru</a>
        </figure>
      </div>
    )
  } else {
    return (
      <div className='px-6 flex flex-col lg:flex-row lg:justify-around w-full lg:gap-10 items-center bg-orange-50 rounded-md '>
        <Image className='m-8' src='logo_gazeta.svg' width={201} height={66} alt='Газета' />
        <figure className='flex-1'>
          <a className='text-xl font-bold text-blue-700 my-8 hover:underline' title='сайт газеты NA' href="https://gazeta.na-msk.ru/" target='_blank'>gazeta.na-msk.ru</a>
          <figcaption className='my-2'>Газета сообщества Анонимные Наркоманы региона Большая Москва <br/>создана для того, чтобы вы были всегда в курсе последних событий.</figcaption>
        </figure>
        <p className='my-6 text-2xl font-light lg:text-3xl xl:text-5xl'>Быть в курсе — легко,<br/> быть частью — просто!</p>
      </div>
    )
  }
};
