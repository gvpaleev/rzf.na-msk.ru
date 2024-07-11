'use client'

import { getCityList } from "@/shared/api/getCityList";
import { GetNewsListResponseType, getNewsList } from "@/shared/api/getNewsList";
import News from "@/shared/components/News/News";
import { useEffect, useState } from "react";
import styles from './page.module.css'
import classNames from "classnames";
export default function Page() {
    const [data, setData] = useState<GetNewsListResponseType[]>([])
    useEffect(() => {
        getNewsList().then(setData)

    }, [])


    return (
        <div className={classNames(styles['item'])}>
            {data.length ? data.map((news) => {
                return (<News key={news.id} data={news} />)
            }) : <div>else</div>}
        </div>

    );
}
