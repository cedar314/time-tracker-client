import React from 'react'

type HeadingProps = {
  children: React.ReactNode
}

function Heading({ children }: HeadingProps) {
  return (
    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">
      {children} <span className="text-6xl text-sky-600">.</span>
    </h1>
  )
}

export default Heading
