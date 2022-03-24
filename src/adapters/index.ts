import axios from 'axios'
import { IUser } from 'config/interfaces'
import { BACKEND_URL } from '../config/configs'

export async function createUserProfile(
  id: string,
  name: string
): Promise<IUser> {
  if (typeof BACKEND_URL === 'string') {
    const res = await axios.post(`${BACKEND_URL}`, {
      id: id,
      name: name,
    })
    return res.data
  } else throw new Error('Backend url is undefined.')
}

export async function readUserData(id: string): Promise<IUser> {
  if (typeof BACKEND_URL === 'string') {
    const res = await axios.get(`${BACKEND_URL}/?user=${id}`)
    return res.data
  } else throw new Error('Backend url is undefined.')
}
