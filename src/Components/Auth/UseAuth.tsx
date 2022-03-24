/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-06-24 21:16 (GMT+0900)
 */
import React, { useContext, createContext } from 'react'
import { DefaultProps, UseAuth } from '@/types'
import { useProvideAuth } from './useProvideAuth'

const AuthContext = createContext<UseAuth>({} as UseAuth)

export function ProvideAuth({ children }: DefaultProps) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuth(): UseAuth {
  return useContext(AuthContext)
}
