/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-06-12 22:24 (GMT+0900)
 */
import React from 'react'
import store from '@/stores'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'

export * from './Common'
export * from './Sign'

export interface AnyObject {
  [key: string]: any
}

export type ClickFunction = (e?: React.MouseEvent) => void

export interface DefaultProps {
  className?: string
  onClick?: ClickFunction
  children?: JSX.Element | React.ReactNode
  style?: AnyObject
  data?: AnyObject | AnyObject[] | null
  sx?: SxProps<Theme>
}

export type RootState = ReturnType<typeof store.getState>
