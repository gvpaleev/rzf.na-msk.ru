import Link from 'next/link'
import { FC, useEffect, useMemo, useState } from 'react'

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
  const [data, setData] = useState<any>()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/daily-meditation/`)
      .then(async (resp) => (await resp.json())[0])
      .then(setData)
  }, [])

  const item = useMemo(
    () =>
      data && {
        date: `${data.day} ${MONTHS[data.month - 1]}`,
        title: data.title,
        quote: data.quote,
        source: data.quote_from,
        text: `${data.body}<br/><br/>ТОЛЬКО СЕГОДНЯ: ${data.jft}`,
      },
    [data],
  )

  const [expanded, setExpanded] = useState(false)

  return item ? (
    <div className='flex p-10 lg:p-0 flex-col col-span-2'>
      <h1 className='hidden lg:block text-[36px] font-bold'>
        Медитация на сегодня
      </h1>
      <h1 className='block lg:hidden text-[20px] font-bold'>
        Ежедневные размышления
      </h1>

      <div className='border-t mt-5 border-secondary-blue'>
        <div className='mt-4 text-md'>{item.date}</div>

        <div
          className='text-lg font-bold'
          dangerouslySetInnerHTML={{ __html: item.title }}
        />

        <div className='mt-4 flex flex-row items-end gap-10 lg:gap-20'>
          <div className='flex w-full'>
            <div
              className='text-md'
              dangerouslySetInnerHTML={{ __html: item.quote }}
            />
          </div>

          <div className=''>
            <div
              className='text-md whitespace-nowrap text-secondary-blue'
              dangerouslySetInnerHTML={{ __html: item.source }}
            />
          </div>
        </div>

        <div
          className={`mt-4 text-md ${
            expanded ? '' : 'line-clamp-4'
          } lg:line-clamp-none`}
          dangerouslySetInnerHTML={{ __html: item.text }}
        />

        {!expanded && (
          <div className='block lg:hidden border-t mt-5 pt-5 border-secondary-blue'>
            <div className='text-md text-primary-blue text-underline'>
              <a onClick={() => setExpanded(true)}>Читать далее</a>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null
}
