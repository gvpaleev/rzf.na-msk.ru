import { FC } from 'react'

import { Colors } from '../types'
import { MainBlock } from './MainBlock'
import { MeetinCard } from './MeetinCard'

import Image from 'next/image'

export const ForParticipant: FC = () => (
  <MainBlock title='Участнику' color={Colors.BLUE}>
    <form action="#" method='GET' autoComplete='off'>
      <div className='flex flex-col gap-y-5'>
        <h6 className="text-xl font-bold dark:text-white">Найти ближайшее собрание:</h6>
        <div>
          <label htmlFor="region" className="text-sm font-medium text-gray-900 dark:text-white"></label>
          <select id="region" defaultValue="default" className="py-4 bg-gray-50 border border-gray-300 text-gray-400 text-sms rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="default">Выберете район</option>
            <option value="VAO">ВАО</option>
            <option value="VLADIMIRSKAYA OBLAST">владимиорская область</option>
            <option value="ZAO">ЗАО</option>
            <option value="ZELENOGRADSKY ADMIN OKRUG">Зеленоградский административный округ</option>
            <option value="KALUGA OBLAST">Калужская область</option>
            <option value="MOSKVA OBLAST">Московская область</option>
            <option value="NAO">НАО</option>
          </select>
        </div>
        <div>
          <label htmlFor="metro" className="text-sm font-medium text-gray-900 dark:text-white"></label>
          <select id="metro" defaultValue="default" className="py-4 bg-gray-50 border border-gray-300 text-gray-400 text-sms rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="default">Выберете метро</option>
            <option value="SELIGERSKAYA">Селигерская</option>
            <option value="AVIAMOTORNAYA">Авиамоторная</option>
            <option value="AVTOZAVODSKAYA">Автозаводская</option>
            <option value="AKADEMICHESKAYA">Академическая</option>
          </select>
        </div>
        <button type="button" className="w-full py-4 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Искать</button>
        <a href='https://yandex.ru/maps/213/moscow/chain/anonimnye_narkomany/105076300611/?ll=37.659962%2C55.737361&amp;sll=37.622504%2C55.753215&amp;sspn=1.312866%2C0.542139&amp;z=11' className='text-center text-blue-700 hover:underline'>Смотреть на карте</a>
      </div>
    </form>
    <div className='my-10'>
      <MeetinCard hoursFirst="1" hoursSecond="8" minuneFirst="0" minuteSecond="0" linkGroup="/schedule-new/" groupTitle="Группа Friends" groupAdressTitle="г. Москва, м. Кутозовская Кутузовский пр 36с3" groupAdressTitleLink="#" />
      <MeetinCard hoursFirst="1" hoursSecond="8" minuneFirst="0" minuteSecond="0" linkGroup="/schedule-new/" groupTitle="Группа Friends" groupAdressTitle="г. Москва, м. Кутозовская Кутузовский пр 36с3" groupAdressTitleLink="#" />
      <MeetinCard hoursFirst="1" hoursSecond="8" minuneFirst="0" minuteSecond="0" linkGroup="/schedule-new/" groupTitle="Группа Friends" groupAdressTitle="г. Москва, м. Кутозовская Кутузовский пр 36с3" groupAdressTitleLink="#" />
    </div>
    <Image className='mx-auto my-5' src='line_groups.svg' width={14} height={100} alt='more groups' />
    <div className='text-center'>
      <a href="/schedule-new/" className='my-2.5 text-base font-bold text-blue-700 my-8 hover:underline'>Еще 38 собраний пройдет сегодня</a>
    </div>
  </MainBlock>
)
