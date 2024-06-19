'use client'
import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const Banner: FC = () => (
  <Carousel
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    autoPlay={true}
    infiniteLoop={true}
  >
    {
      [
        <img key='na-banner-1' alt='...' src='/banner-one.png' />,
        <img key='na-banner-1' alt='...' src='/banner-two.jpg' />,
      ]
    }
  </Carousel>
)
