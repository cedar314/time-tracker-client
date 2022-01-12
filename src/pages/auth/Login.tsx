import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      Login Page{' '}
      <Link className="underline" to="/">
        Go to Landing
      </Link>
    </div>
  )
}

export default Login
