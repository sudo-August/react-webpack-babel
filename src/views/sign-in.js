import React from 'react'
import Container from '@mui/material/Container'

import { SignInForm } from '../components/sign-in-form'

export const SignIn = ({ setAuthState }) => {

  return (
    <Container>
      <h1>Sign In</h1>
      <SignInForm setAuthState={setAuthState} />
    </Container>
  )
}