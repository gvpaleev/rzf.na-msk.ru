'use client'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export function Banner({ className }) {
  return (
    <div className={className}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img key='na-banner-1' alt='...' src='/banner-one.png' />
        </div>
        <div>
          <img key='na-banner-2' alt='...' src='/banner-two.jpg' />
        </div>
      </Carousel>
    </div>)
}

