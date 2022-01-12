import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      Landing Page{' '}
      <Link className="underline" to="/login">
        Go to login
      </Link>
    </div>
  )
}

export default Landing
