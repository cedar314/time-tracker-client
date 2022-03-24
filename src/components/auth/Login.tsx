import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signIn, facebookSignIn, googleSignIn } from 'functions/auth'
import { Formik } from 'formik'
import {
  AuthForm,
  AuthField,
  AuthSubmitButton,
  FacebookButton,
  GoogleButton,
} from './components'

export default function Login() {
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await signIn(values.email, values.password)
        navigate('/')
      }}
    >
      {({ isSubmitting }) => (
        <AuthForm>
          <h1 className="text-xl mx-auto">SIGN IN</h1>
          <AuthField name="email" placeholder="Email" type="email" />
          <AuthField name="password" placeholder="Password" type="password" />
          <AuthSubmitButton disabled={isSubmitting}>Sign In</AuthSubmitButton>
          <Link to="../register">Create a new account.</Link>
          <div className="mx-auto font-bold text-gray-600">OR</div>
          <FacebookButton onClick={facebookSignIn} />
          <GoogleButton onClick={googleSignIn} />
        </AuthForm>
      )}
    </Formik>
  )
}
