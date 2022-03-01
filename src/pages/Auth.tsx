import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Auth() {
  return (
    <div className="bg-[#f7f7f7] h-screen">
      <Outlet />
    </div>
  )
}
