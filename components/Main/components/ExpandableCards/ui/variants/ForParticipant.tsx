import { GroupCard } from '@/components/Main/components/GroupCard'
import { $meetings } from '@/components/Main/store/meetings'
import { useUnit } from 'effector-react'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

import { participantLinks } from '../../config'
import { CardBase } from '../CardBase'
import { $currentTown, $towns, setCurrentTownIdEvent } from '@/components/SelectTownModal/store/currentTown'
import { $currentMetroStation, $metroStations, setCurrentMetroStationIdEvent } from '@/components/Main/store/metroStations'

const MetroStationSelect: FC<{}> = () => {
  const metroStations = useUnit($metroStations);
  const currentMetroStation = useUnit($currentMetroStation);
  const setCurrentMetroStation = useUnit(setCurrentMetroStationIdEvent)

  if (metroStations.length === 0) {
    return null;
  }

  return (
    <div>
      <label htmlFor='metro' className='label'></label>
      <select
        id='metro'
        value={currentMetroStation?.id || 'default'}
        className='select select-bordered w-full'
        onChange={(e) => {
          setCurrentMetroStation(Number(e.target.value));
        }}
      >
        <option value='default' disabled>
          Выберите метро
        </option>
        {metroStations.map((station) => <option value={station.id} key={station.id}>{station.name}</option>)}
      </select>
    </div>
  )
}

const TownSelect: FC<{}> = () => {
  const towns = useUnit($towns);
  const currentTown = useUnit($currentTown)
  const setTown = useUnit(setCurrentTownIdEvent)

  return (
      <div>
        <label htmlFor='region' className='label'></label>
        <select
          id='region'
          value={currentTown?.id || 'default'}
          className='select select-bordered w-full'
          onChange={(e) => {
            setTown(Number(e.target.value));
          }}
        >
          <option value='default' disabled>
            Выберите город
          </option>
          {towns.map((town) => <option key={town.id} value={town.id}>{town.name}</option>)}
        </select>
      </div>
  );
  }

const NUMBER_OF_MEETINGS = 3

export const ForParticipant: FC<PropsWithChildren> = () => {
  const [first, rest] = useUnit(
    $meetings.map((meetings) => {
      const groupMeetings = meetings.filter((meeting) => meeting.group);
      return [
        groupMeetings.slice(0, NUMBER_OF_MEETINGS),
        groupMeetings.slice(NUMBER_OF_MEETINGS),
    ]}),
  )

  return (
    <CardBase title='Участнику' color='blue' links={participantLinks}>
      <form action='#' method='GET' autoComplete='off'>
        <div className='flex flex-col gap-y-5'>
          <h6 className='text-xl font-bold'>Найти ближайшее собрание:</h6>
          <TownSelect />
          <MetroStationSelect />
          <button type='button' className='btn btn-primary'>
            Искать
          </button>
        </div>
      </form>
      <div className='my-10 flex flex-col items-center w-full'>
        <a
          href='https://yandex.ru/maps/213/moscow/chain/anonimnye_narkomany/105076300611/?ll=37.659962%2C55.737361&amp;sll=37.622504%2C55.753215&amp;sspn=1.312866%2C0.542139&amp;z=11'
          className='link link-primary'
        >
          Смотреть на карте
        </a>
        <div className='divider'></div>
        {first.map((meeting, index) => (
          <div key={meeting!.id}>
            <GroupCard
              group={meeting.group!}
              time={meeting.time}
            />
            {index !== first.length - 1 && <div className='divider'></div>}
          </div>
        ))}
      </div>
      {rest.length > 0 ? (
        <>
          <Image
            className='mx-auto my-5'
            src='line_groups.svg'
            width={14}
            height={100}
            alt='more groups'
          />
          <div className='text-center'>
            <a
              href='/schedule-new/'
              className='text-base font-bold text-blue-700 my-8 hover:underline'
            >
              Еще {rest.length} собраний пройдет сегодня
            </a>
          </div>
        </>
      ) : null}
    </CardBase>
  )
}
