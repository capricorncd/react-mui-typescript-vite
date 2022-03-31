/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022-03-23 19:56 (GMT+0900)
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import store from '@/stores'
import App from './pages/App'
import { themeOptions, THEME_CACHE_KEY } from './constants'
import { storage } from './helpers'

const theme = createTheme({
  palette: {
    ...themeOptions.palette,
    mode: storage.get(THEME_CACHE_KEY, 'light'),
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
)
