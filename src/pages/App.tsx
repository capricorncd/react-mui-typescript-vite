/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-06-12 11:56 (GMT+0900)
 */
import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { ProvideAuth } from '@/Components/Auth'
import PrivateRoute from '@/Components/PrivateRoute'
import Layout from '@/Components/Layout'
// pages
const Welcome = lazy(() => import('./Welcome'))
const Home = lazy(() => import('./Home'))
const Analytics = lazy(() => import('./Analytics'))

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
          <Layout>
            <PrivateRoute path="/home">
              <Suspense fallback="loading...">
                <Home />
              </Suspense>
            </PrivateRoute>
            <PrivateRoute path="/analytics">
              <Suspense fallback="loading...">
                <Analytics />
              </Suspense>
            </PrivateRoute>
          </Layout>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}
