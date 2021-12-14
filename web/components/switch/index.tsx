import React, { useState } from 'react'
import cls from 'classnames'
import styles from './index.module.less'

interface SwitchProps {
  type?: 'horizontal' | 'vertical'
  len?: number
  num?: number
  onChange: (key: number) => void
}

interface SwitchItemProps {
  type?: 'horizontal' | 'vertical'
  isActive?: boolean
  onChange?: (key: number) => void
  value: number
}

const SwitchItem: React.FC<SwitchItemProps> = ({
  isActive,
  onChange,
  value,
  type = 'horizontal',
}) => {
  return (
    <div
      className={cls(
        styles.switchItem,
        isActive && styles.active,
        type === 'horizontal'
          ? styles.switchItemHorizontal
          : styles.switchItemVertical
      )}
      onClick={() => onChange?.(value)}
    />
  )
}

const Switch: React.FC<SwitchProps> = ({
  num = 3,
  onChange,
  type = 'horizontal',
}) => {
  const [step, setStep] = useState(0)

  const onCurChange = (key: number) => {
    setStep(key)
    onChange?.(key)
  }

  const data = new Array(num)?.fill('').map((item, index) => index)

  return (
    <div
      className={cls(
        styles.switch,
        type === 'horizontal' ? styles.switchHorizontal : styles.switchVertical
      )}
    >
      {data.map((item) => (
        <SwitchItem
          isActive={step === item}
          onChange={onCurChange}
          value={item}
          type={type}
        />
      ))}
    </div>
  )
}

export default Switch
