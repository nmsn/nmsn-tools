import React from 'react'
import cls from 'classnames'
import styles from './index.module.less'

const DefaultIcon: React.FC<{ url: string }> = ({ url }) => (
  <img className={styles.cardIcon} src={url} alt="icon" />
)

interface CardProps {
  children: string | JSX.Element
  title?: string
  icon?: string | JSX.Element
  onClick?: () => void
  type?: 'horizontal' | 'vertical'
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  icon,
  onClick,
  type = 'horizontal',
}) => {
  return (
    <div
      className={cls([
        styles.card,
        onClick && styles.click,
        type === 'horizontal' ? styles.horizontal : styles.vertical,
      ])}
      onClick={onClick}
    >
      {icon && typeof icon === 'string' ? <DefaultIcon url={icon} /> : icon}
      {title && <div className={styles.cardTitle}>{title}</div>}
      <div className={styles.cardContent}>{children}</div>
    </div>
  )
}

export default Card
