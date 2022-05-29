import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import { ResponsiveAppBar } from './components/navbar'
import { Account } from './views/account'
import { Dashboard } from './views/dashboard'
import { Blog } from './views/blog'
import { Billing } from './views/billing'
import { Home } from './views/home'
import { Messages } from './views/messages'
import { Reports } from './views/reports'
import { Settings } from './views/settings'

export default function App() {

  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='reports' element={<Reports />} />
        <Route path='messages' element={<Messages />} />
        <Route path='blog' element={<Blog />} />
        <Route path='account' element={<Account />} />
        <Route path='settings' element={<Settings />} />
        <Route path='billing' element={<Billing />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </React.Fragment>
  )
};