import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../functions/auth'
import { Formik } from 'formik'
import { AuthForm, AuthField, AuthSubmitButton } from './components'

export default function Register() {
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        console.log('clicked')
        await signUp(values.email, values.password, values.name)
        navigate('/auth/verify')
      }}
    >
      {({ isSubmitting }) => (
        <AuthForm>
          <h1 className="text-xl">REGISTER</h1>
          <AuthField name="name" placeholder="Name" type="text" />
          <AuthField name="email" placeholder="Email" type="email" />
          <AuthField name="password" placeholder="Password" type="password" />
          <AuthSubmitButton disabled={isSubmitting}>
            Create Account
          </AuthSubmitButton>
        </AuthForm>
      )}
    </Formik>
  )
}
