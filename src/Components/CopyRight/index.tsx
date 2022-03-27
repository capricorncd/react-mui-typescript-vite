/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/24 21:50:50 (GMT+0900)
 */
import React from 'react'
import { Typography, Link, TypographyProps } from '@mui/material'

export default function CopyRight(props: TypographyProps) {
  const year = new Date().getFullYear()

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      Copyright © {year}{' '}
      <Link color="inherit" href="https://github.com/capricorncd" target="_blank">
        Capricorncd
      </Link>
      . kaneoki1984@gmail.com
    </Typography>
  )
}
