import { Hamburger } from '@/components/Main/components/Hamburger'
import clsx from 'clsx'
import { FC, PropsWithChildren, useState } from 'react'

import { classNameByColor } from '../config'
import { LinkEntryParams } from '../types'
import { LinkEntry } from './LinkEntry'

export const CardBase: FC<
  PropsWithChildren<{
    title: string
    color: 'green' | 'blue' | 'red'
    links: Array<LinkEntryParams>
    isSidebar?: boolean
  }>
> = ({ title, color, links, isSidebar, children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isAnimationEnd, setIsAnimationEnd] = useState(true)

  const { primary: primaryColor, secondary: secondaryColor } =
    classNameByColor[color]

  return (
    <section className={`flex flex-col w-full ${isSidebar ? 'mt-2' : ''}`}>
      <header
        className={`${primaryColor} py-8 w-full flex justify-between items-center px-10 ${!isAnimationEnd || isNavOpen ? 'lg:rounded-t-2xl' : 'lg:rounded-2xl'} text-white`}
      >
        <h1 className='p-5 text-4xl font-bold'>{title}</h1>
        <Hamburger
          isOpen={isNavOpen}
          toggleIsOpen={() => {
            setIsNavOpen((isOpen) => !isOpen);
            setIsAnimationEnd(false);
          }}
        />
      </header>

      {isSidebar ? 
      (
        <div className='relative overflow-hidden w-full h-full'>
          <footer
            onTransitionEnd={() => setIsAnimationEnd(true)}
            className={clsx(
              `${primaryColor} inset-0 transition-all duration-500 ease-in-out ${isNavOpen ? 'max-h-[500px] p-10' : 'max-h-0 p-0'} lg:rounded-b-2xl pl-10 pr-10 pt-0`
            )}
          >
            {links.map(({ id, ...linkEntryProps }) => (
              <LinkEntry key={id} {...linkEntryProps} />
            ))}
          </footer>
        </div>)
      : (
      <div className='relative overflow-hidden w-full h-full'>
        <div className={`${secondaryColor} sm:p-10 h-full`}>{children}</div>
        <footer
          className={clsx(
            `${primaryColor} absolute inset-0 -translate-y-full transition-transform p-10 pt-0`,
            isNavOpen && 'translate-y-0',
          )}
        >
          {links.map(({ id, ...linkEntryProps }) => (
            <LinkEntry key={id} {...linkEntryProps} />
          ))}
        </footer>
      </div>)}
    </section>
  )
}
