export function HeaderDescription(props: { currentRegion: string }) {
  return (
    <>
      <h1 className='font-bold md:font-black md:text-6xl text-2xl mb-2 mt-2'>
        Анонимные Наркоманы
      </h1>
      <h2 className='font-normal md:font-semibold md:text-lg text-base mb-2 mt-2'>
        Официальный сайт Региона <span>{props.currentRegion}</span>
      </h2>
      <div className='hidden md:block'>
        Анонимные Наркоманы (АН) — это некоммерческое, непрофессиональное и
        нерелигиозное сообщество выздоравливающих зависимых, которые бескорыстно
        помогают друг другу прекратить употреблять наркотики и научиться жить
        без них. Единственная цель сообщества АН — сделать доступной информацию
        о возможности выздоровления тем, кто еще употребляет наркотики и
        страдает от наркомании. Единственное условие для членства - желание
        прекратить употребление.
      </div>
    </>
  )
}
