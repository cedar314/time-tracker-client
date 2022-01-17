import React from 'react'
import Container from 'components/auth/Container'
import { Formik } from 'formik'
import * as Yup from 'yup'
import validate, { validationError } from 'functions/validation'
import Head from 'shared/customs/Head'
import Heading from 'components/auth/Heading'
import Form from 'components/auth/Form'
import Input from 'components/auth/Input'
import Button from 'components/auth/Button'
import Link from 'components/auth/Link'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(validationError('required', 'first name')),
  lastName: Yup.string().required(validationError('required', 'last name')),
  email: validate('email'),
  password: validate('password'),
})

function Login() {
  return (
    <Container>
      <div>
        <Head
          title="Login"
          desc="Log In to your account to see your activities"
        />
        <p className="font-bold text-gray-400 uppercase">Free Forever</p>
        <Heading>Log In to your account</Heading>
        <Link to="/register" desc="New member?" linkDesc="Create an account" />
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Input name="email" placeholder="Email" type="email" />
              <Input name="password" placeholder="Password" type="password" />
              <Button
                disabled={isSubmitting}
                type="submit"
                className="bg-sky-600"
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default Login
