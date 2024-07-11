import classNames from 'classnames';
import styles from './News.module.css'

import { GetNewsListResponseType, getNewsList } from "@/shared/api/getNewsList";
interface NewsProps {
  data: GetNewsListResponseType;
}
export default function News({ data }: NewsProps) {
  console.log(data.image)
  return (

    <div className={classNames(styles['item'])}>
      <div>
        <div className={classNames(styles['date'])}>{data.pub_date?.split('T')[0].replaceAll('-', '.')}</div>
        <div className={classNames(styles['time'])}>{data.pub_date?.split('T')[1].split('.')[0]}</div>
      </div>
      <div>
        <div className={classNames(styles['title'])} >{data.title}</div>
        <div className={classNames(styles['description'])} >{data.description}</div>
        {!!data.image && <img className={classNames(styles['img'])} src={data.image} alt={data.title} />}
      </div>
    </div>
  )
}
