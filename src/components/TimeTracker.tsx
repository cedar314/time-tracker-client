import React, { useState } from 'react'
import { msTohhmmss } from 'functions/timeConverter'
import { IActivityType } from 'app/interfaces'

export default function TimeTracker() {
  return (
    <div className="">
      <h1 className="relative text-2xl font-semibold -top-3 left-6">
        Current Activities
      </h1>
      {exampleCurrentActivities.map((activity: IActivityType) => (
        <CurrentActivity key={activity.id}>{activity}</CurrentActivity>
      ))}
    </div>
  )
}

function CurrentActivity({ children }: { children: IActivityType }) {
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
          <p className="mr-4 overflow-hidden whitespace-nowrap">
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
<<<<<<< HEAD
      <button className="w-20 py-1 my-6 mr-4 bg-red-400 rounded-md ml-28">
        Pause
      </button>
      <button className="w-20 py-1 mx-4 rounded-md bg-slate-400">Stop</button>
=======
      <div className="ml-[20%]">
        <button className="bg-red-400 rounded-md w-20 py-1 my-6 ml-28 mr-4">
          Pause
        </button>
        <button className="bg-slate-400 rounded-md w-20 py-1 mx-4">Stop</button>
      </div>
>>>>>>> 9657e792c6345f38e89536f2f81f166c9df49a81
    </div>
  )
}

const exampleCurrentActivities: Array<IActivityType> = [
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
