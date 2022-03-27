/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/24 15:49:21 (GMT+0900)
 */
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useAuth } from '@/Components/Auth'
import React from 'react'

export default function PrivateRoute({ children, ...rest }: RouteProps) {
  const auth = useAuth()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
