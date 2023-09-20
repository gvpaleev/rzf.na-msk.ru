import Link from "next/link";

type Group = {
  name: string;
  label: string;
}

type MenuItem = {
  text: string;
  href: string;
  group: string;
}

export const groups: Group[] = [
  {
    name: "newbie",
    label: "Новичку"
  },
  {
    name: "participant",
    label: "Участнику"
  },
  {
    name: "professional",
    label: "Профессионалу"
  },
];

export const menu: MenuItem[] = [
  {
    text: "Расписание групп",
    href: "javascript:void(0);",
    group: "newbie"
  },
  {
    text: "О программе «Анонимные Наркоманы»",
    href: "javascript:void(0);",
    group: "newbie"
  },
  {
    text: "Информация для родственников",
    href: "javascript:void(0);",
    group: "newbie"
  },
  {
    text: "Вопрос-ответ",
    href: "javascript:void(0);",
    group: "newbie"
  },
  {
    text: "Личные истории",
    href: "javascript:void(0);",
    group: "newbie"
  },
  {
    text: "Литература",
    href: "javascript:void(0);",
    group: "newbie"
  },
  {
    text: "Ссылки",
    href: "javascript:void(0);",
    group: "newbie"
  },


  {
    text: "Расписание групп",
    href: "javascript:void(0);",
    group: "participant"
  },
  {
    text: "Принципы сообщества",
    href: "javascript:void(0);",
    group: "participant"
  },
  {
    text: "Структура обслуживания",
    href: "javascript:void(0);",
    group: "participant"
  },
  {
    text: "Расписание комитетов",
    href: "javascript:void(0);",
    group: "participant"
  },
  {
    text: "Служения в регионе",
    href: "javascript:void(0);",
    group: "participant"
  },
  {
    text: "Новости",
    href: "javascript:void(0);",
    group: "participant"
  },
  {
    text: "Мероприятия",
    href: "javascript:void(0);",
    group: "participant"
  },
  {
    text: "Ежедневные размышления",
    href: "javascript:void(0);",
    group: "participant"
  },
  {
    text: "Литература",
    href: "javascript:void(0);",
    group: "participant"
  },
  {
    text: "Ссылки",
    href: "javascript:void(0);",
    group: "participant"
  },


  {
    text: "О сообществе «Анонимные Наркоманы»",
    href: "javascript:void(0);",
    group: "professional"
  },
  {
    text: "Рекомендательные письма",
    href: "javascript:void(0);",
    group: "professional"
  },
  {
    text: "Сотрудничество",
    href: "javascript:void(0);",
    group: "professional"
  },
  {
    text: "СМИ о нас",
    href: "javascript:void(0);",
    group: "professional"
  },
  {
    text: "Статистика",
    href: "javascript:void(0);",
    group: "professional"
  },
  {
    text: "Открытые собрания",
    href: "javascript:void(0);",
    group: "professional"
  },
  {
    text: "Обратная связь",
    href: "javascript:void(0);",
    group: "professional"
  },
  {
    text: "Ссылки",
    href: "javascript:void(0);",
    group: "professional"
  },
];

export const Menu = () => {
  return (
    <div className='flex flex-row w-full flex-grow items-start justify-end gap-x-10'>
      {groups.map(group => (
        <div key={group.name} className="flex flex-col lg:w-[274px] gap-y-5">
          <div className="text-xl font-bold">{group.label}</div>

          {menu.filter(item => item.group === group.name).map(item => (
            <div key={item.text} className="whitespace-nowrap text-sm text-primary-blue">
              <Link href={item.href}>{item.text}</Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
};