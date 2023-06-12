export default function Home() {
  console.log(
    '>>>>>>>>>>>>>>>> next_public_api_base',
    process.env.NEXT_PUBLIC_API_BASE,
  )
  return <div>Главный контент</div>
}
