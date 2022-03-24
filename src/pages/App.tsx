/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-06-12 11:56 (GMT+0900)
 */
import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { ProvideAuth } from '@/Components/Auth'
import PrivateRoute from '@/Components/PrivateRoute'

const Welcome = lazy(() => import('./Welcome'))
const Login = lazy(() => import('./Login'))
const Home = lazy(() => import('./Home'))

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Suspense fallback="loading...">
              <Welcome />
            </Suspense>
          </Route>
          <Route path="/login">
            <Suspense fallback="loading...">
              <Login />
            </Suspense>
          </Route>
          <PrivateRoute path="/home">
            <Suspense fallback="loading...">
              <Home />
            </Suspense>
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}
