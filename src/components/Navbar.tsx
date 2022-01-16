import React from 'react'

function Navbar() {
  return (
    <nav className="sticky flex flex-row">
      <Logo />
      <UserAvatar />
    </nav>
  )
}

function Logo() {
  return <div>Logo</div>
}

function UserAvatar() {
  return <div className="ml-auto">User Avatar</div>
}

export default Navbar
