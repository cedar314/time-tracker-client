import React from 'react'
import ActivitiesManager from './ActivitiesManager'
import CurrentActivities from './CurrentAcitivities'

export default function TimeTracker() {
  return (
    <div className="grow flex flex-col lg:flex-row mb-[64px] sm:mb-0">
      <ActivitiesManager />
      <CurrentActivities />
    </div>
  )
}
