
import { FC } from 'react'

import Image from 'next/image'

export const OrganizationCard: FC<{ header: string, alt: string, text: string, link: string, imgSrc: string }> = ({ header, alt, text, link, imgSrc }) => (
    <div className='flex gap-5 items-start'>
        <Image src={imgSrc} width={60} height={60} alt={alt} />
        <div className='flex gap-5 flex-col'>
            <a href={link} className='text-xl font-bold text-blue-700 hover:underline'>{header}</a>
            <p>{text}</p>
        </div>
    </div>
);
