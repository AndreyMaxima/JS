export interface State {
  todo: ToDoState
}

export interface ToDoState {
  records: Array<ToDoRecord>;
}

export interface ToDoRecord {
  text: string;
  done: boolean;
}
