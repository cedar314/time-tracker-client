import React, { useState } from 'react'

export default function CurrentActivities() {
  return (
    <div className="lg:w-[260px] bg-white px-4 py-4 flex flex-col">
      <button className="bg-[#f58320] py-1 rounded-md text-white mb-4">
        View calendar
      </button>
      <DayCalendar />
    </div>
  )
}

function DayCalendar() {
  return <div className="bg-[#f7f7f7] rounded-lg grow"></div>
}
