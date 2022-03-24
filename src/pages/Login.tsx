/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/23 22:03:45 (GMT+0900)
 */
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from '@/Components/Auth/UseAuth'
import { Container, Button, Card, CardHeader, CardContent, Stack, TextField } from '@mui/material'
import CopyRight from "@/Components/CopyRight";

export default function Login() {
  const [disabled, setDisabled] = useState(false)
  const history = useHistory()
  const location = useLocation()

  const auth = useAuth()

  // @ts-ignore
  const { from } = location.state || { from: { pathname: '/home' } }

  async function login() {
    if (disabled) return
    setDisabled(true)
    await auth.signIn()
    history.replace(from)
  }

  return (
    <Container className="center flex">
      <Card className="mt50" sx={{ maxWidth: 500 }}>
        <CardHeader title="Log In" subheader={new Date().toString()} />
        <CardContent>
          <Stack spacing={2}>
            <TextField id="outlined-basic" label="UserName / Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button className="pv15" fullWidth size="large" variant="contained" disabled={disabled} onClick={login}>
              Log In
            </Button>
            <CopyRight />
          </Stack>
        </CardContent>
      </Card>
    </Container>
  )
}
