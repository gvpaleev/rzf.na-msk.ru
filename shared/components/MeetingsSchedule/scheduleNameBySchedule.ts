export function scheduleNameBySchedule(
  schedule: string,
  dayOfWeek: string,
): string {
  let result = ''
  let every = ''
  let dayOfWeekEvery = ''
  let enumerable: string[] = []

  switch (dayOfWeek) {
    case 'Понедельник':
    case 'Вторник':
    case 'Четверг':
      dayOfWeekEvery = dayOfWeek
      every = 'Каждый'
      enumerable = ['Первый', 'Второй', 'Третий', 'Четвёртый', 'Последний']
      break
    case 'Среда':
    case 'Пятница':
    case 'Суббота':
      dayOfWeekEvery = {
        Среда: 'Среду',
        Пятница: 'Пятницу',
        Суббота: 'Субботу',
      }[dayOfWeek]
      every = 'Каждую'
      enumerable = ['Первая', 'Вторая', 'Третья', 'Четвёртая', 'Последняя']
      break
    case 'Воскресенье':
      every = 'Каждое'
      enumerable = ['Первое', 'Второе', 'Третье', 'Четвёртое', 'Последнее']
      dayOfWeekEvery = 'Воскресенье'
      break
  }
  if (schedule === 'last') {
    result = `${enumerable.at(-1)} ${dayOfWeek.toLowerCase()}`
  } else if (schedule === 'first') {
    result = `${enumerable.at(0)} ${dayOfWeek.toLowerCase()}`
  } else if (schedule === '12345') {
    result = `${every} ${dayOfWeekEvery.toLowerCase()}`
  } else {
    const days = schedule.split('').map((num) => enumerable[Number(num) - 1])
    let daysString = ''

    if (days.length === 1) {
      daysString = days[0]
    } else if (days.length === 2) {
      daysString = `${days[0]} и ${days[1].toLocaleLowerCase()}`
    } else {
      daysString = `${
        (days[0],
        days
          .slice(1, days.length - 1)
          .join(', ')
          .toLowerCase())
      } и ${days.at(-1)?.toLowerCase()}`
    }

    result = `${daysString} ${dayOfWeek.toLowerCase()}`
  }

  return result
}
