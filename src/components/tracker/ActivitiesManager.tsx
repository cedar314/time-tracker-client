import React, { useEffect, useState } from 'react'
import { hexToHSL } from 'functions/colorConverter'
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
  return <FolderCard folder={folder} />
}

function FolderCard({ folder }: { folder: IFolder }) {
  return (
    <div className="flex items-center bg-white rounded-md my-2 mx-4 px-2 shadow-md">
      <img
        className="mx-4 w-6"
        src="https://img.icons8.com/small/32/585858/folder-invoices--v1.png"
      />
      <SeparatorLine />
      <div className="px-4 grow">
        <div>{folder.name}</div>
        <div>{folder.description}</div>
      </div>
      <div>
        {folder.activities.length} task{folder.activities.length > 1 ? 's' : ''}
      </div>
    </div>
  )
}

// function ActivityCard({ activities }: { activities: IActivity }) {
//   return (
//     <div
//       style={{
//         backgroundColor: activities.isActive ? activities.color : 'white',
//         border: activities.isActive
//           ? `1px solid ${activities.color}`
//           : '1px solid black',
//         color: !activities.isActive
//           ? 'black'
//           : hexToHSL(activities.color)[2] > 50
//           ? 'black'
//           : 'white',
//       }}
//       className="rounded-xl my-1 py-2 px-4"
//     >
//       {children.name}
//     </div>
//   )
// }

function SeparatorLine() {
  return <div className="self-stretch w-[1.5px] bg-gray-300"></div>
}
