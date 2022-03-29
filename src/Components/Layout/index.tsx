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
import ColorModeContext from './ColorModeContext'

export default function Layout(props: DefaultProps) {
  const [mode, setMode] = useState<PaletteMode>('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (newMode: PaletteMode) => {
        setMode(newMode)
      },
    }),
    [],
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
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
