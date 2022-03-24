import { CognitoUser } from '@aws-amplify/auth'

export interface IUser {
  _id: string
  name: string
  taskFolders: IFolder[]
  reminders: IReminder[]
}

export interface IFolder {
  _id: string
  name: string
  description: string
  children: ITask[]
}

export interface ITask {
  _id: string
  name: string
  description: string
  isActive: boolean
  timeline: Date[]
}

export interface IReminder {
  _id: string
  name: string
  description: string
  isActive: boolean
  isStarted: boolean
  time: Date
  timeline: Date[]
}

/*
 * Custom attributes type defined according to the attributes used in this app
 */
export interface IUserAttributes {
  sub: string
  email: string
  email_verified: boolean
  name: string
}

/*
 * The following interface extends the CognitoUser type because it has issues
 * (see github.com/aws-amplify/amplify-js/issues/4927). Eventually (when you
 * no longer get an error accessing a CognitoUser's 'attribute' property) you
 * will be able to use the CognitoUser type instead of CognitoUserExt.
 */
export interface ICognitoUser extends CognitoUser {
  attributes: IUserAttributes
}

// usage, in the code:
