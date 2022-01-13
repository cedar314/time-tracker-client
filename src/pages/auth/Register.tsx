import React from 'react'
import { Button, Form, Heading, Input, Link } from 'components/auth/Form'
import Container from 'components/auth/Container'
import { Formik } from 'formik'
import * as Yup from 'yup'
import validate, { validationError } from 'functions/validation'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(validationError('required', 'first name')),
  lastName: Yup.string().required(validationError('required', 'last name')),
  email: validate('email'),
  password: validate('password'),
})

function Register() {
  return (
    <Container>
      <div>
        <p className="font-bold text-gray-400 uppercase">Free Forever</p>
        <Heading>Create a new account</Heading>
        <Link to="/login" desc="Already a Member?" linkDesc="Log In" />
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
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
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-2 md:flex-row">
                <Input name="firstName" placeholder="First name" type="text" />
                <Input name="lastName" placeholder="Last name" type="text" />
              </div>
              <Input name="email" placeholder="Email" type="email" />
              <Input name="password" placeholder="Password" type="password" />
              <div className="flex justify-between space-x-2">
                <Button type="button" className="bg-gray-600 ">
                  Change method
                </Button>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-sky-600"
                >
                  Create Account
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default Register
