import { Newspaper, Radio, SocialLink } from "../Main/components";
import { communityLinks, newcomerLinks, participantLinks } from "../Main/components/ExpandableCards/config";
import { CardBase } from "../Main/components/ExpandableCards/ui/CardBase";

export default function SideMenu() {
  return (
    <div className='hidden md:flex flex-col lg:w-1/3'>
      <CardBase title='Новичку' color='green' links={newcomerLinks} isSidebar/>
      <CardBase title='Участнику' color='blue' links={participantLinks} isSidebar/>
      <CardBase title='АН в обществе' color='red' links={communityLinks} isSidebar />
      <Radio small={true} />
      <Newspaper small={true} />
      <SocialLink
        header='Литрес'
        text='Покупай литературу сообщества Анонимные Наркоманы в электронном формате на сайте'
        link='https://www.litres.ru/author/anonimnye-narkomany-32034193/'
        imgSrc='/litres.svg'
      />
      <SocialLink
        header='Youtube канал'
        text='Смотри личные истории и интервью на нашем канале в YouTube'
        link='https://www.youtube.com/channel/UCMD2eYn1t6Tz6eb4ShQMxYw'
        imgSrc='/Youtube.svg'
      />
      <SocialLink
        header='ВКонтакте'
        text='Подписывайся на нас в ВКонтакте'
        link='https://vk.com/na_russia_official'
        imgSrc='/vk.svg'
      />
      <SocialLink
        header='Дзен'
        text='Читайте наши истории на Дзене'
        link='https://dzen.ru/narcotics_anonymous'
        imgSrc='/Dzen.svg'
      />
      <SocialLink
        header='Подкасты АН'
        text='Как жить без наркотиков. Истории реальных людей, которые прекратили употреблять'
        link='https://podcastna.mave.digital/'
        imgSrc='/podcasts.svg'
      />
      <SocialLink
        header='Пожертвования'
        text='Поддержи сообщество'
        link='/payment/'
        imgSrc='/seven.svg'
      />
    </div>
  )
}
