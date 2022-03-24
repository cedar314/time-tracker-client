import { Auth } from 'aws-amplify'
import { createUserProfile } from 'adapters'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import { ICognitoUser } from 'config/interfaces'

export async function signUp(username: string, password: string, name: string) {
  // Register new user using username (email), password and name.
  // Trigger aws-amplify signUp function and create a new user profile.
  try {
    const user = await Auth.signUp({
      username,
      password,
      attributes: {
        name,
      },
    })
    createUserProfile(user.userSub, name)
    return user
  } catch (error) {
    console.log('error signing up:', error)
  }
}

export async function confirmSignUp(username: string, code: string) {
  try {
    await Auth.confirmSignUp(username, code)
  } catch (error) {
    console.log('error confirming sign up', error)
  }
}

export async function signIn(username: string, password: string) {
  // Sign in user using username (email) and password.
  try {
    const user = await Auth.signIn(username, password)
    return user
  } catch (error) {
    console.log('error signing in', error)
  }
}

export function facebookSignIn() {
  return Auth.federatedSignIn({
    provider: CognitoHostedUIIdentityProvider.Facebook,
  })
}

export function googleSignIn() {
  return Auth.federatedSignIn({
    provider: CognitoHostedUIIdentityProvider.Google,
  })
}

export async function signOut() {
  try {
    await Auth.signOut()
  } catch (error) {
    console.log('error signing out: ', error)
  }
}

export async function getCurrentUser(): Promise<ICognitoUser> {
  return await Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
}
