import React from 'react'
import { ITask } from 'config/interfaces'

export default function ActivityCard({ activity }: { activity: ITask }) {
  return (
    <div className="flex items-center bg-white rounded-md my-4 px-2 shadow-[0px_0px_5px_-2px_rgba(0,0,0,0.3)] hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)]">
      {/* <img className="mx-6 w-5" src={activity.icon} /> */}
      <SeparatorLine />
      <div className="my-1 px-4 grow">
        <div className="text-[#333] font-semibold">{activity.name}</div>
        <div className="text-[#777] text-sm">{activity.description}</div>
      </div>
      <ActivityClock />
    </div>
  )
}

function ActivityClock() {
  return <div>20:10:34</div>
}

function SeparatorLine() {
  return <div className="self-stretch w-[1.2px] bg-gray-300 rounded-full"></div>
}
