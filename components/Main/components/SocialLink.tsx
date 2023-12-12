import { FC } from 'react'

import Image from 'next/image'

export const SocialLink: FC<{header: string, text: string, link: string, imgSrc: string}> = ({header, text, link, imgSrc}) => (
    <a title={header} href={link} className='h-48 rounded-none p-10 flex items-center sm:rounded-xl border-solid border-2 border-indigo-400'>
        <Image className='mr-6' src={imgSrc} width={60} height={60} alt={header} />
        <div className=''>
            <p className='text-xl text-blue-700 hover:underline' ><strong>{header}</strong></p>
            <p className="text-base leading-5">{text}</p>
        </div>
    </a>
);
