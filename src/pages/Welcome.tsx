/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/24 15:51:03 (GMT+0900)
 */
import React from 'react'
import { Container, Button, Typography } from '@mui/material'
import CopyRight from '@/Components/CopyRight'

export default function Welcome() {
  return (
    <Container className="align-center">
      <div className="pt50">
        <img src="/static/favicon.svg" width="180" height="180" alt="logo" />
      </div>
      <Typography variant="h2" component="div" gutterBottom>
        react-mui-typescript-vite
      </Typography>
      <Typography>
        This is a background management system developed by React, Material UI, TypeScript and Vite.
      </Typography>
      <Button variant="outlined" size="large" href="#/home" className="mv50">
        Home
      </Button>
      <CopyRight />
    </Container>
  )
}
