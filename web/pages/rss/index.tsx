import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@/components/card'
import { RSSItem } from '~/typings/data'
import styles from './index.module.less'

const RSS: React.FC = () => {
  const [data, setData] = useState<RSSItem[]>([])

  const getData = useCallback(async () => {
    try {
      const {
        data: { items = [] },
      } = await axios.get('/api/rss')
      setData(items)
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
    <div className={styles.rss}>
      {data?.map(({ title, link }) => (
        <Card
          key={title}
          title={title}
          children={title}
          onClick={link ? () => linkTo(link) : undefined}
        />
      ))}
    </div>
  )
}

export default RSS
