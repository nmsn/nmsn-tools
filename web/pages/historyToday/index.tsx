import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@/components/card'
import { HistoryTodayItem } from '~/typings/data'
import Skeleton from '@/components/skeleton'
import styles from './index.module.less'

const HistoryToday: React.FC = () => {
  const [data, setData] = useState<HistoryTodayItem[]>([])
  const [loading, setLoading] = useState(false)

  const getData = useCallback(async () => {
    try {
      setLoading(true)
      const {
        data: { list = [] },
      } = await axios.get('/api/historyToday')
      setData(list)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setData([])
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const linkTo = (url: string) => {
    window.open(url)
  }

  if (loading) {
    return <Skeleton cardStyle={{ width: 475, height: 42 }} />
  } else {
    return (
      <div className={styles.historyToday}>
        {data?.map(({ year, title, link }) => (
          <Card
            key={title}
            title={year}
            children={title}
            onClick={link ? () => linkTo(link) : undefined}
            style={{ width: 475 }}
          />
        ))}
      </div>
    )
  }
}

export default HistoryToday
