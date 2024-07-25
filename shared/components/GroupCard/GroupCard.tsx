import { Group, Meeting } from '@/shared/api/meetings'
import Image from 'next/image'
import { FC } from 'react'
import { durationToHumanReadable } from './durationToHumanReadable'
import Link from 'next/link'
import { groupMeetingsByDay } from '../MeetingsSchedule/groupMeetingsByDay'
import { groupMeetingsByTimeSchedule } from '../MeetingsSchedule/groupMeetingsByTimeSchedule'
import { scheduleNameBySchedule } from '../MeetingsSchedule/scheduleNameBySchedule'

import './GroupCard.css';

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

export const GroupCardShort: FC<{
  group: Group,
  time: string,
  duration?: string
}> = ({group, time}) => {
  return (
    <div className={`p-4 flex flex-col items-center justify-center bg-white border-2 border-slate-500 hover:cursor-pointer hover:outline`}>
      <div className='flex flex-col items-center justify-center'>
        <Time time={time} />
        <Link href={`/group/${group.id}`} className='text-base font-bold text-blue-700 my-2 hover:underline'>
          {group.name}
        </Link>
      </div>
      {group.location?.address ? <p className='text-center'>{group.location?.address}</p> : null}
      <a
        href={'/map-link/'}
        className='text-base text-blue-700 hover:underline link link-primary'
      >
        Показать на карте
      </a>
      <Image
        className='mx-auto my-2'
        src='/special_tag_icon.svg'
        width={23}
        height={23}
        alt='special tag icon'
      />
    </div>
  )
}

export const GroupCardDetailed: FC<{
  group: Group,
  time: string,
  duration?: string
}> = ({group, time, duration}) => {
  return (
    <div className={`p-4 flex-[2] flex flex-col lg:flex-row items-center lg:items-start justify-center bg-white border-2 border-slate-500 hover:cursor-pointer hover:outline`}>
      <div className='flex flex-col items-center justify-center'>
        <Time time={time} />
        {duration ? <div className='mt-2 text-secondary-blue'>
          {durationToHumanReadable(duration)}
        </div> : null}
      </div>
      <div className='flex-[2] lg:ml-20 mt-4 lg:mt-0 flex flex-col'>
        <Link href={`/group/${group.id}`} className='text-base font-bold text-blue-700 my-2 hover:underline'>
          {group.name}
        </Link>
        {group.location?.address ? <p className='mt-4 text-center lg:text-left'>{group.location?.address}</p> : null}
        <a
          href={'/map-link/'}
          className='text-base text-center lg:text-left text-blue-700 hover:underline link link-primary mt-4'
        >
          Показать на карте
        </a>
      </div>
      <div className='flex-[1] lg:ml-20'>
        <Image
          className='mx-auto my-2'
          src='/special_tag_icon.svg'
          width={23}
          height={23}
          alt='special tag icon'
        />
      </div>
    </div>
  )
}


export const GroupMeetingsByDay: FC<{
  group: Group,
  allMeetings: Meeting[];
  meetingTypes: Record<string, string>;
}> = ({ group, allMeetings, meetingTypes }) => {

  const meetingsByDay = groupMeetingsByDay(allMeetings.filter((meeting) => meeting.group?.id === group.id));

  return (
    <div className="p-4">
      {meetingsByDay.map(([day, meetings]) => {
        const meetingsBySchedule = groupMeetingsByTimeSchedule(meetings);
        return (
          <div key={day} className="border border-gray-300 rounded-lg mb-4 p-4 flex flex-row items-center space-between">
            <div className="font-bold text-lg mb-2 flex-1">{day}</div>
            <div className="flex flex-col flex-1">
                {meetingsBySchedule.map((meeting) => (
                  <div className='flex flex-row align-center group-schedule-time' key={meeting.id}>
                    <div className="font-medium font-bold w-24">{meeting.time.slice(0, meeting.time.lastIndexOf(':'))}</div>
                    <div className="ml-4 flex flex-col">
                      <div className="font-medium underline">{scheduleNameBySchedule(meeting.schedule, day)}</div>
                      {meeting.types.map((type) => (
                        <div key={type} className="text-sm">{meetingTypes[type]}</div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};