import React from 'react'
import { ErrorMessage as FormikErrorMessage } from 'formik'

type ErrorMessageProps = {
  name: string
}

function ErrorMessage({ name }: ErrorMessageProps) {
  return (
    <FormikErrorMessage
      name={name}
      component="p"
      className="text-sm font-medium text-red-400"
    />
  )
}

export default ErrorMessage
