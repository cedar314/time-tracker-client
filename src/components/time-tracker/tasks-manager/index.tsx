import React, { useState, useContext } from 'react'
import UserDataContext from 'context/userData.context'

//interface
import { IUser } from 'config/interfaces'

//child components
import TaskCard from './components/TaskCard'
import Folder from './components/Folder'
import TaskSetting from './components/TaskSetting'
import FolderSetting from './components/FolderSetting'

export default function ActivitiesManager() {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false)
  const [isAddingFolder, setIsAddingFolder] = useState<boolean>(false)
  const { userData } = useContext(UserDataContext)

  function toggleEditMode() {
    setEditMode((editMode) => !editMode)
  }

  function toggleIsAddingTask() {
    setIsAddingTask((isAdding) => !isAdding)
  }

  function toggleIsAddingFolder() {
    setIsAddingFolder((isAdding) => !isAdding)
  }

  return (
    <div className="grow px-6">
      {userData && (
        <>
          <PageTitle user={userData} />
          <AddFolderButton onClick={toggleIsAddingFolder} />
          <AddTaskButton onClick={toggleIsAddingTask} />
          <EditTaskButton onClick={toggleEditMode} />
          {isAddingTask && <TaskSetting isNew={true} />}
          {isAddingFolder && <FolderSetting />}
          {userData.taskFolders[0].children.map((task) => (
            <TaskCard key={task._id} activity={task} />
          ))}
          {userData.taskFolders.slice(1).map((folder) => (
            <Folder key={folder._id} folder={folder} />
          ))}
          <div className="my-4">Reminder</div>
        </>
      )}
    </div>
  )
}

function PageTitle(props: { user: IUser }) {
  return (
    <div className="my-4 flex items-center">
      <div className="font-bold">{props.user.name}&#39;s Task</div>
    </div>
  )
}

function EditTaskButton(props: { onClick: () => void }) {
  return (
    <button
      onClick={props.onClick}
      className="rounded border border-gray-800 px-2 mx-4"
    >
      Edit task
    </button>
  )
}

function AddTaskButton(props: { onClick: () => void }) {
  return (
    <button
      onClick={props.onClick}
      className="rounded border border-gray-800 px-2 mx-4"
    >
      Add task
    </button>
  )
}

function AddFolderButton(props: { onClick: () => void }) {
  return (
    <button
      onClick={props.onClick}
      className="rounded border border-gray-800 px-2 mx-4"
    >
      Add folder
    </button>
  )
}
