import { Meeting } from '@/shared/api/meetings'

export function groupMeetingsByTimeSchedule(
  meetings: Meeting[],
): Array<Meeting & { types: number[] }> {
  const groupedMeetings = new Map<string, Meeting & { types: number[] }>()

  for (let meeting of meetings) {
    const key = meeting.time + meeting.schedule
    if (groupedMeetings.has(key)) {
      const keyMeeting = groupedMeetings.get(key)!
      groupedMeetings.set(key, {
        ...keyMeeting,
        types: keyMeeting.types.concat(meeting.type),
      })
    } else {
      groupedMeetings.set(key, { ...meeting, types: [meeting.type] })
    }
  }

  return Array.from(groupedMeetings.values())
}
