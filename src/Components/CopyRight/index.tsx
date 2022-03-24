/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/24 21:50:50 (GMT+0900)
 */
import { Typography } from '@mui/material'
import React from 'react'

export default function CopyRight() {
  const year = new Date().getFullYear()

  return (
    <Typography variant="caption" display="block" className="align-center">
      © {year} Capricorncd. kaneoki1984@gmail.com
    </Typography>
  )
}
