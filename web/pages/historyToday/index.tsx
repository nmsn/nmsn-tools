import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@/components/card'
import { HistoryTodayItem } from '~/typings/data'
import styles from './index.modules.less'

const HistoryToday: React.FC = () => {
  const [data, setData] = useState<HistoryTodayItem[]>([])

  const getData = useCallback(async () => {
    try {
      const {
        data: { list = [], year },
      } = await axios.get('/api/historyToday')
      setData(list)
    } catch (e) {
      console.log(e)
      setData([])
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const linkTo = (url: string) => {
    window.open(url)
  }

  return (
    <div className={styles.historyToday}>
      {data?.map(({ year, title, link }) => (
        <Card
          key={title}
          title={year}
          children={title}
          onClick={link ? () => linkTo(link) : undefined}
        />
      ))}
    </div>
  )
}

export default HistoryToday
