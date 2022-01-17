import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

type LinkProps = {
  to: string
  desc: string
  linkDesc: string
}

function Link({ to, desc, linkDesc }: LinkProps) {
  return (
    <p className="mt-4 text-gray-400">
      {desc}{' '}
      <ReactLink className="text-sky-600 " to={to}>
        {linkDesc}
      </ReactLink>
    </p>
  )
}

export default Link
