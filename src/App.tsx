import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from 'pages/AppLayout'
import Dashboard from 'components/Dashboard'
import TimeTracker from 'components/time_tracker'
import Calendar from 'components/Calendar'
import Profile from 'components/Profile'
import Auth from 'pages/Auth'
import Login from 'components/auth/Login'
import Register from 'components/auth/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<TimeTracker />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="setting" element={<Profile />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
