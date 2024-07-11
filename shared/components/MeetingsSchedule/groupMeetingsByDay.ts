import { Meeting } from '@/shared/api/meetings'

import { DAYS, mapDayNumberToDay } from './mapDayNumberToDay'

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

  return Array.from(groupedMeetings.entries()).filter(([_, meetings]) => {
    console.log(meetings)
    meetings.length > 0
  })
}
