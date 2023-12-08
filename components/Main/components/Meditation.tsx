import { FC, useEffect, useMemo, useState } from 'react'

import { Colors } from '../types'
import { MainBlock } from './MainBlock'

import parse from 'html-react-parser';
import Link from 'next/link';

const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

export const Meditation: FC = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/daily-meditation/`).then(async resp => (await resp.json())[0]).then(setData);
  }, []);

  const item = useMemo(() => data && {
    date: `${data.day} ${MONTHS[data.month - 1]}`,
    title: <>{parse(data.title)}</>,
    quote: <>{parse(data.quote)}</>,
    source: <>{parse(data.quote_from)}</>,
    text: <>{parse(data.body)}</>,
    just4today: <>ТОЛЬКО СЕГОДНЯ: {parse(data.jft)}</>,
  }, [data]);

  const [expanded, setExpanded] = useState(false);

  return item ? (
    <div className='flex p-10 lg:p-0 flex-col col-span-2'>
      <h1 className="hidden lg:block text-[36px] font-bold">Медитация на сегодня</h1>
      <h1 className="block lg:hidden text-[20px] font-bold">Ежедневные размышления</h1>

      <div className='border-t mt-5 border-secondary-blue'>
        <div className='mt-4 text-md'>
          {item.date}
        </div>

        <div className='text-lg font-bold'>
          {item.title}
        </div>

        <div className="mt-4 flex flex-row items-end gap-10 lg:gap-20">
          <div className='w-full'>
            <div className='text-md'>
              {item.quote}
            </div>
            <div className='text-md text-right whitespace-nowrap text-secondary-blue'>
              {item.source}
            </div>
          </div>
        </div>

        <div className={`mt-4 text-md ${expanded ? '' : 'line-clamp-4'} lg:line-clamp-none`}>
          {item.text}
          <br />
          <br />
          {item.just4today}
        </div>

        {!expanded && (
          <div className='block lg:hidden border-t mt-5 pt-5 border-secondary-blue'>
            <div className='text-md text-primary-blue text-underline'>
              <Link href={'javascript: void(0);'} onClick={() => setExpanded(true)}>Читать далее</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null;
}
