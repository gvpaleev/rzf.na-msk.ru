import { ListItem } from '@/shared/components/Main/components/ListItem'

import { newcomerLinks } from '../../config'
import { CardBase } from '../CardBase'

export const ForNewcomer = () => (
  <CardBase title='Новичку' color='green' links={newcomerLinks}>
    <div className='flex flex-col gap-5 sm:gap-10'>
      <ul className='flex flex-col gap-1 sm:gap-5'>
        <ListItem>
          Анонимные Наркоманы — это бесплатное анонимное сообщество, которое
          поможет тебе отказаться от наркотиков и научиться жить без них.
        </ListItem>
        <ListItem>
          Собрания проходят по всему миру круглосуточно. Не нужно никаких
          документов, можно назваться своим или вымышленным именем, прийти и
          уйти в любой момент.
        </ListItem>
        <ListItem>
          Все, что нужно, чтобы стать членом Анонимных Наркоманов — желание
          бросить употреблять наркотики.
        </ListItem>
        <ListItem>
          Тебя никто не осудит, если на первые собрания ты придёшь, ещё
          употребляя наркотики. Многие из нас начинали именно так.
        </ListItem>
        <ListItem>
          Не важно, какие именно наркотики ты предпочитаешь. Анонимные Наркоманы
          помогают отказаться от любых веществ, изменяющих сознание.
        </ListItem>
        <ListItem>
          Анонимные Наркоманы не имеют отношения к религии, политике, медицине.
        </ListItem>
        <ListItem>
          В нашем сообществе нет никаких взносов или других платежей «за
          участие».
        </ListItem>
        <ListItem>
          Для нас очень важно сохранять анонимность, поэтому мы просим не
          разглашать услышанную на собраниях информацию.
        </ListItem>
        <ListItem>
          Группы Анонимных Наркоманов и программа 12 Шагов помогли многим
          зависимым. Возможно, помогут и тебе. Попробуй!
        </ListItem>
      </ul>
      <a href='/schedule-new/' className='text-xl font-bold hover:underline'>
        Найти ближайшее собрание
      </a>
      <div className='flex flex-col'>
        <p>Просто позвони на горячую линию по телефону:</p>
        <a
          href='tel:+74951111111'
          className='text-xl font-bold text-blue-700 my-8 hover:underline'
        >
          +7(495)505-33-96
        </a>
        <p>
          и тебе помогут попасть на твое первое
          <br /> собрание. Встретят, проведут, все
          <br /> расскажут и покажут.
        </p>
      </div>
    </div>
  </CardBase>
)
