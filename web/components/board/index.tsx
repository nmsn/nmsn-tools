import React from 'react'
import styles from './index.module.less'

interface BoardProps {
  children: JSX.Element | JSX.Element[] | undefined
  style?: React.CSSProperties
}

// TODO 切换效果

const Board: React.FC<BoardProps> = ({ children, style }) => {
  return (
    <div className={styles.board} style={style}>
      <div className={styles.boardContent}>{children}</div>
    </div>
  )
}

export default Board
