import React, { CSSProperties, ReactComponentElement } from 'react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import LogoImg from '../assets/img/Logo.png'
import { ReactComponent as HomeSvg } from '../assets/svg/home.svg'
import { ReactComponent as BarChartSvg } from '../assets/svg/bar-chart.svg'
import { ReactComponent as CalendarSvg } from '../assets/svg/calendar.svg'
import { ReactComponent as UserSvg } from '../assets/svg/avatar-user.svg'
import { ReactComponent as ExitSvg } from '../assets/svg/exit.svg'
import whiteClockIcon from '../assets/icon/whiteNavIcon/clock.png'
import whiteChartIcon from '../assets/icon/whiteNavIcon/chart.png'
import whiteCalendarIcon from '../assets/icon/whiteNavIcon/calendar.png'
import whiteUserIcon from '../assets/icon/whiteNavIcon/user.png'
import whiteLogoutIcon from '../assets/icon/whiteNavIcon/logout.png'
import greyClockIcon from '../assets/icon/greyNavIcon/clock.png'
import greyChartIcon from '../assets/icon/greyNavIcon/chart.png'
import greyCalendarIcon from '../assets/icon/greyNavIcon/calendar.png'
import greyUserIcon from '../assets/icon/greyNavIcon/user.png'
import greyLogoutIcon from '../assets/icon/greyNavIcon/logout.png'

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
      <MobileNavLink to="/">
        <HomeSvg fill="white" className="h-full mx-auto my-auto" />
      </MobileNavLink>
      <MobileNavLink to="dashboard">
        <BarChartSvg
          fill="white"
          className="h-full -rotate-90 mx-auto my-auto"
        />
      </MobileNavLink>
      <MobileNavLink to="calendar">
        <CalendarSvg fill="white" className="h-full mx-auto my-auto" />
      </MobileNavLink>
      <MobileNavLink to="setting">
        <UserSvg fill="white" className="h-full mx-auto my-auto" />
      </MobileNavLink>
    </nav>
  )
}

function MobileNavLink({
  to,
  children,
}: {
  to: string
  children: React.SVGProps<SVGSVGElement>
}) {
  return (
    <Link className="py-3 w-[25%] active:bg-gray-600" to={to}>
      {children}
    </Link>
  )
}

function SideNav() {
  return (
    <nav
      className="w-[180px] shadow-[5px_0px_10px_-5px_rgba(0,0,0,0.3)] bg-white rounded-tr-xl
      hidden sm:flex flex-col sticky left-0 text-[#777]"
    >
      <div className="flex flex-col">
        <Logo />
        <SideNavLink to="/">Tracker</SideNavLink>
        <SideNavLink to="dashboard">Dashboard</SideNavLink>
        <SideNavLink to="calendar">Calendar</SideNavLink>
      </div>
      <div className="flex flex-col mt-auto">
        <SeparatorLine />
        <SideNavLink to="setting">Setting</SideNavLink>
        <SideNavLink to="login">Logout</SideNavLink>
      </div>
    </nav>
  )
}

function Logo() {
  return (
    <img className="mt-4 mb-8 mx-auto w-[130px]" src={LogoImg} alt="Logo" />
  )
}

function SideNavLink({ to, children }: { to: string; children: string }) {
  const activeStyle: CSSProperties = {
    backgroundColor: '#F58320',
    color: 'white',
  }
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })
  const fill = match ? '#fff' : '#777'
  return (
    <Link
      style={match ? activeStyle : undefined}
      className="flex items-center h-10  my-1 mx-3 px-2 py-2 rounded-lg hover:bg-gray-200"
      to={to}
    >
      {to === '/' ? (
        <HomeSvg fill={fill} className="h-full w-[40px]" />
      ) : to === 'dashboard' ? (
        <BarChartSvg fill={fill} className="h-full w-[40px] -rotate-90" />
      ) : to === 'calendar' ? (
        <CalendarSvg fill={fill} className="h-full w-[40px]" />
      ) : to === 'setting' ? (
        <UserSvg fill={fill} className="h-full w-[40px]" />
      ) : to === 'login' ? (
        <ExitSvg fill={fill} className="h-full w-[40px] -scale-100" />
      ) : null}
      {children}
    </Link>
  )
}

function SeparatorLine() {
  return <div className="h-[2px] self-stretch bg-gray-300"></div>
}

// function UserAvatar() {
//   return <div className="ml-auto">User Avatar</div>
// }

export default Navbar
