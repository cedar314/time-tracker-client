import React from 'react'
import { Field } from 'formik'
import ErrorMessage from './ErrorMessage'

type InputProps = {
  type?: 'text' | 'password' | 'email'
  name: string
  placeholder?: string
}

function Input({ type = 'text', placeholder, name }: InputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full h-16 px-8 font-semibold text-white bg-gray-700 border-none focus:ring-0 rounded-2xl"
      />
      <ErrorMessage name={name} />
    </div>
  )
}

export default Input
