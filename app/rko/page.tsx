'use client'
import LinkLocaliies from "@/components/LinkLocalities/LinkLocalities";
import styles from './page.module.css'
import classNames from "classnames";
import { useEffect } from "react";
import { getRegionIdByCity } from "@/api/getRegionIdByCity";
const data = ['РКО Большая Москва', 'МКО Центр', 'МКО М7', 'МКО М7'];
export default function Page() {

  useEffect(() => {
    getRegionIdByCity(187);
  }, [])
  return (
    <div className={classNames(styles['item'])}>
      <div className={classNames(styles['header'])}>
        <h4 className={classNames(styles['h4'])}>Участнику</h4>
        <h1 className={classNames(styles['h1'])}>Структура обслуживания </h1>
        <h1 className={classNames(styles['h1'])}>Региона Большая Москва</h1>
      </div>
      {data.map(((item, index) => <LinkLocaliies className={classNames({ [styles.firstLink]: index === 0 })} key={index} title={item} />))}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
      {/* <LinkLocaliies title='safdas' /> */}
    </div>
  )
}
