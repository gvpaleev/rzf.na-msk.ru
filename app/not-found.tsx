import Image from 'next/image'

export default function NotFound() {
  return (
    <Image
      src='/not-found.png'
      alt='Страница не найдена'
      width='925'
      height='860'
      className='mx-auto'
    />
  )
}
