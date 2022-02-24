import React from 'react'
import { ReactComponent as ChevronSvg } from '../../assets/svg/up-chevron.svg'

export default function CurrentActivities() {
  return (
    <div className="hidden sm:flex flex-col lg:w-[300px] bg-white px-4 py-4">
      <CalendarButton />
      <DayControl />
      <DayCalendar />
    </div>
  )
}

function CalendarButton() {
  return (
    <button className="bg-[#f78f34] py-1 rounded-lg text-white">
      View calendar
    </button>
  )
}

function DayControl() {
  return (
    <div className="flex items-center my-5">
      <button className="h-8 rounded-lg border border-gray-300 text-[#8320F5] font-semibold text-sm text-center px-3 mr-2">
        Today
      </button>
      <button className="w-8 h-8 rounded-lg border border-gray-300 mr-2">
        <ChevronSvg fill="#8320F5" className="-rotate-90 mx-auto my-auto" />
      </button>
      <button className="w-8 h-8 rounded-lg border border-gray-300 mr-2">
        <ChevronSvg fill="#8320F5" className="rotate-90 mx-auto my-auto" />
      </button>
      <div className="ml-auto">Thu, Feb 2</div>
    </div>
  )
}

function DayCalendar() {
  const time = []
  for (let i = 0; i < 24; i++) time.push(i)

  return (
    <div className="flex grow bg-gray-100 rounded-xl overflow-auto scrollbar-hidden relative">
      <div>
        {time.map((time) => (
          <TimeCell key={time} timeIn24h={time} />
        ))}
      </div>
      <div className="grow mx-2">
        {time.map((time) => (
          <GridCell key={time + 'cell'} />
        ))}
      </div>
      <div></div>
    </div>
  )
}

function TimeCell({ timeIn24h }: { timeIn24h: number }) {
  return (
    <div className="h-14 w-[50px] relative">
      <div className="absolute -top-[10px] right-0 text-gray-400 text-sm">
        {timeIn24h < 12
          ? `${timeIn24h} am`
          : timeIn24h === 12
          ? '12 pm'
          : `${timeIn24h - 12} pm`}
      </div>
    </div>
  )
}

function GridCell() {
  return (
    <div className="h-14 relative">
      <div className="absolute top-0 rounded-full bg-gray-400 w-full h-[1.5px]"></div>
    </div>
  )
}

function ActivityCell({
  name,
  start,
  duration,
  isActive,
}: {
  name: string
  start: number
  duration: number
  isActive: boolean
}) {
  return <div className=""></div>
}
