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

export function groupMeetingsByDay(
  meetings: Meeting[],
): Array<[string, Meeting[]]> {
  const groupedMeetings = new Map<string, Meeting[]>()

  for (let d of DAYS) {
    groupedMeetings.set(d, [])
  }

  for (let meeting of meetings) {
    const day = mapDayNumberToDay(meeting.day_of_week)
    groupedMeetings.set(day, (groupedMeetings.get(day) || []).concat(meeting))
  }

  return Array.from(groupedMeetings.entries()).filter(
    ([_, array]) => array.length > 0,
  )
}
