import React from 'react'
import Navbar from 'components/Navbar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="flex flex-row bg-[#f7f7f7] h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}
