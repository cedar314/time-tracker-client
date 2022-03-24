import React from 'react'
import TasksManager from './tasks-manager'
import SideCalendar from './side-calendar'

export default function TimeTracker() {
  return (
    <div className="grow flex flex-col lg:flex-row mb-[64px] sm:mb-0">
      <TasksManager />
      <SideCalendar />
    </div>
  )
}
