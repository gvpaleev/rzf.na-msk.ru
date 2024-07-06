import { Group, Meeting } from '@/api/meetings'
import Image from 'next/image'
import { FC } from 'react'
import { durationToHumanReadable } from '../GroupCard/durationToHumanReadable'
import Link from 'next/link'
import { groupMeetingsByDay, mapDayNumberToDay } from './mapDayNumberToDay'
import { useUnit } from 'effector-react'
import { $meetingTypes } from '../Main/store/meetings'
import { scheduleNameBySchedule } from './scheduleNameBySchedule'

export const MeetingsSchedule: FC<{
  meetings: Meeting[]
}> = ({meetings}) => {
  const groupedMeetings = new Map<number, Meeting[]>();
  const meetingTypes = useUnit($meetingTypes);

  meetings.forEach((meeting) => {
    if (meeting.group?.id) {
      if (groupedMeetings.has(meeting.group.id)) {
        groupedMeetings.set(meeting.group.id, groupedMeetings.get(meeting.group.id)!.concat(meeting));
      } else {
        groupedMeetings.set(meeting.group.id, [meeting]);
      }
    }
  });

  const meetingsByGroup = Array.from(groupedMeetings.values());
  return (
    <div>
      {meetingsByGroup.map((meetings, i) => {
        return (
          <div key={i} className='mb-5'>
            <h3 className='mb-2 text-primary-blue underline'><Link href={`/groups/${meetings[0].group!.slug}`}>{meetings[0].group!.name}</Link></h3>
            <div>
              {groupMeetingsByDay(meetings).map(([day, meetings]) => {
                return (
                  <div key={day} className='flex flex-row mt-4'>
                    <div className='w-32 font-bold'>{day}</div>
                    <div className='ml-4'>
                      {meetings.map((meeting) => {
                        return (
                          <div key={meeting.id} className='flex flex-row mt-2 first:mt-0'>
                            <div className='font-medium'>{meeting.time.slice(0, meeting.time.lastIndexOf(':'))}</div>
                            <div className='flex flex-col ml-2'>
                              <div className='font-medium underline'>{scheduleNameBySchedule(meeting.schedule, day)}</div>
                              <div>{meetingTypes[meeting.type]}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        );
      })}
    </div>
  )
}
