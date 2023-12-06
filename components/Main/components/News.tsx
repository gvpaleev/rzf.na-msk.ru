import { FC, useEffect, useState } from 'react'

import { Colors } from '../types'
import { MainBlock } from './MainBlock'
import Link from 'next/link';

export const News: FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://rzf.na-msk.ru/api/news/').then(async resp => (await resp.json()).results.slice(0, 4).map((i: any) => ({ ...i, date: i.pub_date }))).then(setItems);
  }, []);

  const news = new Array(4).fill(true).map((i, j) => ({
    id: j,
    date: new Date().toISOString(),
    title: "5 сентября собрание группы «ЖечужиNA» проводиться не будет."
  }));

  return (
    <div className='flex flex-col col-span-1 p-10 lg:p-0 lg:order-last'>
      <h1 className="text-[20px] lg:text-[36px] font-bold">Новости сообщества</h1>

      {items?.map(i => (
        <div key={i.id} className='border-t my-5 border-secondary-blue'>
          <div className='my-4 text-xl'>
            {new Date(i.date).toLocaleDateString('il-IL')}
          </div>

          <div className='text-md text-primary-blue'>
            <Link href={`/news/${i.id}`}>{i.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
