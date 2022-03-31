/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/31 21:27:32 (GMT+0900)
 */
import React from 'react'
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Inbox as IconInbox, Mail as IconMail } from '@mui/icons-material'
import { DefaultProps } from '@/types'
import { useHistory, useLocation } from 'react-router-dom'

interface MenuProps extends DefaultProps {
  open: boolean
}

export default function Menu(props: MenuProps) {
  const history = useHistory()
  const location = useLocation()
  // current path
  const currentPath = location.pathname.substring(1)

  const handleClick = (path: string) => {
    history.push(path)
  }

  return (
    <>
      <List>
        {['Home', 'Analytics', 'Send email', 'Drafts'].map((text, index) => (
          <ListItemButton
            key={text}
            selected={text.toLowerCase() === currentPath}
            onClick={() => handleClick(text.toLowerCase())}
            sx={{
              minHeight: 48,
              justifyContent: props.open ? 'initial' : 'center',
              px: 2.5,
            }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: props.open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
              {index % 2 === 0 ? <IconInbox /> : <IconMail />}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: props.open ? 1 : 0 }} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItemButton
            key={text}
            selected={text.toLowerCase() === currentPath}
            onClick={() => handleClick(text.toLowerCase())}
            sx={{
              minHeight: 48,
              justifyContent: props.open ? 'initial' : 'center',
              px: 2.5,
            }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: props.open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
              {index % 2 === 0 ? <IconInbox /> : <IconMail />}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: props.open ? 1 : 0 }} />
          </ListItemButton>
        ))}
      </List>
    </>
  )
}
