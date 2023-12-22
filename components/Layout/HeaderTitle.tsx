export function HeaderTitle(props: { currentTown?: string }) {
  return (
    <>
      <h1 className='font-bold md:font-black text-2xl sm:text-4xl lg:text-5xl mb-2 mt-2'>
        Анонимные Наркоманы
      </h1>
      <h2 className='font-normal md:font-semibold text-sm lg:text-lg mb-2 mt-2'>
        Официальный сайт города <span>{props.currentTown}</span>
      </h2>
    </>
  )
}
