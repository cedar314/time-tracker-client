import React, { CSSProperties, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../assets/svg/LogoPlaceholder.png'
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
      className="w-[180px] shadow-[5px_0px_10px_-5px_rgba(0,0,0,0.3)] bg-white rounded-tr-xl
      hidden sm:flex flex-col sticky left-0 text-[#777]"
    >
      <div className="flex flex-col">
        <Logo />
        <SideNavLink to="/" icon={greyClockIcon} activeIcon={whiteClockIcon}>
          Tracker
        </SideNavLink>
        <SideNavLink
          to="dashboard"
          icon={greyChartIcon}
          activeIcon={whiteChartIcon}
        >
          Dashboard
        </SideNavLink>
        <SideNavLink
          to="calendar"
          icon={greyCalendarIcon}
          activeIcon={whiteCalendarIcon}
        >
          Calendar
        </SideNavLink>
      </div>
      <div className="flex flex-col mt-auto">
        <SeparatorLine />
        <SideNavLink
          to="setting"
          icon={greyUserIcon}
          activeIcon={whiteUserIcon}
        >
          Settings
        </SideNavLink>
        <SideNavLink
          to="login"
          icon={greyLogoutIcon}
          activeIcon={whiteLogoutIcon}
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
  icon,
  activeIcon,
  children,
}: {
  to: string
  icon: string
  activeIcon: string
  children: string
}) {
  const activeStyle: CSSProperties = {
    backgroundColor: '#F58320',
    color: 'white',
  }

  const [active, setActive] = useState<boolean>(false)

  return (
    <NavLink
      style={({ isActive }) => {
        return {
          ...(isActive ? activeStyle : null),
        }
      }}
      className="flex items-center h-10  my-1 mx-3 px-2 rounded-lg hover:bg-gray-200"
      to={to}
    >
      <img className="h-full mr-3 py-2" src={active ? activeIcon : icon} />
      <div>{children}</div>
    </NavLink>
  )
}

function SeparatorLine() {
  return <div className="h-[2px] w-full bg-gray-300"></div>
}

// function UserAvatar() {
//   return <div className="ml-auto">User Avatar</div>
// }

export default Navbar
