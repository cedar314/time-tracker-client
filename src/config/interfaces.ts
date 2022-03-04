import { CognitoUser } from '@aws-amplify/auth'

export interface IFolder {
  id: string
  name: string
  description: string
  activities: Array<IActivity>
}

export interface IActivity {
  // Duration will be the state of the activity and will be post to the api after some interval. Does this make sense?
  id: string
  name: string
  icon: string
  description: string
  // start: number
  // number is easier to work with compared to Date
  color: string
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
