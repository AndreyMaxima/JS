import { EventEmitter } from 'events'; // Позволяет генерировать события, а также подписаться на выполнение действия по данному событию
import dispatcher from '../dispatcher';
import { LoadCommentActionType } from '../types/actions';
import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS } from '../constants/actions/comments';
import { CommentsState } from '../types/state';
import { CommentType } from '../types/api/dumMyApiResponses';

// Создание store
class AppStore extends EventEmitter {
  private state;

  constructor() {
    super();
    this.state = {} as CommentsState;
    this.getState = this.getState.bind(this);
    this.loadCommentsSucces = this.loadCommentsSucces.bind(this);
  }

  getState = () => this.state;

  loadCommentsSucces = (comments: Array<CommentType>) => {
    this.state = {
      commentList: comments,
      isLoading: false,
    };
    this.emit('change');
  };

  handleAction(action: LoadCommentActionType) {
    switch (action.type) {
      case LOAD_COMMENTS:
        this.state = { ...this.state, isLoading: true };
        this.emit('change');
        break;
      case LOAD_COMMENTS_SUCCESS:
        this.loadCommentsSucces(action.payload);
        break;
      default:
        () => {
        };
    }
  }
}

const commentsStore = new AppStore();

dispatcher.register(commentsStore.handleAction.bind(commentsStore));

export default commentsStore;
