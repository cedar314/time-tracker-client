import React, { useEffect, useState } from 'react'
import { getActivityFolders } from 'adapters/activitiesAdapter'
import { IActivity, IFolder } from 'app/interfaces'

export default function ActivitiesManager() {
  const [activityFolders, setActivityFolder] = useState<IFolder[]>([])

  useEffect(() => {
    getActivityFolders().then((value) => setActivityFolder(value))
  }, [])

  console.log(activityFolders)
  return (
    <div className="grow">
      {activityFolders.map((folder) => (
        <ActivityFolder key={folder.id} folder={folder} />
      ))}
    </div>
  )
}

function ActivityFolder({ folder }: { folder: IFolder }) {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div className="bg-[#dfdfdf] mx-8 my-4 rounded-md">
      <FolderCard
        folder={folder}
        isOpen={isOpen}
        onClick={() => setOpen((open) => !open)}
      />
      {isOpen &&
        folder.activities.map((activity: IActivity) => (
          <ActivityCard key={activity.id} activities={activity} />
        ))}
      {isOpen && <div className="h-1"></div>}
    </div>
  )
}

function FolderCard({
  folder,
  isOpen,
  onClick,
}: {
  folder: IFolder
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div
      className="flex items-center bg-white rounded-md my-2 px-2 shadow-md"
      onClick={onClick}
    >
      <img
        className="mx-4 w-6"
        src="https://img.icons8.com/small/32/585858/folder-invoices--v1.png"
      />
      <SeparatorLine />
      <div className="my-1 px-4 grow">
        <div className="text-[#333] font-semibold">{folder.name}</div>
        <div className="text-[#777] text-sm">{folder.description}</div>
      </div>
      <div className="flex items-center text-[#777] text-sm">
        <div>
          {folder.activities.length} task
          {folder.activities.length > 1 ? 's' : ''}
        </div>
        <img
          className={`mx-2 w-[20px] ${!isOpen && 'rotate-90'}`}
          src="https://img.icons8.com/material-outlined/48/888888/expand-arrow--v1.png"
        />
      </div>
    </div>
  )
}

function ActivityCard({ activities }: { activities: IActivity }) {
  return (
    <div className="flex items-center bg-white rounded-md my-4 px-2 mx-4 shadow-md">
      <img className="mx-6 w-5" src={activities.icon} />
      <SeparatorLine />
      <div className="my-1 px-4 grow">
        <div className="text-[#333] font-semibold">{activities.name}</div>
        <div className="text-[#777] text-sm">{activities.description}</div>
      </div>
    </div>
  )
}

function SeparatorLine() {
  return <div className="self-stretch w-[1.2px] bg-gray-300 rounded-full"></div>
}
