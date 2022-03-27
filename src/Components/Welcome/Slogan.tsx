/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/27 11:10:06 (GMT+0900)
 */
import React from 'react'
import Logo from '@/assets/img/logo.svg'
import { Grid, Typography, Box } from '@mui/material'

const TEXT_SHADOW = {
  textShadow:
    '0 2px 3px rgba(0, 0, 0, 0.1), 0 -2px 3px rgba(0, 0, 0, 0.1), 2px 0px 3px rgba(0, 0, 0, 0.1), -2px 0 3px rgba(0, 0, 0, 0.1)',
}

export default function Slogan() {
  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Box
        color="primary.contrastText"
        sx={{
          m: 3,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <div>
          <img
            src={Logo}
            width="180"
            height="180"
            alt="logo"
            style={{ filter: 'drop-shadow(0 0 3px  rgba(0,0,0,0.3))' }}
          />
        </div>
        <Typography variant="h2" component="div" align="center" gutterBottom sx={TEXT_SHADOW}>
          React-MUI-TypeScript-Vite
        </Typography>
        <Typography align="center" sx={TEXT_SHADOW}>
          This is a management system developed by React, Material UI, TypeScript and Vite.
        </Typography>
      </Box>
    </Grid>
  )
}
