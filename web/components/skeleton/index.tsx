import React from 'react'
import Card from '../card'
import styles from './index.module.less'

interface SkeletonProps {
  cardStyle?: React.CSSProperties
}

const Skeleton: React.FC<SkeletonProps> = ({ cardStyle }) => {
  return (
    <div className={styles.skeleton}>
      {new Array(10).fill('').map((item, index) => (
        <Card className={styles.card} key={index} style={cardStyle} />
      ))}
    </div>
  )
}

export default Skeleton
