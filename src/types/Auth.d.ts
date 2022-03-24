/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/24 15:43:04 (GMT+0900)
 */
export interface UserInfo {
  userName: string
  userId: number
}

export interface CommonResponseData {
  code: number
  message: string
}

export interface UseAuth {
  user: UserInfo | null
  signIn: () => Promise<UserInfo>
  signOut: () => Promise<CommonResponseData>
}