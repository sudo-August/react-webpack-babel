import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { useCookies } from 'react-cookie'

import { AppBarOne } from './components/navbar-one'
import { AppBarTwo } from './components/navbar-two'
import { AppBarZero } from './components/navbar-zero'
import { Account } from './views/account'
import { Dashboard } from './views/dashboard'
import { Blog } from './views/blog'
import { Billing } from './views/billing'
import { Home } from './views/home'
import { Messages } from './views/messages'
import { Reports } from './views/reports'
import { Settings } from './views/settings'
import { SignIn } from './views/sign-in'

const AppOne = ({ setAuthState }) => {
  return (
    <React.Fragment>
      <AppBarOne />
      <Routes>
        <Route path='reports' element={<Reports />} />
        <Route path='account' element={<Account />} />
        <Route path='settings' element={<Settings />} />
        <Route path='billing' element={<Billing />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  )
}

const AppTwo = ({ setAuthState }) => {
  return (
    <React.Fragment>
      <AppBarTwo />
      <Routes>
        <Route path='blog' element={<Blog />} />
        <Route path='account' element={<Account />} />
        <Route path='settings' element={<Settings />} />
        <Route path='/' element={<Messages />} />
      </Routes>
    </React.Fragment>
  )
}

const AppSignedOut = ({ setAuthState }) => {
  return (
    <React.Fragment>
      <AppBarZero />
      <Routes>
        <Route path='sign-in' element={<SignIn setAuthState={setAuthState} />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </React.Fragment>
  )
}

export default function App() {
  const [cookies, setCookie] = useCookies(['jwt'])
  const [authState, setAuthState] = useState(0)

  const apps = [<AppSignedOut setAuthState={setAuthState} />, <AppOne setAuthState={setAuthState} />, <AppTwo setAuthState={setAuthState} />]

  return apps[authState]
};