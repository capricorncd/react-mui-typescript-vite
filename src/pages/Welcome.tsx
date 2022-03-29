/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/24 15:51:03 (GMT+0900)
 */
import React from 'react'
import { Grid, CssBaseline, Paper } from '@mui/material'
import Slogan from '@/Components/Welcome/Slogan'
import SignInForm from '@/Components/Welcome/SignInForm'

export default function Welcome() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Slogan />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <SignInForm />
      </Grid>
    </Grid>
  )
}
