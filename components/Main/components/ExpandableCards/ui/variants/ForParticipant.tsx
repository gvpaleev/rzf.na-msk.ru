import { MeetingCard } from '@/components/Main/components/MeetingCard'
import { $meetings } from '@/components/Main/store/meetings'
import { useUnit } from 'effector-react'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

import { participantLinks } from '../../config'
import { CardBase } from '../CardBase'

type Selection = { name: string; value: string }

const MetroStations: FC<{
  stations: Selection[]
}> = () => {
  return (
    <div>
      <label htmlFor='metro' className='label'></label>
      <select
        id='metro'
        defaultValue='default'
        className='select select-bordered w-full'
      >
        <option value='default' disabled>
          Выберите метро
        </option>
        <option value='SELIGERSKAYA'>Селигерская</option>
        <option value='AVIAMOTORNAYA'>Авиамоторная</option>
        <option value='AVTOZAVODSKAYA'>Автозаводская</option>
        <option value='AKADEMICHESKAYA'>Академическая</option>
      </select>
    </div>
  )
}

const TownRegions: FC<{ regions: Selection[] }> = () => (
  <div>
    <label htmlFor='region' className='label'></label>
    <select
      id='region'
      defaultValue='default'
      className='select select-bordered w-full'
    >
      <option value='default' disabled>
        Выберете район
      </option>
      <option value='VAO'>ВАО</option>
      <option value='VLADIMIRSKAYA OBLAST'>Владимирская область</option>
      <option value='ZAO'>ЗАО</option>
      <option value='ZELENOGRADSKY ADMIN OKRUG'>
        Зеленоградский административный округ
      </option>
      <option value='KALUGA OBLAST'>Калужская область</option>
      <option value='MOSKVA OBLAST'>Московская область</option>
      <option value='NAO'>НАО</option>
    </select>
  </div>
)

const NUMBER_OF_MEETINGS = 3

export const ForParticipant: FC<PropsWithChildren> = () => {
  const [first, rest] = useUnit(
    $meetings.map((meetings) => [
      meetings.slice(0, NUMBER_OF_MEETINGS),
      meetings.slice(NUMBER_OF_MEETINGS),
    ]),
  )

  return (
    <CardBase title='Участнику' color='blue' links={participantLinks}>
      <form action='#' method='GET' autoComplete='off'>
        <div className='flex flex-col gap-y-5'>
          <h6 className='text-xl font-bold'>Найти ближайшее собрание:</h6>
          <TownRegions regions={[]} />
          <MetroStations stations={[]} />
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
          <div key={meeting.id}>
            <MeetingCard
              time='18:00'
              linkGroup='/schedule-new/'
              groupTitle={meeting.name}
              groupAddressTitle={meeting.location.address}
              groupAddressTitleLink='#'
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
