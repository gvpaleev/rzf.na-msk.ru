'use client'
import LinkLocaliies from "@/components/LinkLocalities/LinkLocalities";
import styles from './page.module.css'
import classNames from "classnames";
import { $currentRegionId, $currentTown } from "@/components/SelectTownModal/store/currentTown";
import { useUnit } from "effector-react";
import { createEffect, createStore, sample } from "effector";
import { ServiceRegion } from "@/shared/contract/ServiceRegion";
import { getRegionIdById } from "@/api/getRegionIdById";

const $serviceRegion = createStore<ServiceRegion | null>(null)
const loadRegionFx = createEffect(async (regionId: number | null) => {
  if (typeof regionId !== 'number') return
  return await getRegionIdById(regionId);

})
$serviceRegion.on(loadRegionFx.doneData, (_, serviceRegion) => serviceRegion)
sample({
  clock: $currentRegionId,
  target: loadRegionFx
})


export default function Page() {
  const currentRegionId = useUnit($currentRegionId);
  const serviceRegion = useUnit($serviceRegion);
  return (
    <div className={classNames(styles['item'])}>

      {
        serviceRegion?.name
          ?
          <div className={classNames(styles['header'])}>
            <h4 className={classNames(styles['h4'])}>Участнику</h4>
            <h1 className={classNames(styles['h1'])}>{`РКО ${serviceRegion?.name}`}</h1>
          </div>
          : 'Loading...'
      }
      <LinkLocaliies className={classNames(styles.firstLink)} key={9132} title={`РКО ${serviceRegion?.name || ''}`} />
      {/* {localities.map(((item, index) => <LinkLocaliies className={classNames({ [styles.firstLink]: index === 0 })} key={index} title={item.name} />))} */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
    </div>
  )
}
