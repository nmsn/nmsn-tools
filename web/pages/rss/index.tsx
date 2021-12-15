import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@/components/card'
import Skeleton from '@/components/skeleton'
import { RSSItem } from '~/typings/data'
import styles from './index.module.less'

const RSS: React.FC = () => {
  const [data, setData] = useState<RSSItem[]>([])
  const [loading, setLoading] = useState(false)

  const getData = useCallback(async () => {
    try {
      setLoading(true)
      const {
        data: { items = [] },
      } = await axios.get('/api/rss')
      setData(items)
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
    return <Skeleton cardStyle={{ width: 475, height: 77 }} />
  } else {
    return (
      <div className={styles.rss}>
        {data?.map(({ title, link }) => (
          <Card
            key={title}
            title={title}
            children={title}
            onClick={link ? () => linkTo(link) : undefined}
            type="vertical"
            style={{ width: 475 }}
          />
        ))}
      </div>
    )
  }
}

export default RSS
