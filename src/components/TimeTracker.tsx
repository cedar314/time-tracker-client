import React, { useState } from 'react'
import { msTohhmmss } from 'functions/timeConverter'

export default function TimeTracker() {
  return (
    <div className="">
      <h1 className="relative -top-3 left-6 text-2xl font-semibold">
        Current Activities
      </h1>
      {exampleCurrentActivities.map((activity: currentActivityType) => (
        <CurrentActivity key={activity.id}>{activity}</CurrentActivity>
      ))}
    </div>
  )
}

function CurrentActivity({ children }: { children: currentActivityType }) {
  const [duration, setDuration] = useState(Date.now() - children.start)

  ;(function () {
    setInterval(() => {
      setDuration(Date.now() - children.start)
    }, 1000)
  })()

  return (
    <div className="mb-8">
      <div className="flex flex-row">
        <div className="w-[30%]">
          <h2 className="font-bold">{children.name}</h2>
          <p className="overflow-hidden whitespace-nowrap mr-4">
            {children.description}
          </p>
        </div>
        <div className="w-[30%] text-4xl self-center">
          {msTohhmmss(duration)}
        </div>
        <div className="w-[20%]">
          <h3>Goal</h3>
          <h3>Left</h3>
        </div>
      </div>
      <div className="ml-[20%]">
        <button className="bg-red-400 rounded-md w-20 py-1 my-6 ml-28 mr-4">
          Pause
        </button>
        <button className="bg-slate-400 rounded-md w-20 py-1 mx-4">Stop</button>
      </div>
    </div>
  )
}

type currentActivityType = {
  // Duration will be the state of the activity and will be post to the api after some interval. Does this make sense?
  id: string
  name: string
  start: number
  // number is easier to work with compared to Date
  description?: string
  color: string
}

const exampleCurrentActivities: Array<currentActivityType> = [
  {
    id: '123easdsqadq',
    name: 'Sleep',
    start: 1642301547698,
    color: '#2c318a',
  },
  {
    id: '321rh324qif',
    name: 'Study',
    start: 1642300747698,
    description: 'Study English, web dev, etc.',
    color: '#8b8dad',
  },
]
