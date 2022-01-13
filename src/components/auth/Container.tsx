import React from 'react'
import { ReactComponent as Image } from 'assets/svg/authentication.svg'

type Props = {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="container grid grid-cols-1 px-6 py-12 space-x-2 lg:grid-cols-2 md:pt-24">
        {children}
        <div className="hidden lg:flex">
          <Image width="100%" />
        </div>
      </div>
    </div>
  )
}

export default Container
