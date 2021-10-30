export interface ListResponseType<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface OwnerType {
  firstName?: string;
  lastName?: string;
}

export interface CommentType {
  id?: string;
  message?: string;
  post?: string;
  publishDate?: string;
  owner?: OwnerType;
}

export interface PostListResponse extends ListResponseType<CommentType> {
}
