import React from 'react'
import { Formik, Form, Field } from 'formik'

function Verify() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="email" placeholder="Email" type="email" />
          <Field name="password" placeholder="Password" type="password" />
          <button disabled={isSubmitting} type="submit" className="bg-sky-600">
            Log In
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Verify
