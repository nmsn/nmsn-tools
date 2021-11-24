import React from 'react';
import styles from './index.module.less';

const Title: React.FC<{ children: string }> = ({ children }) => {
  return <div className={styles.title}>{children}</div>
};

export default Title;