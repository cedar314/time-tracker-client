import React, { ButtonHTMLAttributes } from 'react'
import {
  Field,
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
} from 'formik'
import { Link as ReactLink } from 'react-router-dom'
import { motion, MotionProps } from 'framer-motion'

type InputProps = {
  type?: 'text' | 'password' | 'email'
  name: string
  placeholder?: string
}

export function Input({ type = 'text', placeholder, name }: InputProps) {
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

export function Button({
  children,
  className,
  ...props
}: MotionProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      className={
        (className =
          'w-full h-16 font-semibold text-white md:w-1/2 rounded-3xl ' +
          className)
      }
      {...props}
    >
      {children}
    </motion.button>
  )
}

type FormProps = {
  children: React.ReactNode
}

export function Form({ children }: FormProps) {
  return (
    <FormikForm className="flex flex-col mt-8 space-y-4">{children}</FormikForm>
  )
}

type HeadingProps = {
  children: React.ReactNode
}

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">
      {children} <span className="text-6xl text-sky-600">.</span>
    </h1>
  )
}

type LinkProps = {
  to: string
  desc: string
  linkDesc: string
}

export function Link({ to, desc, linkDesc }: LinkProps) {
  return (
    <p className="mt-4 text-gray-400">
      {desc}{' '}
      <ReactLink className="text-sky-600 " to={to}>
        {linkDesc}
      </ReactLink>
    </p>
  )
}
