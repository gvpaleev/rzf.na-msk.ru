export function HeaderTitle(props: { currentTown?: string }) {
  return (
    <div>
      <h1 >
        Анонимные Наркоманы
      </h1>
      <h2 >
        Официальный сайт города <span>Москва{/* {props.currentTown} */}</span>
      </h2>
    </div>
  )
}
