import React, { useState } from 'react'
import styles from './index.module.less'

interface SwitchProps {
  type?: 'horizontal' | 'vertical'
  len?: number
  num?: number
  onChange: (key: number) => void
}

interface SwitchItemProps {
  isActive?: boolean
  onChange?: (key: number) => void
  value: number
}

const SwitchItem: React.FC<SwitchItemProps> = ({
  isActive,
  onChange,
  value,
}) => {
  return (
    <div
      className={`${styles.switchItem} ${isActive && styles.active}`}
      onClick={() => onChange?.(value)}
    />
  )
}

const Switch: React.FC<SwitchProps> = ({ num = 3, onChange }) => {
  const [step, setStep] = useState(0)

  const onCurChange = (key: number) => {
    setStep(key)
    onChange?.(key)
  }

  const data = new Array(num)?.fill('').map((item, index) => index)

  return (
    <div className={styles.switch}>
      {data.map((item) => (
        <SwitchItem
          isActive={step === item}
          onChange={onCurChange}
          value={item}
        />
      ))}
    </div>
  )
}

export default Switch
