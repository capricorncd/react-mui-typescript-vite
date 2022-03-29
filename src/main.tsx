/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022-03-23 19:56 (GMT+0900)
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { teal, pink } from '@mui/material/colors'
import store from '@/stores'
import App from './pages/App'

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: pink[500],
    },
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
