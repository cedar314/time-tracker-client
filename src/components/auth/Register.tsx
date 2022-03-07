import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp, facebookSignIn, googleSignIn } from 'functions/auth'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  AuthForm,
  AuthField,
  AuthSubmitButton,
  FieldError,
  FacebookButton,
  GoogleButton,
} from './components'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Password must contain at least: 8 characters, 1 uppercase, 1 lowercase, and 1 number.'
    ),
})

export default function Register() {
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log('clicked')
        await signUp(values.email, values.password, values.name)
        navigate('/auth/verify')
      }}
    >
      {({ isSubmitting, errors, touched, isValid }) => (
        <AuthForm>
          <h1 className="mx-auto text-xl">Register</h1>
          <AuthField name="name" placeholder="Name" type="text" />
          {touched.name && errors.name && (
            <FieldError>{errors.name}</FieldError>
          )}
          <AuthField name="email" placeholder="Email" type="email" />
          {touched.email && errors.email && (
            <FieldError>{errors.email}</FieldError>
          )}
          <AuthField name="password" placeholder="Password" type="password" />
          {touched.password && errors.password && (
            <FieldError>{errors.password}</FieldError>
          )}
          <AuthSubmitButton disabled={isSubmitting || !isValid}>
            Create Account
          </AuthSubmitButton>
          <div className="mx-auto font-bold text-gray-600">OR</div>
          <FacebookButton onClick={facebookSignIn} />
          <GoogleButton onClick={googleSignIn} />
        </AuthForm>
      )}
    </Formik>
  )
}
