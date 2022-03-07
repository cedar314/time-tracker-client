import React from 'react'
import { ReactComponent as FacebookSvg } from 'assets/svg/facebook-icon.svg'
import { ReactComponent as GoogleSvg } from 'assets/svg/google-icon.svg'
import { Form, Field } from 'formik'

export function AuthForm({
  children,
}: {
  children: Array<JSX.Element | boolean | string | undefined>
}) {
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
      className="rounded-md bg-sky-500 text-white font-semibold h-[46px]"
      disabled={disabled}
      type="submit"
    >
      {children}
    </button>
  )
}

export function FacebookButton(props: { onClick: () => void }) {
  return (
    <button
      className="flex rounded-md bg-[#597bc0] text-white font-semibold h-[46px] px-4"
      type="button"
      onClick={props.onClick}
    >
      <FacebookSvg className="h-[60%] my-auto" />
      <div className="mx-auto my-auto">Continue with Facebook</div>
    </button>
  )
}

export function GoogleButton(props: { onClick: () => void }) {
  return (
    <button
      className="flex rounded-md border-[2px] border-gray-500 bg-white text-gray-500 font-semibold h-[46px] px-3"
      type="button"
      onClick={props.onClick}
    >
      <GoogleSvg className="h-[70%] my-auto" />
      <div className="mx-auto my-auto">Continue with Google</div>
    </button>
  )
}

export function FieldError({ children }: { children: string }) {
  return <div className="text-xs text-red-600">{children}</div>
}
