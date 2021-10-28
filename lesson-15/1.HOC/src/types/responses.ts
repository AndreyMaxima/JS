interface CommonResponse {
  status: 'ok' | 'error';
}

export interface CommentResponse extends CommonResponse {
  result: Array<CommentType>;
}

export interface CommentType {
  name?: string;
  text?: string;
}
