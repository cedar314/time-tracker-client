import React from 'react'
import { Form as FormikForm } from 'formik'

type FormProps = {
  children: React.ReactNode
}

function Form({ children }: FormProps) {
  return (
    <FormikForm className="flex flex-col mt-8 space-y-4">{children}</FormikForm>
  )
}

export default Form
