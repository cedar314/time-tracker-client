import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from 'layouts/AppLayout'
import Login from 'pages/auth/Login'
import Landing from 'pages/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
