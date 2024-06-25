export function durationToHumanReadable(duration: string): string {
  const durationSplitted = duration?.split(':')

  if (!durationSplitted) {
    return ''
  }
  const hoursNumber = Number(durationSplitted[0])
  const minutesNumber = Number(durationSplitted[1])

  const hoursText =
    hoursNumber % 10 === 0
      ? 'часов'
      : hoursNumber % 10 === 1
      ? 'час'
      : hoursNumber % 10 < 5
      ? 'часа'
      : 'часов'

  const minutesText =
    minutesNumber % 10 === 0
      ? 'минут'
      : minutesNumber % 10 === 1
      ? 'минута'
      : minutesNumber % 10 < 5
      ? 'минуты'
      : 'минут'

  return durationSplitted
    ? `${hoursNumber} ${hoursText} ${minutesNumber} ${minutesText}`
    : ''
}
