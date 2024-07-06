import { useUnit } from "effector-react";
import Link from "next/link";
import { authModal } from "../AuthModal/store/authModal";
import { $token, logoutEvent } from "@/utils/store/tokenStore";

type Group = {
  name: string;
  label: string;
}

type MenuItem = {
  text: string;
  href: string;
  group: string;
  action?: () => void;
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
    href: "/",
    group: "newbie"
  },
  {
    text: "О программе «Анонимные Наркоманы»",
    href: "/",
    group: "newbie"
  },
  {
    text: "Информация для родственников",
    href: "/",
    group: "newbie"
  },
  {
    text: "Вопрос-ответ",
    href: "/",
    group: "newbie"
  },
  {
    text: "Личные истории",
    href: "/",
    group: "newbie"
  },
  {
    text: "Литература",
    href: "/",
    group: "newbie"
  },
  {
    text: "Ссылки",
    href: "/",
    group: "newbie"
  },


  {
    text: "Расписание групп",
    href: "/",
    group: "participant"
  },
  {
    text: "Принципы сообщества",
    href: "/",
    group: "participant"
  },
  {
    text: "Структура обслуживания",
    href: "/",
    group: "participant"
  },
  {
    text: "Расписание комитетов",
    href: "/",
    group: "participant"
  },
  {
    text: "Служения в регионе",
    href: "/",
    group: "participant"
  },
  {
    text: "Новости",
    href: "/",
    group: "participant"
  },
  {
    text: "Мероприятия",
    href: "/",
    group: "participant"
  },
  {
    text: "Ежедневные размышления",
    href: "/",
    group: "participant"
  },
  {
    text: "Литература",
    href: "/",
    group: "participant"
  },
  {
    text: "Ссылки",
    href: "/",
    group: "participant"
  },


  {
    text: "О сообществе «Анонимные Наркоманы»",
    href: "/",
    group: "professional"
  },
  {
    text: "Рекомендательные письма",
    href: "/",
    group: "professional"
  },
  {
    text: "Сотрудничество",
    href: "/",
    group: "professional"
  },
  {
    text: "СМИ о нас",
    href: "/",
    group: "professional"
  },
  {
    text: "Статистика",
    href: "/",
    group: "professional"
  },
  {
    text: "Открытые собрания",
    href: "/",
    group: "professional"
  },
  {
    text: "Обратная связь",
    href: "/",
    group: "professional"
  },
  {
    text: "Ссылки",
    href: "/",
    group: "professional"
  },
];

export const Menu = () => {
  const openAuthModal = useUnit(authModal.openModalEvent)
  const logout = useUnit(logoutEvent);
  const accessToken = useUnit($token);
  
  const loginMenuLink = accessToken ? 
  {
    text: 'Разлогиниться',
    href: '/login',
    group: 'professional',
    action: logout,
  } :
  {
    text: 'Авторизоваться',
    href: '/login',
    group: 'professional',
    action: openAuthModal,
  }

  const additionalMenuLinks = [loginMenuLink];

  return (
    <div className='flex-row w-full flex-grow items-start justify-between gap-x-10 flex max-lg:hidden'>
      {groups.map(group => (
        <div key={group.name} className="flex flex-col grow gap-y-5">
          <div className="text-xl font-bold">{group.label}</div>

          {[...menu,...additionalMenuLinks].filter(item => item.group === group.name).map(item => (
            <div key={item.text} className="text-sm text-primary-blue">
              <Link href={item.href} onClick={item.action ? (e) => {
                e.preventDefault();
                item.action?.();
              } : undefined}>{item.text}</Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
};