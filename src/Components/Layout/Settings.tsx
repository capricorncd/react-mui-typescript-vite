/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/29 15:07:05 (GMT+0900)
 */
import React, { useState } from 'react'
import {
  Tune as IconTune,
  Close as IconClose,
  LightMode as IconLightMode,
  DarkMode as IconDarkMode,
} from '@mui/icons-material'
import {
  Drawer,
  IconButton,
  Box,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  styled,
  experimental_sx as sx,
  PaletteMode,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ColorModeContext from '../ColorMode/ColorModeContext'

// Settings button
const SettingsButton = styled(IconButton)(
  sx({
    position: 'fixed',
    zIndex: 999,
    right: '2rem',
    bottom: '2rem',
    width: '3rem',
    height: '3rem',
    backgroundColor: 'primary.main',
    borderRadius: '50%',
    boxShadow: (theme: { shadows: string[] }) => theme.shadows[1],
    '&:hover': { backgroundColor: 'primary.dark' },
  }),
)

// Drawer header box
const HeaderBox = styled(Box)(
  sx({
    width: 260,
    alignItems: 'center',
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    display: 'flex',
    boxAlign: 'center',
    boxPack: 'justify',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
  }),
)

// Header Title
const HeaderTitle = styled(Typography)(
  sx({
    color: 'primary.contrastText',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
)

// close button that Drawer
const CloseButton = styled(Button)(
  sx({
    mr: -1,
    minWidth: 'auto',
    color: 'primary.contrastText',
    opacity: 0.6,
    '&:hover': { opacity: 0.9 },
  }),
)

// Mode button
const ModeButton = styled(Box)(
  sx({
    border: 2,
    borderRadius: 2,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5rem',
  }),
)

export default function Settings() {
  const theme = useTheme()
  const [visible, setVisible] = useState(false)
  const [themeMode, setThemeMode] = useState<PaletteMode>(theme.palette.mode)

  const isDark = themeMode === 'dark'

  const colorMode = React.useContext(ColorModeContext)

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    const key = (event as React.KeyboardEvent).key
    const isKeydown = event.type === 'keydown'
    if (isKeydown && (key === 'Tab' || key === 'Shift')) return
    setVisible((b) => !b)
  }

  return (
    <>
      <SettingsButton onClick={toggleDrawer}>
        <IconTune sx={{ color: '#fff' }} />
      </SettingsButton>

      <Drawer anchor="right" open={visible} onClose={toggleDrawer}>
        <HeaderBox>
          <HeaderTitle variant="h6">Theme settings</HeaderTitle>
          <CloseButton onClick={toggleDrawer}>
            <IconClose />
          </CloseButton>
        </HeaderBox>
        <Box sx={{ padding: '2rem 1.5rem' }}>
          <Typography variant="body2" component="h6" sx={{ color: 'grey.600', fontSize: '0.75rem' }}>
            COLOR SCHEME
          </Typography>

          <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <ModeButton
              onClick={() => setThemeMode('light')}
              sx={{
                mr: 1,
                borderColor: isDark ? 'grey.400' : 'primary.main',
                color: isDark ? 'grey.400' : 'primary.main',
              }}>
              <IconLightMode />
              <Typography sx={{ ml: 1 }}>Light</Typography>
            </ModeButton>
            <ModeButton
              onClick={() => setThemeMode('dark')}
              sx={{
                ml: 1,
                borderColor: isDark ? 'primary.main' : 'grey.400',
                color: isDark ? 'primary.main' : 'grey.400',
              }}>
              <IconDarkMode />
              <Typography sx={{ ml: 1 }}>Dark</Typography>
            </ModeButton>
          </Box>

          <Typography variant="body2" component="h6" sx={{ mt: 4, color: 'grey.600', fontSize: '0.75rem' }}>
            SETTINGS
          </Typography>

          <Box sx={{ mt: 2, display: 'grid', gridTemplateRows: 'repeat(2, 1fr)' }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label 001" />
            <FormControlLabel control={<Checkbox />} label="Label 002" />
          </Box>

          <Button
            onClick={() => colorMode.toggleColorMode(themeMode)}
            type="button"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}>
            Save Settings
          </Button>
        </Box>
      </Drawer>
    </>
  )
}
