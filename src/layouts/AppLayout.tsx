import React from 'react'
import Navbar from 'components/Navbar'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default AppLayout
