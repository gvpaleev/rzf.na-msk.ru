import React, { FC, ReactNode } from 'react'

const listIndicator = [
  'before:block',
  'before:absolute',
  'before:top-4',
  'before:left-0',
  'before:content-[""]',
  'before:w-5',
  'before:h-0.5',
  'before:bg-green-500',
].join(' ')

const list = ['relative', 'pl-10', 'box-border', 'mb-5', 'last:mb-0'].join(' ')

const LIST_STYLE = [list, listIndicator].join(' ')

export const ListItem: FC<{ children: ReactNode }> = ({ children }) => (
  <li className={LIST_STYLE}>{children}</li>
)
