/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/27 22:44:00 (GMT+0900)
 */
import React, { useState, useMemo } from 'react'
import { DefaultProps } from '@/types'
import { Grid, PaletteMode } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Settings from './Settings'
import ColorModeContext from '../ColorMode/ColorModeContext'
import { storage } from '@/helpers'
import { THEME_CACHE_KEY, themeOptions } from '@/constants'

export default function Layout(props: DefaultProps) {
  const cacheMode = storage.get(THEME_CACHE_KEY, 'light')
  const [mode, setMode] = useState<PaletteMode>(cacheMode)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (newMode: PaletteMode) => {
        setMode(newMode)
        // update cache
        storage.set(THEME_CACHE_KEY, newMode)
      },
    }),
    [],
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          ...themeOptions.palette,
          mode,
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Grid>
          <Settings />
          <aside>Aside</aside>
          <header>Header</header>
          <section>{props.children}</section>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
