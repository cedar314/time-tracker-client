import React from 'react'
import { signUp } from '../../functions/auth'
import { Formik, Field, Form } from 'formik'

function Register() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log('button pressed')
        signUp(values.email, values.password, values.name)
      }}
    >
      <Form>
        <Field name="name" placeholder="Name" type="text" />
        <Field name="email" placeholder="Email" type="email" />
        <Field name="password" placeholder="Password" type="password" />
        <div className="flex">
          <button type="submit" className="bg-sky-600">
            Create Account
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default Register
