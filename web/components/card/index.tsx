import React from 'react'
import styles from './index.module.less'

const DefaultIcon: React.FC<{ url: string }> = ({ url }) => (<img className={styles.cardIcon} src={url} alt='icon' />)

const Card: React.FC<{ children: string | JSX.Element, title?: string, icon?: string | JSX.Element }> = ({ children, title, icon }) => {
  return <div className={styles.card}>
    {icon && typeof icon === 'string' ? <DefaultIcon url={icon} /> : icon}
    {title && <div className={styles.cardTitle}>{title}</div>}
    <div className={styles.cardContent}>{children}</div>
  </div>
}

export default Card
