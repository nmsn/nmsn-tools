import React, { useContext } from 'react'
import { SProps, IContext } from 'ssr-types-react'
import { IData } from '~/typings/data'
import { STORE_CONTEXT } from '_build/create-context'
import Title from '@/components/title'
import Card from '@/components/card'
import Switch from '@/components/switch'
import Board from '@/components/board'
import HistoryToday from '../historyToday'
import styles from './index.module.less'

const ContentCard = () => {
  return (
    <div style={{ margin: 10 }}>
      <Card title="测试数据">测试内容</Card>
    </div>
  )
}

export default function Index(props: SProps) {
  const { state, dispatch } = useContext<IContext<IData>>(STORE_CONTEXT)

  const onChange = (key: number) => {
    console.log(key)
  }

  return (
    <div className={styles.container}>
      <Title style={{ margin: '20px 0' }}>NMSN</Title>
      <div className={styles.content}>
        <Board>
          <div className={styles.left}>
            {/* <ContentCard />
            <ContentCard />
            <ContentCard /> */}
            <HistoryToday />
          </div>
        </Board>

        <Switch onChange={onChange} num={5} />
      </div>
    </div>
  )
}
