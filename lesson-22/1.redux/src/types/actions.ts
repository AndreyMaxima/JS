export interface Action<T> {
  type: string
  payload: T
}

export interface ListActionPayload {
  newRecord: string
}
