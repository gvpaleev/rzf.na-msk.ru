import { ANInCommunity } from './variants/ANInCommunity'
import { ForNewcomer } from './variants/ForNewcomer'
import { ForParticipant } from './variants/ForParticipant'

export const CardsContainer = () => (
  <section className='flex flex-col lg:flex-row lg:justify-around w-full lg:gap-10'>
    <ForNewcomer />
    <ForParticipant />
    <ANInCommunity />
  </section>
)
