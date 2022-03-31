/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/27 22:44:00 (GMT+0900)
 */
import React, { useState, useMemo } from 'react'
import { DefaultProps } from '@/types'
import {
  Box,
  PaletteMode,
  CssBaseline,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material'
import {
  Menu as IconMenu,
  ChevronLeft as IconChevronLeft,
  ChevronRight as IconChevronRight,
  Inbox as IconInbox,
  Mail as IconMail,
} from '@mui/icons-material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Settings from './Settings'
import ColorModeContext from '../ColorMode/ColorModeContext'
import { storage } from '@/helpers'
import { DRAWER_OPEN_FLAG_CACHE_KEY, THEME_CACHE_KEY, themeOptions } from '@/constants'
import { AppBar, Drawer, DrawerHeader } from './Parts'

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

  const openFlag = storage.get(DRAWER_OPEN_FLAG_CACHE_KEY, false)
  const [open, setOpen] = useState(openFlag)

  const handleDrawerOpen = () => {
    setOpen(true)
    storage.set(DRAWER_OPEN_FLAG_CACHE_KEY, true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    storage.set(DRAWER_OPEN_FLAG_CACHE_KEY, false)
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                }}>
                <IconMenu />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Mini variant drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <IconChevronRight /> : <IconChevronLeft />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItemButton
                  selected={index === 0}
                  key={text}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}>
                    {index % 2 === 0 ? <IconInbox /> : <IconMail />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItemButton
                  key={text}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}>
                    {index % 2 === 0 ? <IconInbox /> : <IconMail />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {props.children}
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices
              mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis
              tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
              Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa
              tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at
              consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie
              ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
              dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
              lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
              accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
              posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
          </Box>
          <Settings />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
