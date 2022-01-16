import React from 'react'
import { hexToHSL } from 'functions/colorConverter'

export default function ActivitiesManager() {
  return (
    <div className="relative flex-none w-[30%] border-[3px] border-slate-700 rounded-xl self-start">
      <span className="absolute -top-4 left-6 bg-white px-2 text-2xl font-semibold">
        Tasks
      </span>
      <div className="mt-6 mb-3 mx-2">
        {exampleActivities.map((activity: activityType) => (
          <ActivityCard key={activity.id}>{activity}</ActivityCard>
        ))}
      </div>
    </div>
  )
}

function ActivityCard({ children }: { children: activityType }) {
  return (
    <div
      style={{
        backgroundColor: children.isActive ? children.color : 'white',
        border: children.isActive
          ? `1px solid ${children.color}`
          : '1px solid black',
        color: !children.isActive
          ? 'black'
          : hexToHSL(children.color)[2] > 50
          ? 'black'
          : 'white',
      }}
      className="rounded-xl my-1 py-2 px-4"
    >
      {children.name}
    </div>
  )
}

type activityType = {
  id: string
  name: string
  description?: string
  color: string
  isActive: boolean
  icon?: string
}

const exampleActivities: Array<activityType> = [
  {
    id: '123esqadq',
    name: 'Sleep',
    color: '#2c318a',
    isActive: true,
  },
  {
    id: '321rhqif',
    name: 'Study',
    color: '#8b8dad',
    isActive: true,
  },
  {
    id: 'ad33rcff',
    name: 'Work',
    color: '#888c31',
    isActive: false,
  },
  {
    id: '33rcsadff',
    name: 'Reading',
    color: '#868031',
    isActive: false,
  },
]
