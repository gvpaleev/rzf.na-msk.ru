import { Meeting } from '@/shared/api/meetings'

export const DAYS = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
]

export function mapDayNumberToDay(day: string): string {
  return DAYS[Number(day) - 1]
}
