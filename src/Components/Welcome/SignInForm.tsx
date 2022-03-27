/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/27 10:53:13 (GMT+0900)
 */
import React, { useState } from 'react'
import { Box, Avatar, TextField, Typography, FormControlLabel, Button, Checkbox, Grid, Link } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material'
import CopyRight from '@/Components/CopyRight'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from '@/Components/Auth/UseAuth'
import { SignInFormData } from '@/types'

// checkbox text
const REMEMBER_TEXT = 'remember'

export default function SignInForm() {
  // form submission processing status
  const [isSubmit, setIsSubmit] = useState(false)
  const history = useHistory()
  const location = useLocation()

  const auth = useAuth()

  // @ts-ignore
  const { from } = location.state || { from: { pathname: '/home' } }

  // handle submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmit) return
    setIsSubmit(true)

    const data = new FormData(event.currentTarget)
    const form: SignInFormData = {
      email: data.get('email') as string,
      password: data.get('password') as string,
      remember: !!data.get(REMEMBER_TEXT),
    }

    try {
      // sign in
      await auth.signIn(form)
      history.replace(from)
    } catch (e) {
      // console.error(e)
      setIsSubmit(false)
    }
  }

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox name="remember" value={REMEMBER_TEXT} color="primary" />}
          label="Remember me"
        />
        {isSubmit ? (
          <LoadingButton loading fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Loading ...
          </LoadingButton>
        ) : (
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        )}
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <CopyRight sx={{ mt: 15 }} />
      </Box>
    </Box>
  )
}
