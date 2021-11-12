export interface Action {
  type: string
}

export interface ListActionType extends Action{
  newRecord?: string
}
