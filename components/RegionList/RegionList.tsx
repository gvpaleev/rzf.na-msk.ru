import { GetCityListResponseType, getCityList } from '@/api/getCityList'
import { useUnit } from 'effector-react'
import { useEffect, useState } from 'react'

import { setCurrentTownIdEvent } from '../SelectTownModal/store/currentTown'
import { townListModal } from '../TownsListModal/store/townListModal'
import { CityList } from '@/shared/contract/CityList'

export const RegionList: React.FC = () => {
  const [data, setData] = useState<CityList | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<number | undefined>(undefined)

  const closeModal = useUnit(townListModal.closeModalEvent)
  const setTown = useUnit(setCurrentTownIdEvent)

  useEffect(() => {
    getCityList().then(setData)
  }, [])

  const handleRegionClick = (regionId: number | undefined) => {
    setSelectedRegion(regionId)
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='flex-1'>
        {data.regions.map((region) => (
          <div
            key={region.id}
            className={`p-2 ${selectedRegion === region.id ? 'bg-card-light-blue' : ''
              } cursor-pointer`}
            onClick={() => handleRegionClick(region.id)}
          >
            {region.name}
          </div>
        ))}
      </div>
      <div className='flex-1'>
        {selectedRegion &&
          data.towns
            .filter((town) => town.geographic_region === selectedRegion)
            .map((town) => (
              <div
                key={town.id}
                className='p-2 bg-gray-100 cursor-pointer'
                onClick={() => {
                  setTown(town.id)
                  closeModal()
                }}
              >
                {town.name}
              </div>
            ))}
      </div>
    </div>
  )
}
