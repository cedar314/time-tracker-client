import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../functions/auth'
import { Formik } from 'formik'
import { AuthForm, AuthField, AuthSubmitButton } from './components'

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
          <h1 className="text-xl">SIGN IN</h1>
          <AuthField name="email" placeholder="Email" type="email" />
          <AuthField name="password" placeholder="Password" type="password" />
          <AuthSubmitButton disabled={isSubmitting}>Sign In</AuthSubmitButton>
        </AuthForm>
      )}
    </Formik>
  )
}
