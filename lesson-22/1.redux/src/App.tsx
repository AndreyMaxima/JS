import React, { useState } from 'react';
import List from './components/List';

const App = () => {
  const [records, setRecords] = useState([] as Array<string>);
  const handleAddRcord = (text: string) => {
    setRecords([...records, text]);
  };
  return (
    <List
      records={records}
      addCallback={handleAddRcord}
    />
  );
};
export default App;
