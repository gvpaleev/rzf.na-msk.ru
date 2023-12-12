import React, { FC } from 'react'

import { ANInComunity, ForNewcomer, ForParticipant, Newspaper, Radio, SocialLink } from './components'
import { Meditation } from './components/Meditation'
import { News } from './components/News'

export const Main: FC = () => {
  return (
    <div className="flex flex-col lg:gap-10">
      <div className='flex flex-col lg:flex-row lg:justify-around w-full lg:gap-10'>
        <ForNewcomer />
        <ForParticipant />
        <ANInComunity />
      </div>
      <div className='w-full lg:gap-10 grid grid-cols-1 lg:grid-cols-3'>
        <News />
        <Meditation />
      </div>
      <Radio />
      <Newspaper/>
      <div className='w-full lg:gap-8 grid grid-cols-1 lg:grid-cols-3'>
        <SocialLink header="Литрес" text="Покупай литературу сообщества Анонимные Наркоманы в электронном формате на сайте" link="https://www.litres.ru/author/anonimnye-narkomany-32034193/" imgSrc="/litres.svg" />
        <SocialLink header="Youtube канал" text="Смотри личные истории и интервью на нашем канале в YouTube" link="https://www.youtube.com/channel/UCMD2eYn1t6Tz6eb4ShQMxYw" imgSrc="/Youtube.svg" />
        <SocialLink header="ВКонтакте" text="Подписывайся на нас в ВКонтакте" link="https://vk.com/na_russia_official" imgSrc="/vk.svg" />
        <SocialLink header="Дзен" text="Читайте наши истории на Дзене" link="https://dzen.ru/narcotics_anonymous" imgSrc="/Dzen.svg" />
        <SocialLink header="Подкасты АН" text="Как жить без наркотиков. Истории реальных людей, которые прекратили употреблять" link="https://podcastna.mave.digital/" imgSrc="/podcasts.svg" />
        <SocialLink header="Пожертвования" text="Поддержи сообщество" link="/payment/" imgSrc="/seven.svg" />
      </div>
    </div>
  )
}
