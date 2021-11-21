import React, { useContext } from 'react'
import { SProps, IContext } from 'ssr-types-react'
import { IData } from '~/typings/data'
import { STORE_CONTEXT } from '_build/create-context'
import styles from './index.module.less';

export default function Index (props: SProps) {
  const { state, dispatch } = useContext<IContext<IData>>(STORE_CONTEXT)
  return (
    <div>
     <span className={styles.title}>NMSN</span>
    </div>
  )
}
