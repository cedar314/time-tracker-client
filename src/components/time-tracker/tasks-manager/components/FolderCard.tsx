import React from 'react'
import { IFolder } from 'config/interfaces'

export default function FolderCard({
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
      className="flex items-center bg-white rounded-md my-2 shadow-[0px_0px_10px_-2px_rgba(0,0,0,0.3)] hover:shadow-[0px_0px_20px_-2px_rgba(0,0,0,0.3)]"
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
          {folder.children.length} task
          {folder.children.length > 1 ? 's' : ''}
        </div>
        <img
          className={`mx-2 w-[20px] ${!isOpen && 'rotate-90'}`}
          src="https://img.icons8.com/material-outlined/48/888888/expand-arrow--v1.png"
        />
      </div>
    </div>
  )
}

function SeparatorLine() {
  return <div className="self-stretch w-[1.2px] bg-gray-300 rounded-full"></div>
}
