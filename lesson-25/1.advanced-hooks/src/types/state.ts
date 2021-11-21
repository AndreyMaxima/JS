export interface State {
  todo: ToDoState
}

export interface ToDoState {
  records: Array<ToDoRecord>;
  filter: string
}

export interface ToDoRecord {
  text: string;
  done: boolean;
}
