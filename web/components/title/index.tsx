import React from 'react';
import styles from './index.module.less';

const Title = ({ children }) => {
  return <div className={styles.title}>{children}</div>
};

export default Title;