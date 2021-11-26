import React from 'react'
import styles from './index.module.less'

interface SwitchProps {
  type?: 'horizontal' | 'vertical'
  len?: number
  num?: number
}

interface SwitchItemProps {
  isActive?: boolean
}

const SwitchItem: React.FC<SwitchItemProps> = ({ isActive }) => {
  return <div className={`${styles.switchItem} ${isActive && styles.active}`} />
}

const Switch: React.FC<SwitchProps> = () => {
  return (
    <div className={styles.switch}>
      <SwitchItem isActive />
      <SwitchItem />
      <SwitchItem />
      <SwitchItem />
    </div>
  )
}

export default Switch
