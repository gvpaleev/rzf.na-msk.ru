'use client'

import { MeetingsSchedule } from '@/shared/components/MeetingsSchedule/MeetingsSchedule';
import { $meetings, $meetingsLoading } from '@/shared/components/Main/store/meetings'
import { useUnit } from 'effector-react'
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { $scheduledMeetings, $scheduledMeetingsLoading, loadScheduledMeetingsEvent } from './store/scheduled-meetings';
import { $currentTown } from '@/shared/components/SelectTownModal/store/currentTown';

export default function AllMeetings() {
  const town = useUnit($currentTown);
  const loadScheduledMeetings = useUnit(loadScheduledMeetingsEvent)

  useEffect(() => {
    if (town) {
      loadScheduledMeetings(town);
    }
  }, [town]);

  const meetings = useUnit($scheduledMeetings);
  const meetingsLoading = useUnit($scheduledMeetingsLoading);
  const [groupsFilter, setGroupsFilter] = useState('');
  const groupMeetings = meetings.filter(
    (meeting) => meeting.group?.name.toLowerCase().includes(groupsFilter.toLowerCase())
  );
  return (
    <div>
      <div>
        <FilterGroup onChange={setGroupsFilter} />
      </div>
      <div className='mt-8'>
        {meetingsLoading ?
          <span className="loading loading-spinner loading-lg"></span> :
          groupMeetings.length > 0 ?
            <MeetingsSchedule meetings={groupMeetings} /> :
            'По заданному фильтру не найдено групп'

        }
      </div>
    </div>
  )
}

interface FilterProps {
  onChange: (text: string) => void;
}

const FilterGroup: FC<FilterProps> = (props) => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    props.onChange(value);
  }

  return (
    <input
      type='text'
      className='input input-bordered w-full'
      placeholder='Что будем искать?'
      value={value}
      onChange={onChange}
    />
  )
}
