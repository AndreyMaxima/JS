export interface Action {
  type: string;
}

export interface TodoAction extends Action{
  record?: string
  filter?: string
}
