import React from 'react'
import { Helmet } from 'react-helmet-async'

type HeadProps = {
  title: string
  desc: string
  children?: React.ReactNode
}

function Head({ title, desc, children }: HeadProps) {
  return (
    <Helmet>
      <title>{title} - Time Tracker</title>
      <meta name="description" content={desc} />
      {children}
    </Helmet>
  )
}

export default Head
