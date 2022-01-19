import axios from 'axios'
import { IActivity } from 'app/interfaces'
import { BACKEND_URL } from '../app/configs'

export function getActivities(): Promise<Array<IActivity>> {
  if (typeof BACKEND_URL === 'string') {
    return axios
      .get(`${BACKEND_URL}/activities`)
      .then((res) => res.data)
      .catch((err) => console.log(err))
  } else throw new Error('Backend url is undefined.')
}
