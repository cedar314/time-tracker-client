import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from 'pages/AppLayout'
import Dashboard from 'components/Dashboard'
import TimeTracker from 'components/tracker/TimeTracker'
import Login from 'pages/auth/Login'
import Landing from 'pages/Landing'
import Register from 'pages/auth/Register'
import Calendar from 'components/Calendar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<TimeTracker />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
