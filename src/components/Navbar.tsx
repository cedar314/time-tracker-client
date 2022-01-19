import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../assets/svg/LogoPlaceholder.png'

function Navbar() {
  return (
    <>
      <MobileNav />
      <SideNav />
    </>
  )
}

function MobileNav() {
  return (
    <nav className="fixed w-screen h-[64px] bottom-0 flex item-center justify-evenly bg-gray-900 sm:hidden">
      <MobileNavLink
        to="/"
        iconSrc="https://img.icons8.com/windows/64/ffffff/stopwatch.png"
      />
      <MobileNavLink
        to="dashboard"
        iconSrc="https://img.icons8.com/ios/50/ffffff/combo-chart--v1.png"
      />
      <MobileNavLink
        to="calendar"
        iconSrc="https://img.icons8.com/ios/50/ffffff/calendar--v1.png"
      />
      <MobileNavLink
        to="setting"
        iconSrc="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-user-interface-kiranshastry-solid-kiranshastry-1.png"
      />
    </nav>
  )
}

function MobileNavLink({ to, iconSrc }: { to: string; iconSrc: string }) {
  return (
    <Link className="py-3 w-[25%] active:bg-gray-600" to={to}>
      <img className="h-full mx-auto" src={iconSrc} />
    </Link>
  )
}

function SideNav() {
  return (
    <nav
      className="shadow-[5px_0px_10px_-5px_rgba(0,0,0,0.3)] border-slate-600 rounded-tr-xl
      hidden sm:flex flex-col sticky top-0 left-0 w-[160px] h-screen"
    >
      <div className="flex flex-col">
        <Logo />
        <SideNavLink
          to="/"
          iconSrc="https://img.icons8.com/windows/64/585858/stopwatch.png"
        >
          Tracker
        </SideNavLink>
        <SideNavLink
          to="dashboard"
          iconSrc="https://img.icons8.com/ios/50/585858/combo-chart--v1.png"
        >
          Dashboard
        </SideNavLink>
        <SideNavLink
          to="calendar"
          iconSrc="https://img.icons8.com/ios/50/585858/calendar--v1.png"
        >
          Calendar
        </SideNavLink>
      </div>
      <div className="flex flex-col mt-auto">
        <SeparatorLine />
        <SideNavLink
          to="setting"
          iconSrc="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/585858/external-user-interface-kiranshastry-solid-kiranshastry-1.png"
        >
          Settings
        </SideNavLink>
        <SideNavLink
          to="login"
          iconSrc="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/585858/external-logout-real-estate-kmg-design-detailed-outline-kmg-design.png"
        >
          Logout
        </SideNavLink>
      </div>
    </nav>
  )
}

function Logo() {
  return <img className="mt-4 mb-4 mx-4" src={LogoImg} alt="Logo" />
}

function SideNavLink({
  to,
  iconSrc,
  children,
}: {
  to: string
  iconSrc: string
  children: string
}) {
  return (
    <NavLink className="h-10 py-2 my-1 rounded" to={to}>
      <img className="h-full mx-auto inline mr-2" src={iconSrc} />
      <span>{children}</span>
    </NavLink>
  )
}

function SeparatorLine() {
  return <div className="h-[2px] w-full bg-gray-300"></div>
}

function UserAvatar() {
  return <div className="ml-auto">User Avatar</div>
}

export default Navbar
