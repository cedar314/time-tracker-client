export interface IActivity {
  // Duration will be the state of the activity and will be post to the api after some interval. Does this make sense?
  id: string
  name: string
  description?: string
  // start: number
  // number is easier to work with compared to Date
  color: string
}

export interface IFolder {
  id: string
  name: string
  description: string
  activities: Array<IActivity>
}
