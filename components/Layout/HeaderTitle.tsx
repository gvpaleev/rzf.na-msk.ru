export function HeaderTitle(props: { currentTown?: string }) {
  return (
    <>
      <h1 className='font-bold md:font-black md:text-5xl text-2xl mb-2 mt-2'>
        Анонимные Наркоманы
      </h1>
      <h2 className='font-normal md:font-semibold md:text-lg text-base mb-2 mt-2'>
        Официальный сайт города <span>{props.currentTown}</span>
      </h2>
    </>
  )
}
