'use client'
import LinkLocaliies from "@/components/LinkLocalities/LinkLocalities";
import styles from './page.module.css'
import classNames from "classnames";
import { useEffect, useState } from "react";
import { ServiceRegion, getRegionIdByCity } from "@/api/getRegionIdByCity";
import { Locality, getLocalitiesByRegionId } from "@/api/getLocalitiesByRegionId";
import { $currentRegionId } from "@/components/SelectTownModal/store/currentTown";
import { getRegionIdById } from "@/api/getRegionIdById";
const data = ['РКО Большая Москва', 'МКО Центр', 'МКО М7', 'МКО М7'];
export default function Page() {
  const [localities, setLocalities] = useState<Locality[]>([]);
  const [region, setRegion] = useState<ServiceRegion>();
  useEffect(() => {
    getLocalitiesByRegionId($currentRegionId.getState() || 1).then(
      setLocalities
    )
    getRegionIdById($currentRegionId.getState() || 1).then(setRegion)
  }, [])
  return (
    <div className={classNames(styles['item'])}>
      <div className={classNames(styles['header'])}>
        <h4 className={classNames(styles['h4'])}>Участнику</h4>
        <h1 className={classNames(styles['h1'])}>{`РКО ${region?.name || ''}`}</h1>
      </div>
      <LinkLocaliies className={classNames(styles.firstLink)} key={9132} title={`РКО ${region?.name || ''}`} />
      {localities.map(((item, index) => <LinkLocaliies className={classNames({ /* [styles.firstLink]: index === 0  */ })} key={index} title={item.name} />))}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
    </div>
  )
}
