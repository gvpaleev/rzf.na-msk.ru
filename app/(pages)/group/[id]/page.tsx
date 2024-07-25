'use client'

import { Group } from '@/shared/api/meetings'
import { useEffect, useState } from 'react';
import { useUnit } from 'effector-react';
import { $group, $groupLoading, loadGroupByIdEvent } from '../store/groups';
import { $currentTown } from '@/shared/components/SelectTownModal/store/currentTown';
import { GroupCardShort, GroupMeetingsByDay } from '@/shared/components/GroupCard/GroupCard';
import { $scheduledMeetings, $scheduledMeetingsLoading, loadScheduledMeetingsEvent } from '../../all-meetings/store/scheduled-meetings';
import Link from 'next/link';
import { $meetingTypes } from '@/shared/components/Main/store/meetings';

export default function GroupPage({params}: {params: {id: string}}) {
  const loadGroupById = useUnit(loadGroupByIdEvent);
  const meetingTypes = useUnit($meetingTypes);
  const group = useUnit($group);
  const groupLoading = useUnit($groupLoading);
  const town = useUnit($currentTown);
  const loadScheduledMeetings = useUnit(loadScheduledMeetingsEvent);
  const meetings = useUnit($scheduledMeetings);
  const meetingsLoading = useUnit($scheduledMeetingsLoading);
  const [imagesOpen, setImagesOpen] = useState(false);
  const { id } = params;

  useEffect(() => {
    if (id) {
      loadGroupById(Number(id));
      loadScheduledMeetings(town);
    }
  }, [id, town]);

  if (groupLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (!group) {
    return <div>Группа не найдена</div>;
  }

  const groupMeetings = meetings.filter(meeting => meeting.group?.id === group.id);

  // format: Суббота 20.07.2024 19:51
  const todayDateTimeString = new Date().toLocaleString('ru-RU', {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'});

  return (
    <div>
      <Link className='text-primary-blue underline' href={`/all-meetings`}>Все собрания</Link>
      <h1>{`Группа ${group.name}`}</h1>
      <p className="text-left mt-4">{group.location?.address}</p>
      <div className="p-4 flex flex-col items-start bg-white">
        <div className="w-full max-w-lg h-0 pb-[56.25%] relative">
          <iframe
            src={group.location?.map}
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <h3 className='underline mt-4' onClick={() => setImagesOpen(!imagesOpen)}>Открыть подробную инструкцию</h3>
      {imagesOpen ? (
          <div>
            <div dangerouslySetInnerHTML={{__html: group.location?.images}} />
          </div>
        )
        : null
      }
      <div className="flex items-end mt-4">
        <h3>Сегодня: </h3>
        <span className="capitalize text-al ml-2">{todayDateTimeString}</span>
      </div>
      <div className="flex flex-col">
        {meetingsLoading ?
          <span className="loading loading-spinner loading-lg"></span> :
          <GroupMeetingsByDay group={group as Group} allMeetings={groupMeetings} meetingTypes={meetingTypes} />
        }
      </div>
    </div>
  )
}
