export interface ListResponseType<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface OwnerType {
  firstName?: string;
  lastName?: string;
  id?: string;
}

export interface CommentType {
  id?: string;
  message?: string;
  post?: string;
  publishDate?: string;
  owner?: OwnerType;
}

export interface UserResponse {
  id?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  email?: string;
  dateOfBirth?: string;
  registerDate?: string;
  phone?: string;
  picture?: string;
}

export interface PostListResponse extends ListResponseType<CommentType> {
}

export interface ResponseError {
  error: string;
}
