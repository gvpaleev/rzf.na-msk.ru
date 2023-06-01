import { Carousel } from 'flowbite-react'
import { FC } from 'react'

export const TopBanner: FC = () => (
  <Carousel className='h-64 carousel'>
    <img className='min-h-fit' alt='...' src='/top-banner.jpg' />
  </Carousel>
)
