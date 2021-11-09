import { EventEmitter } from 'events'; // Позволяет генерировать события, а также подписаться на выполнение действия по данному событию
import dispatcher from '../dispatcher';
import { AddRecordActionType } from '../types/actions';
import { ADD_RECORD } from '../constants/actions/list';

// Создание store
class AppStore extends EventEmitter {
  records;

  oldRecords: Array<string>;

  constructor() {
    super();
    this.records = ['1', '2'] as Array<string>;
    this.oldRecords = [];
    this.getAllRecords = this.getAllRecords.bind(this);
  }

  private addRecord(record: string) {
    this.oldRecords = this.records;
    this.records = [...this.records, record]; // Добавление записи в хранилище
    this.emit( // Генерация события (для этого наследовались от EventEmitter)
      'change', // Тип события
    );
  }

  getAllRecords() {
    return this.records;
  }

  handleAction(action: AddRecordActionType) {
    switch (action.type) {
      case ADD_RECORD:
        this.addRecord(action.payload);
        break;
      default:
        () => {
        };
    }
  }
}

const listStore = new AppStore();

dispatcher.register(listStore.handleAction.bind(listStore));

export default listStore;
