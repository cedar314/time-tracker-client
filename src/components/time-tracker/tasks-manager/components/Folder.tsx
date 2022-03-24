import React, { useState } from 'react'

//interface
import { IFolder, ITask } from 'config/interfaces'

// child components
import FolderCard from './FolderCard'
import TaskCard from './TaskCard'

export default function ActivityFolder({ folder }: { folder: IFolder }) {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div className="bg-[#dfdfdf] my-4 rounded-md">
      <FolderCard
        folder={folder}
        isOpen={isOpen}
        onClick={() => setOpen((open) => !open)}
      />
      <div className="px-4">
        {isOpen &&
          folder.children.map((activity: ITask) => (
            <TaskCard key={activity._id} activity={activity} />
          ))}
        {isOpen && <div className="h-1"></div>}
      </div>
    </div>
  )
}
