import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const TopBanner: FC = () => (
  <Carousel
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    autoPlay={true}
  >
    <div>
      <img alt='...' src='/top-banner.jpg' />
    </div>
  </Carousel>
)
