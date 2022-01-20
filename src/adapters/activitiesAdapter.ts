import axios from 'axios'
import { IFolder } from 'app/interfaces'
import { BACKEND_URL } from '../app/configs'

export function getActivityFolders(): Promise<Array<IFolder>> {
  if (typeof BACKEND_URL === 'string') {
    return axios
      .get(`${BACKEND_URL}/activityFolders`)
      .then((res) => res.data)
      .catch((err) => console.log(err))
  } else throw new Error('Backend url is undefined.')
}
