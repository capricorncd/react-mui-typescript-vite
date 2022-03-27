/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/24 15:43:04 (GMT+0900)
 */
import { UserInfo } from './User'
import { SignInFormData } from '../Sign'

export interface CommonResponseData {
  code: number
  message: string
}

export interface UseAuth {
  user: UserInfo | null
  signIn: (form: SignInFormData) => Promise<UserInfo>
  signOut: () => Promise<CommonResponseData>
}
