import { FC } from 'react'

import Image from 'next/image'

export const MeetinCard: FC<{ hoursFirst: string, hoursSecond: string, minuneFirst: string, minuteSecond: string, linkGroup: string, groupTitle: string,groupAdressTitle:string,groupAdressTitleLink:string }> = ({ hoursFirst, hoursSecond,minuneFirst,minuteSecond, linkGroup, groupTitle, groupAdressTitle,groupAdressTitleLink }) => (
    <div className='p-4 flex flex-col items-center justify-center bg-white border-2 border-slate-500'>
        <div className=' flex items-center justify-center gap-1 '>
            <div className='p-4 bg-blue-100 rounded-lg'>{hoursFirst}</div>
            <div className='p-4 bg-blue-100 rounded-lg'>{hoursSecond}</div>
            <div className='p4'>:</div>
            <div className='p-4 bg-blue-100 rounded-lg'>{minuneFirst}</div>
            <div className='p-4 bg-blue-100 rounded-lg'>{minuteSecond}</div>
        </div>
        <a href={linkGroup} className='my-2.5 text-base font-bold text-blue-700 my-8 hover:underline'>{groupTitle}</a>
        <p className='text-center'>{groupAdressTitle}</p>
        <a href={groupAdressTitleLink} className='text-base text-blue-700 hover:underline'>Показать на карте</a>
        <Image className='mx-auto my-5' src='special_tag_icon.svg' width={23} height={23} alt='special tag icon' />
    </div>
);
