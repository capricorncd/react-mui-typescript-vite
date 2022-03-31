/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/24 10:43:17 (GMT+0900)
 */
import { useState } from 'react'
import { CommonResponseData, UseAuth, UserInfo, SignInFormData } from '@/types'
import { USER_INFO_CACHE_KEY } from '@/constants'
import { storage, asyncFn } from '@/helpers'

export function useProvideAuth(): UseAuth {
  const cacheUserInfo: UserInfo | null = storage.get(USER_INFO_CACHE_KEY, null)
  const [user, setUser] = useState<UserInfo | null>(cacheUserInfo)

  async function signIn(form: SignInFormData): Promise<UserInfo> {
    if (!form.email || !form.password) {
      throw new Error('Sign in failed')
    }
    await asyncFn()
    // console.log('signIn')
    const data = {
      username: 'Capricorncd',
      userId: 9527,
    }
    setUser(data)
    storage.set(USER_INFO_CACHE_KEY, data)
    return data
  }

  async function signOut(): Promise<CommonResponseData> {
    await asyncFn()
    // console.log('signOut')
    const data = {
      code: 0,
      message: 'success',
    }
    setUser(null)
    storage.remove(USER_INFO_CACHE_KEY)
    return data
  }

  return {
    user,
    signIn,
    signOut,
  }
}
