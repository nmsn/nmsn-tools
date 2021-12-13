import React from 'react'
import styles from './index.module.less'

interface TitleProps {
  children: string
  style?: React.CSSProperties
}

const Title: React.FC<TitleProps> = ({ children, style }) => {
  return (
    <div className={styles.title} style={style}>
      {children}
    </div>
  )
}

export default Title
