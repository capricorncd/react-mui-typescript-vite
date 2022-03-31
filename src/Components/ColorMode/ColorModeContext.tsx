/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/29 22:29:45 (GMT+0900)
 */
import { createContext } from 'react'
import { PaletteMode } from '@mui/material'

export default createContext({
  toggleColorMode: (mode: PaletteMode) => {
    // ...
  },
})
