import Image from 'next/image'
import { FC } from 'react'

const Time: FC<{ time: string }> = ({ time }) => {
  const [hour, minutes] = time.split(':')
  return (
    <div className='flex items-center justify-center gap-1 '>
      {hour.split('').map((digit, index) => (
        <div key={index} className='p-4 bg-info rounded-lg'>
          {digit}
        </div>
      ))}
      <div className='p4'>:</div>
      {minutes.split('').map((digit, index) => (
        <div key={index} className='p-4 bg-info rounded-lg'>
          {digit}
        </div>
      ))}
    </div>
  )
}

export const MeetingCard: FC<{
  // пример 09:00
  time: string
  linkGroup: string
  groupTitle: string
  groupAddressTitle: string
  groupAddressTitleLink: string
}> = ({
  time,
  linkGroup,
  groupTitle,
  groupAddressTitle,
  groupAddressTitleLink,
}) => {
  return (
    <div className='p-4 flex flex-col items-center justify-center bg-white border-2 border-slate-500'>
      <Time time={time} />
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
}
