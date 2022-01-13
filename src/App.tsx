import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from 'layouts/AppLayout'
import Dashboard from 'components/Dashboard'
import TimeTracker from 'components/TimeTracker'
import Login from 'pages/auth/Login'
import Landing from 'pages/Landing'
import Register from 'pages/auth/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<TimeTracker />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
