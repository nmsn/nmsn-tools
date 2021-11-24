import React, { useContext } from 'react'
import { SProps, IContext } from 'ssr-types-react'
import { IData } from '~/typings/data'
import { STORE_CONTEXT } from '_build/create-context'
import Title from '@/components/title'
import Card from '@/components/card'
import styles from './index.module.less'

export default function Index(props: SProps) {
  const { state, dispatch } = useContext<IContext<IData>>(STORE_CONTEXT)
  return (
    <div className={styles.container}>
      <Title>NMSN</Title>
      <div className={styles.content}>
        <Card >测试内容</Card>
        <Card title='测试数据'>测试内容</Card>
        <Card title='测试数据'>测试内容</Card>
      </div>
    </div>
  )
}
