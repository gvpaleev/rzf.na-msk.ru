import { FC, useEffect, useState } from 'react'

import Link from 'next/link';
import { useStore } from 'effector-react';
import { $currentTown } from '@/components/SelectTownModal/store/currentTown';

export const News: FC = () => {
  const [items, setItems] = useState<any[]>([]);

  const town = useStore($currentTown);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/news/`).then(async resp => (await resp.json()).results.filter((i: any) => i.is_global || i.geographic_region === town?.geographic_region ).slice(0, 4).map((i: any) => ({ ...i, date: i.pub_date }))).then(setItems);
  }, [town]);

  return town && (
    <div className='flex flex-col col-span-1 p-10 lg:p-0 lg:order-last'>
      <h1 className="text-[20px] lg:text-[36px] font-bold">Новости сообщества</h1>

      {items?.map(i => (
        <div key={i.id} className='border-t my-5 border-secondary-blue'>
          <div className='my-4 text-xl'>
            {new Date(i.date).toLocaleDateString('il-IL')}
          </div>

          <div className='text-md text-primary-blue'>
            <Link href={`/news/${i.id}/`}>{i.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
