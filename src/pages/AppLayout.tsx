import React, { useState, useEffect } from 'react'
import Navbar from 'components/Navbar'
import { Outlet } from 'react-router-dom'
import UserDataContext from 'context/userData.context'
import { IUser } from 'config/interfaces'
import { getCurrentUser } from 'functions/auth'
import { readUserData } from 'adapters'

export default function AppLayout() {
  const [userData, setUserData] = useState<IUser>()

  function updateUserData(user: IUser): void {
    setUserData(user)
  }

  useEffect(() => {
    async function fetchUser() {
      const user = await getCurrentUser()
      const userData = await readUserData(user.attributes.sub)
      setUserData(userData)
    }
    fetchUser().catch(console.error)
  }, [])

  return (
    <UserDataContext.Provider
      value={
        { userData, updateUserData } as {
          userData: IUser
          updateUserData: (user: IUser) => void
        }
      }
    >
      <div className="flex flex-row bg-[#f7f7f7] h-screen">
        <Navbar />
        <Outlet />
      </div>
    </UserDataContext.Provider>
  )
}
