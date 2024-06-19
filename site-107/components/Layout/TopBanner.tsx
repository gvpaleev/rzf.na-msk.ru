'use client'

import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const TopBanner: FC = () => (
  <Carousel
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    autoPlay={true}
    infiniteLoop={true}
  >
    {
      [
        <img key='na-banner-1' alt='...' src='/top-banner.jpg' />,
        <img key='na-banner-1' alt='...' src='/top-banner.jpg' />,
        <img key='na-banner-1' alt='...' src='/top-banner.jpg' />
      ]
    }
  </Carousel>
)
