import React from 'react'
import Navbar from 'components/Navbar'
import Sidenav from 'components/Sidenav'
import ActivitiesManager from 'components/ActivitiesManager'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Sidenav />
        <Outlet />
        <ActivitiesManager />
      </div>
    </>
  )
}

export default AppLayout