import React from 'react'
import { Form, Field } from 'formik'

export function AuthForm({ children }: { children: Array<JSX.Element> }) {
  return (
    <Form className="absolute right-8 top-8 flex flex-col gap-y-2 w-[300px] px-4 py-4 rounded-xl bg-white shadow-lg">
      {children}
    </Form>
  )
}

export function AuthField({
  name,
  placeholder,
  type,
}: {
  name: string
  placeholder: string
  type: string
}) {
  return (
    <Field
      className="border-2 rounded-md border-gray-500"
      name={name}
      placeholder={placeholder}
      type={type}
    />
  )
}

export function AuthSubmitButton({
  disabled,
  children,
}: {
  disabled: boolean
  children: string
}) {
  return (
    <button
      className="rounded-md bg-sky-500 text-white py-2"
      disabled={disabled}
      type="submit"
    >
      {children}
    </button>
  )
}
