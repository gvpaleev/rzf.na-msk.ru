import { LinkEntryParams } from './types'

export const classNameByColor = {
  green: {
    primary: 'bg-card-green',
    secondary: 'bg-card-light-green',
  },

  blue: {
    primary: 'bg-card-blue',
    secondary: 'bg-card-light-blue',
  },

  red: {
    primary: 'bg-card-red',
    secondary: 'bg-card-light-red',
  },
} as const

export const newcomerLinks: Array<LinkEntryParams> = [
  { url: '/dummy', title: 'Новичку 1', id: '1' },
  { url: '/dummy', title: 'Новичку 2', id: '2' },
  { url: '/dummy', title: 'Новичку 3', id: '3' },
  { url: '/dummy', title: 'Новичку 4', id: '4' },
  { url: '/dummy', title: 'Новичку 5', id: '5' },
  { url: '/dummy', title: 'Новичку 6', id: '6' },
  { url: '/dummy', title: 'Новичку 7', id: '7' },
  { url: '/dummy', title: 'Новичку 8', id: '8' },
]

export const participantLinks: Array<LinkEntryParams> = [
  { url: '/dummy', title: 'Участнику 1', id: '1' },
  { url: '/dummy', title: 'Участнику 2', id: '2' },
  { url: '/dummy', title: 'Участнику 3', id: '3' },
  { url: '/dummy', title: 'Участнику 4', id: '4' },
  { url: '/dummy', title: 'Участнику 5', id: '5' },
  { url: '/dummy', title: 'Участнику 6', id: '6' },
  { url: '/dummy', title: 'Участнику 7', id: '7' },
  { url: '/dummy', title: 'Участнику 8', id: '8' },
]

export const communityLinks: Array<LinkEntryParams> = [
  { url: '/dummy', title: 'АН в обществе 1', id: '1' },
  { url: '/dummy', title: 'АН в обществе 2', id: '2' },
  { url: '/dummy', title: 'АН в обществе 3', id: '3' },
  { url: '/dummy', title: 'АН в обществе 4', id: '4' },
  { url: '/dummy', title: 'АН в обществе 5', id: '5' },
  { url: '/dummy', title: 'АН в обществе 6', id: '6' },
  { url: '/dummy', title: 'АН в обществе 7', id: '7' },
  { url: '/dummy', title: 'АН в обществе 8', id: '8' },
]
