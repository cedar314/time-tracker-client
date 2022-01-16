import React from 'react'
import Navbar from 'components/Navbar'
import Sidenav from 'components/Sidenav'
import ActivitiesManager from 'components/ActivitiesManager'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-8 flex flex-row">
        <Sidenav />
        <div className="flex-auto">
          <Outlet />
        </div>
        <ActivitiesManager />
      </div>
    </>
  )
}

export default AppLayout
