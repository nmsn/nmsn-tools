import React, { useContext } from 'react'
import { SProps, IContext } from 'ssr-types-react'
import { IData } from '~/typings/data'
import { STORE_CONTEXT } from '_build/create-context'
import Title from '@/components/title';

export default function Index(props: SProps) {
  const { state, dispatch } = useContext<IContext<IData>>(STORE_CONTEXT)
  return (
    <div>
      <Title>NMSN</Title>
    </div>
  )
}
