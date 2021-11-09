import React, { useEffect, useState } from 'react';
import listStore from './stores/list';
import { addRecordAction } from './actions/list';
import List from './components/List';
import { CommentsState } from './types/state';
import Comments from './components/Comments';
import { loadCommentsAction } from './actions/comments';
import commentsStore from './stores/comments';

const App = () => {
  const [records, setRecords] = useState([] as Array<string>);
  const [commentsState, setCommentsState] = useState({} as CommentsState);
  const addRecord = (text: string) => {
    addRecordAction(text);
  };

  useEffect(() => {
    commentsStore.on('change', () => setCommentsState(commentsStore.getState()));
    listStore.on('change', () => setRecords(listStore.getAllRecords()));
    setRecords(listStore.getAllRecords());
    loadCommentsAction(0, 50);
  }, []);

  return (
    <div className="App">
      <List
        records={records}
        addRecordCallback={addRecord}
      />
      <Comments
        commentList={commentsState.commentList}
        isLoading={commentsState.isLoading}
      />
    </div>
  );
};
export default App;
