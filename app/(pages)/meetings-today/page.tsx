'use client'

import { GroupCardDetailed } from '@/components/GroupCard/GroupCard';
import { $meetings, $meetingsLoading } from '@/components/Main/store/meetings'
import { useUnit } from 'effector-react'
import { ChangeEvent, FC, useState } from 'react';

export default function MeetingsToday() {
  const meetings = useUnit($meetings);
  const meetingsLoading = useUnit($meetingsLoading);
  const [groupsFilter, setGroupsFilter] = useState('');
  const groupMeetings = meetings.filter(
    (meeting) => meeting.group?.name.toLowerCase().includes(groupsFilter.toLowerCase())
  );
  return (
        <div>
          <div>
            <FilterGroup onChange={setGroupsFilter}/>
          </div>
          <div className='mt-8'>
            {meetingsLoading ? <span className="loading loading-spinner loading-lg"></span> : null}         
            {meetingsLoading || groupMeetings.length > 0 ? groupMeetings.map((meeting, index) => (
              <div key={meeting!.id} className={`w-full ${index !== 0 ? 'mt-2' : ''}`}>
                <GroupCardDetailed
                  group={meeting.group!}
                  time={meeting.time}
                  duration={meeting.duration}
                />
              </div>
            )) : 'По заданному фильтру не найдено групп'}
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
