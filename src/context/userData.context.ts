import { createContext } from 'react'
import { IUser } from 'config/interfaces'

const UserDataContext = createContext<{
  userData: IUser
  updateUserData: (user: IUser) => void
}>({
  userData: {
    _id: '',
    name: '',
    taskFolders: [],
    reminders: [],
  },
  updateUserData: () => {
    throw 'setUserData function in UserDataContext has not been set.'
  },
})

export default UserDataContext
