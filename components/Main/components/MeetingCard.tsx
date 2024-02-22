import Image from 'next/image'
import { FC } from 'react'

export const MeetingCard: FC<{
  hoursFirst: string
  hoursSecond: string
  minuteFirst: string
  minuteSecond: string
  linkGroup: string
  groupTitle: string
  groupAddressTitle: string
  groupAddressTitleLink: string
}> = ({
  hoursFirst,
  hoursSecond,
  minuteFirst,
  minuteSecond,
  linkGroup,
  groupTitle,
  groupAddressTitle,
  groupAddressTitleLink,
}) => (
  <div className='p-4 flex flex-col items-center justify-center bg-white border-2 border-slate-500'>
    <div className=' flex items-center justify-center gap-1 '>
      <div className='p-4 bg-blue-100 rounded-lg'>{hoursFirst}</div>
      <div className='p-4 bg-blue-100 rounded-lg'>{hoursSecond}</div>
      <div className='p4'>:</div>
      <div className='p-4 bg-blue-100 rounded-lg'>{minuteFirst}</div>
      <div className='p-4 bg-blue-100 rounded-lg'>{minuteSecond}</div>
    </div>
    <a
      href={linkGroup}
      className='text-base font-bold text-blue-700 my-2 hover:underline'
    >
      {groupTitle}
    </a>
    <p className='text-center'>{groupAddressTitle}</p>
    <a
      href={groupAddressTitleLink}
      className='text-base text-blue-700 hover:underline'
    >
      Показать на карте
    </a>
    <Image
      className='mx-auto my-2'
      src='special_tag_icon.svg'
      width={23}
      height={23}
      alt='special tag icon'
    />
  </div>
)
