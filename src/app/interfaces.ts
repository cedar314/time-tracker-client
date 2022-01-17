export interface IActivityType {
  // Duration will be the state of the activity and will be post to the api after some interval. Does this make sense?
  id: string
  name: string
  start: number
  // number is easier to work with compared to Date
  description?: string
  color: string
}
