import React from 'react'
import ActivitiesManager from './ActivitiesManager'
import CurrentActivities from './CurrentAcitivities'

export default function TimeTracker() {
  return (
    <div className="flex flex-col lg:flex-row">
      <ActivitiesManager />
      {/* <CurrentActivities /> */}
    </div>
  )
}
