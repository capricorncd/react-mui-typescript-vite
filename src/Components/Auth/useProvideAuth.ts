/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/24 10:43:17 (GMT+0900)
 */
import { useState } from 'react'
import { CommonResponseData, UseAuth, UserInfo } from '@/types'

export function useProvideAuth(): UseAuth {
  const [user, setUser] = useState<UserInfo | null>(null)

  async function signIn(): Promise<UserInfo> {
    await asyncFun()
    // console.log('signIn')
    const data = {
      userName: 'Capricorncd',
      userId: 9527,
    }
    setUser(data)
    return data
  }

  async function signOut(): Promise<CommonResponseData> {
    await asyncFun()
    // console.log('signOut')
    const data = {
      code: 0,
      message: 'success',
    }
    setUser(null)
    return data
  }

  return {
    user,
    signIn,
    signOut,
  }
}

function asyncFun(): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
