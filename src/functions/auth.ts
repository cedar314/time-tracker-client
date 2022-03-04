import { Auth } from 'aws-amplify'

export async function signUp(username: string, password: string, name: string) {
  try {
    console.log('asd')
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        name,
      },
    })
    console.log(user)
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
  try {
    const user = await Auth.signIn(username, password)
    return user
  } catch (error) {
    console.log('error signing in', error)
  }
}

export async function signOut() {
  try {
    await Auth.signOut()
  } catch (error) {
    console.log('error signing out: ', error)
  }
}

export function getCurrentUser() {
  return Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
}
